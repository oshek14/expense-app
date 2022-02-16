import React, { useLayoutEffect } from "react";
import { useForm } from "react-hook-form";
import { Category } from "../../models";
import "./styles.scss";

const AddTransactionsForm = (props: {
  categories: Category[];
  onSubmit: Function;
}) => {
  const onSubmit = props.onSubmit;
  const categories = props.categories;
  const { register, handleSubmit, setValue } = useForm();

  useLayoutEffect(() => {
    if (categories.length) {
      setValue("category", categories[0].id.toString());
    }
  }, [categories, setValue]);

  const submitValues = (data: any) => {
    setValue("label", "");
    setValue("amount", "");
    if (categories.length) {
      setValue("category", categories[0].id.toString());
    }
    onSubmit(data);
  };

  return (
    <>
      <p>Add Transactions</p>
      <form onSubmit={handleSubmit((data) => submitValues(data))}>
        <input
          {...register("label", { required: true })}
          type="text"
          placeholder="Transaction Label"
        />
        <input
          {...register("amount", { required: true })}
          type="number"
          placeholder="Transaction Amount"
        />
        <select {...register("category", { required: true })}>
          {categories.map((category: any) => (
            <option key={category.id} value={category.id}>
              {category.label}
            </option>
          ))}
        </select>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default AddTransactionsForm;
