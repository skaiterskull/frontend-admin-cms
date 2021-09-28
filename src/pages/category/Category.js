import React, { useEffect } from "react";
import AdminLayout from "../layout/AdminLayout";
import { AddCategoryForm } from "../../components/add-category-form/AddCategoryForm";
import { CategoryList } from "../../components/category-list/CategoryList";
import { getCategories } from "./CategoryAction";
import { useDispatch } from "react-redux";

const Category = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <AdminLayout>
      <h1>Category</h1>
      <div className="add-cat-forn">
        <AddCategoryForm />
      </div>
      <hr />
      <div className="cat-list">
        <CategoryList />
      </div>
    </AdminLayout>
  );
};

export default Category;
