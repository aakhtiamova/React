import { RiDeleteBack2Line, RiRefreshLine } from "react-icons/ri";
import Button from "../UI/Button";

function TodosActions() {
  return (
    <>
      <Button title="Reset Todos">
        <RiRefreshLine />
      </Button>
      <Button title="Clear Completed Todos">
        <RiDeleteBack2Line />
      </Button>
    </>
  );
}

export default TodosActions;
