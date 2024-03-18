import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { categoryState, toDoState } from "../atoms";

interface IForm {
  toDo: string;
}

function CreateToDo() {
  const setToDos = useSetRecoilState(toDoState);
  const category = useRecoilValue(categoryState);
  const { register, handleSubmit, formState, setValue } = useForm<IForm>();
  const onValid = (data: IForm) => {
    console.log("add to do", data.toDo);
    setValue("toDo", "");
    setToDos((oldToDos) => [
      { text: data.toDo, id: Date.now(), category },
      ...oldToDos,
    ]);
  };

  return (
    <form onSubmit={handleSubmit(onValid)}>
      <input
        {...register("toDo", {
          required: { value: true, message: "Please write a To Do" },
        })}
        placeholder="Write a to do"
      />
      <span>{formState.errors?.toDo?.message}</span>
      <button>Add</button>
    </form>
  );
}

export default CreateToDo;
