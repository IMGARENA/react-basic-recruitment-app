import React, { ReactElement } from "react";
import { TableColumn } from "./Table";
import { TableCell, TableRow as MuiTableRow } from "@mui/material";
import { ModelWithId } from "../../types/table.types";

type TableRowProps<Model> = {
  item: Model;
  columns: TableColumn<Model>[];
};

export const TableRow = <Model extends ModelWithId>({
  item,
  columns,
}: TableRowProps<Model>): JSX.Element => {
  const getItemContent = (
    column: TableColumn<Model>
  ): ReactElement | string => {
    if (React.isValidElement(column.value)) {
      return column.value;
    }

    return item[column.value] as unknown as string;
  };

  return (
    <MuiTableRow>
      {columns.map((column) => (
        <TableCell sx={{ textAlign: column.textAlign || "left" }}>
          {getItemContent(column)}
        </TableCell>
      ))}
    </MuiTableRow>
  );
};
