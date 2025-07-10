import { Plus } from "lucide-react";
import { Link } from "react-router-dom";

export const DocentesDepoimentos = () => {
  return (
    <div>
      <main>
        <Link to="registrar">
          <Plus />
          Novo Material
        </Link>
      </main>
    </div>
  );
};
