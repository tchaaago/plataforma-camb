import { collection, addDoc, Timestamp, getDocs } from "firebase/firestore";
import { db, storage } from "../firebase/config";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

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
        // Pasta e nome do arquivo (pode ajustar pra algo mais específico)
        const storageRef = ref(storage, `docentes/${Date.now()}_${imageFile.name}`);

        // Faz upload da imagem
        await uploadBytes(storageRef, imageFile);

        // Pega URL pública da imagem
        imageUrl = await getDownloadURL(storageRef);
      }

      // Monta dados para salvar, inclui imageUrl se existir
      const dataToSave = {
        ...docente,
        imageUrl,
        createdAt: Timestamp.now(),
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
};