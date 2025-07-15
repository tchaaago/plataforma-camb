import { collection, addDoc, Timestamp, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db, storage } from "../firebase/config";
import { deleteObject, getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

const DOCENTES_COLLECTION = "docentes";

export const DocenteService = {
/**
   * Cria um docente no Firestore com upload opcional da imagem no Storage.
   * @param {Object} docente - Dados do docente (name, degree, lattes).
   * @param {File | null} imageFile - Arquivo de imagem para upload (PNG/JPEG).
   * @returns {Promise<string>} ID do documento criado.
   */

async create(docente, imageFile) {
  try {
    let imageUrl = null;

    if (imageFile) {
      const storageRef = ref(storage, `docentes/${Date.now()}_${imageFile.name}`);
      await uploadBytes(storageRef, imageFile);
      imageUrl = await getDownloadURL(storageRef);
    }

    const dataToSave = {
      ...docente,
      imageUrl,
      createdAt: format(new Date(), "dd/MM/yyyy", { locale: ptBR }),
    };

    const docRef = await addDoc(collection(db, DOCENTES_COLLECTION), dataToSave);
    return docRef.id;
  } catch (error) {
    console.error("Erro ao criar docente:", error);
    throw error;
  }
},

async findAll() {
    try {
      const snapshot = await getDocs(collection(db, DOCENTES_COLLECTION));

      const docentes = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      return docentes;
    } catch (error) {
      console.error("Erro ao buscar docentes:", error);
      throw error;
    }
  },

  /**
   * Deleta um docente pelo ID e remove a imagem do Storage se existir.
   * @param {string} id - ID do documento no Firestore.
   * @param {string | null} imageUrl - URL da imagem para deletar do Storage.
   */
  async deleteById(id, imageUrl) {
    try {
      await deleteDoc(doc(db, DOCENTES_COLLECTION, id));

      if (imageUrl) {
        const imageRef = ref(storage, imageUrl);
        await deleteObject(imageRef);
      }
    } catch (error) {
      console.error("Erro ao deletar docente:", error);
      throw error;
    }
  },
};
