import { useRecoilValue, useSetRecoilState } from "recoil";
import { categoriesState, categoryState } from "../atoms";
import { useEffect } from "react";

function CategorySelector() {
  const categories = useRecoilValue(categoriesState);
  const setCategory = useSetRecoilState(categoryState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value);
  };
  useEffect(() => setCategory(categories[0]), []);

  return (
    <select value={categories[0]} onInput={onInput}>
      {categories.map((item, index) => (
        <option key={index} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
}

export default CategorySelector;
