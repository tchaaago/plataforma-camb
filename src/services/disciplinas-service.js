import { format } from "date-fns";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";
import { ptBR } from "date-fns/locale";

const DISCIPLINAS_COLLECTION = "disciplinas";

export const DisciplinasService = {
  async create(disciplina) {
    try {
    const dataToSave = {
      ...disciplina,
      createdAt: format(new Date(), "dd/MM/yyyy", { locale: ptBR }),
    };

      const docRef = await addDoc(collection(db, DISCIPLINAS_COLLECTION), dataToSave);

      return docRef.id;
    } catch (error) {
      console.error("Erro ao criar disciplina:", error);
      throw error;
    }
  },

  async findAll() {
      try {
        const snapshot = await getDocs(collection(db, DISCIPLINAS_COLLECTION));
  
        const disciplinas = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
  
        return disciplinas;
      } catch (error) {
        console.error("Erro ao buscar disciplinas:", error);
        throw error;
      }
    },
}