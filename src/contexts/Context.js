import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { toast } from "react-toastify";
import { Navigate } from "react-router-dom";

export const Context = createContext();

const URL =
  "https://6493c0730da866a95366a9e5.mockapi.io/Films/account";
const Provider = ({ children }) => {
  // const [isLogged, setIsLogged] = React.useState(false);
  const [products, setProducts] = useState([]);

  // get all list of products - method GET
  const getListProducts = async () => {
    try {
      const response = await fetch(URL, {
        method: "GET",
      });
      if (response.ok) {
        const fetchData = await response.json();
        setProducts(fetchData);
      } else {
        toast.error("Fail to load Data!");
      }
    } catch (error) {
      toast.error("error", error);
    }
  };

  // add new staff - method POST
  const handleAddNew = async (data) => {
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        getListProducts();
        toast.success("Add new Data Successfully!");
      } else {
        toast.error("Fail to Add new Data!");
      }
    } catch (error) {
      toast.error("error", error);
    }
  };

  // for update staff - method PUT
  const handleUpdate = async (id, data) => {
    try {
      const response = await fetch(`${URL}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        getListProducts();
        toast.success("Update Data Successfully!");
      } else {
        toast.error("Fail to Update new Data!");
      }
    } catch (error) {
      toast.error("error", error);
    }
  };

  // for delete staff - method DELETE
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure to delete this item?")) {
      try {
        const response = await fetch(`${URL}/${id}`, {
          method: "DELETE",
        });
        if (response.ok) {
          getListProducts();
          toast.success("Delete product successfully!");
        } else {
          toast.error("Fail to delete Data!");
        }
      } catch (error) {
        toast.error("error", error);
      }
    }
  };

  useEffect(() => {
    getListProducts();
  }, []);

  return (
    <Context.Provider
      value={{
        products,
        handleDelete,
        handleUpdate,
        handleAddNew,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Provider;
