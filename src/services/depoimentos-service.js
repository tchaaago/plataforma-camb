import { collection, addDoc, Timestamp, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";

const DEPOIMENTOS_COLLECTION = "depoimentos";

export const DepoimentosService = {
/**
   * Cria um docente no Firestore com upload opcional da imagem no Storage.
   * @param {Object} depoimento - Dados do docente (name, degree, lattes).
   * @returns {Promise<string>} ID do documento criado.
   */
  async create(depoimento) {
    try {
      // Monta dados para salvar, inclui imageUrl se existir
      const dataToSave = {
        ...depoimento,
        createdAt: Timestamp.now(),
      };

      const docRef = await addDoc(collection(db, DEPOIMENTOS_COLLECTION), dataToSave);

      return docRef.id;
    } catch (error) {
      console.error("Erro ao criar depoimento:", error);
      throw error;
    }
  },

async findAll() {
    try {
      const snapshot = await getDocs(collection(db, DEPOIMENTOS_COLLECTION));

      const depoimentos = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      return depoimentos;
    } catch (error) {
      console.error("Erro ao buscar depoimento:", error);
      throw error;
    }
  },
};