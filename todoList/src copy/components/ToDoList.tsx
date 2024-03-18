import { useRecoilValue } from "recoil";
import CreateToDo from "./CreateToDo";
import { toDoSelector } from "../atoms";
import ToDo from "./ToDo";
import CategorySelector from "./CategorySelector";

function ToDoList() {
  const toDo = useRecoilValue(toDoSelector);

  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <CategorySelector />
      <CreateToDo />
      {toDo.map((item) => (
        <ToDo key={item.id} {...item} />
      ))}
    </div>
  );
}

export default ToDoList;
