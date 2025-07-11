import { Plus } from "lucide-react";
import { LinkButton } from "../components/linkButton/LinkButton";
import "./style.css";

export const DocentesDepoimentos = () => {
  return (
    <div>
      <main>
        <div className="board">
          <LinkButton
            icon={<Plus />}
            text="Novo Material"
            link="registrar"
          ></LinkButton>
        </div>
      </main>
    </div>
  );
};
