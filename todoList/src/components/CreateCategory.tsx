import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { categoriesState } from "../atoms";

interface IForm {
  category: string;
}

function CreateCategory() {
  const [categories, setCategories] = useRecoilState(categoriesState);
  const { register, handleSubmit, formState, setValue } = useForm<IForm>();
  const onValid = (data: IForm) => {
    console.log("add to category", data.category);
    if (categories.includes(data.category)) return;
    setCategories((oldCategories) => [...oldCategories, data.category]);
    setValue("category", "");
  };

  return (
    <form onSubmit={handleSubmit(onValid)}>
      <input
        {...register("category", {
          required: { value: true, message: "Please write a new category" },
        })}
        placeholder="Write a new category"
      />
      <span>{formState.errors?.category?.message}</span>
      <button>Add</button>
    </form>
  );
}

export default CreateCategory;
