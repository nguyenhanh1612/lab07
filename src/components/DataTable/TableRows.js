import { Button, TableCell, TableRow } from "@mui/material";
import React, { useContext } from "react";
import { Delete, Edit } from "@mui/icons-material";
import { Context } from "../../contexts/Context";

const TableRows = ({ context, columns, setSelectedId }) => {
  const { handleDelete } = useContext(Context);
  return (
    <TableRow hover role="checkbox" tabIndex={-1} key={context.id}>
      {columns.map((column) => {
        const value = context[column.id];
        if (column.id === "Action") {
          return (
            <TableCell key={column.id} align={column.align}>
              <div style={{ display: "flex" }}>
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  style={{ marginRight: "8px" }}
                  startIcon={<Edit />}
                  onClick={() => setSelectedId(context.id)}
                >
                  Edit
                </Button>
                <Button
                  variant="contained"
                  color="error"
                  size="small"
                  style={{ marginLeft: "8px" }}
                  onClick={() => handleDelete(context.id)}
                  startIcon={<Delete />}
                >
                  Delete
                </Button>
              </div>
            </TableCell>
          );
        }
        if (column.id === "image") {
          return (
            <TableCell key={column.id} align={column.align}>
              <img
                src={context.image}
                alt="Avatar"
                style={{
                  width: "150px",
                  height: "150px",
                }}
              />
            </TableCell>
          );
        }
        if (column.id === "isHot") {
          return (
            <TableCell key={column.id} align={column.align}>
              {context.isHot ? "True" : "False"}
            </TableCell>
          );
        }
        return (
          <TableCell key={column.id} align={column.align}>
            {value}
          </TableCell>
        );
      })}
    </TableRow>
  );
};

export default TableRows;
