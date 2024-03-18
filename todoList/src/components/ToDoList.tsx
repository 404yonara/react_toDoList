import { useRecoilState, useRecoilValue } from "recoil";
import CreateToDo from "./CreateToDo";
import { categoriesState, toDoSelector } from "../atoms";
// import ToDo from "./ToDo";
import CategorySelector from "./CategorySelector";
import CreateCategory from "./CreateCategory";
import ToDo from "./ToDo";
import styled from "styled-components";
import DeleteCategory from "./DeleteCategory copy";

const Title = styled.h1`
  font-size: x-large;
`;

function ToDoList() {
  const toDo = useRecoilValue(toDoSelector);
  const [categories, setCategories] = useRecoilState(categoriesState);
  if (!categories.length) setCategories(["TO_DO"]);
  return (
    <div>
      <Title>To Dos</Title>
      <hr />
      <h2>Create Category</h2>
      <CreateCategory />
      <DeleteCategory />
      <hr />
      <h2>Create ToDos</h2>
      <CategorySelector />
      <CreateToDo />
      {toDo.map((item) => (
        <ToDo key={item.id} {...item} />
      ))}
    </div>
  );
}

export default ToDoList;
