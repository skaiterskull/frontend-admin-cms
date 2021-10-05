import React from "react";
import { ListGroup, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Spinner, Alert } from "react-bootstrap";
import { categoryDelete } from "../../pages/category/CategoryAction";
import { onCategorySelect } from "../../pages/category/CategorySlice";
import { EditCategoryForm } from "../edit-category-form/EditCategoryForm";

export const CategoryList = () => {
  const { isPending, categories, categoryRes } = useSelector(
    (state) => state.category
  );

  const dispatch = useDispatch();

  //parent cat only
  const parentCatOnly = categories?.filter((row) => !row.parentCat);

  //child cat only
  const childCat = categories?.filter((row) => row.parentCat);

  const handleOnDelete = (_id) => {
    const hasChildCat = childCat?.some((item) => item.parentCat === _id);
    if (hasChildCat) {
      return alert(
        "This category has child category/es. Remove the child category/es or reassign them to another category before deleting"
      );
    }

    if (window.confirm("Are you sure you want to delete this category ?")) {
      dispatch(categoryDelete(_id));
    }
  };

  return (
    <div>
      <EditCategoryForm />
      {isPending && <Spinner variant="primary" animation="border" />}
      {categoryRes?.status && (
        <Alert
          variant={categoryRes?.status === "Success" ? "success" : "danger"}
        >
          {categoryRes?.message}
        </Alert>
      )}
      <ListGroup>
        {parentCatOnly &&
          parentCatOnly.map((row) => {
            return (
              <div key={row._id}>
                <ListGroup.Item
                  variant="secondary"
                  className="d-flex justify-content-between"
                >
                  <span style={{ fontWeight: "bolder" }}>{row.name}</span>
                  <span>
                    <Button
                      variant="primary"
                      onClick={() => dispatch(onCategorySelect(row))}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="danger"
                      style={{ marginLeft: "1rem" }}
                      onClick={() => handleOnDelete(row._id)}
                    >
                      Delete
                    </Button>
                  </span>
                </ListGroup.Item>

                <ListGroup>
                  {childCat &&
                    childCat.map(
                      (item) =>
                        item.parentCat === row._id && (
                          <ListGroup.Item
                            key={item._id}
                            className="d-flex justify-content-between"
                          >
                            <span> =&gt; {item.name}</span>
                            <span>
                              <Button
                                variant="primary"
                                onClick={() => dispatch(onCategorySelect(item))}
                              >
                                Edit
                              </Button>
                              <Button
                                variant="danger"
                                style={{ marginLeft: "1rem" }}
                                onClick={() => handleOnDelete(item._id)}
                              >
                                Delete
                              </Button>
                            </span>
                          </ListGroup.Item>
                        )
                    )}
                </ListGroup>
              </div>
            );
          })}
      </ListGroup>
    </div>
  );
};
