import { useRecoilValue, useSetRecoilState } from "recoil";
import { IToDo, categoriesState, toDoState } from "../atoms";

function ToDo({ text, category, id }: IToDo) {
  const categories = useRecoilValue(categoriesState);
  const setToDos = useSetRecoilState(toDoState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((item) => item.id === id);
      const newToDo = { text: text, id: id, category: name as any };
      return name !== "DELETE"
        ? [
            ...oldToDos.slice(0, targetIndex),
            newToDo,
            ...oldToDos.slice(targetIndex + 1),
          ]
        : [
            ...oldToDos.slice(0, targetIndex),
            ...oldToDos.slice(targetIndex + 1),
          ];
    });
  };

  return (
    <li>
      <span>{text}</span>
      {categories
        .filter((item) => item !== category)
        .map((item, index) => (
          <button key={index} name={item} onClick={onClick}>
            {item}
          </button>
        ))}
      <button name="DELETE" onClick={onClick}>
        Delete
      </button>
    </li>
  );
}

export default ToDo;
