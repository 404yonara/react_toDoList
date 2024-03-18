import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { categoriesState } from "../atoms";

interface IForm {
  category: string;
}

function DeleteCategory() {
  const setCategories = useSetRecoilState(categoriesState);
  const { register, handleSubmit, formState, setValue } = useForm<IForm>();
  const onValid = (data: IForm) => {
    setCategories((oldCategories) =>
      oldCategories.filter((item) => item !== data.category)
    );
    setValue("category", "");
  };

  return (
    <form onSubmit={handleSubmit(onValid)}>
      <input
        {...register("category", {
          required: {
            value: true,
            message: "Please write a category you want to delete",
          },
        })}
        placeholder="Write a category you want to delete"
      />
      <span>{formState.errors?.category?.message}</span>
      <button>delete</button>
    </form>
  );
}

export default DeleteCategory;
