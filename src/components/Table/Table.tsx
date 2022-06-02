import {
  Box,
  Button,
  ButtonProps,
  Paper,
  Table as MuiTable,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow as MuiTableRow,
  Typography,
} from "@mui/material";
import { CSSProperties, FC, ReactElement } from "react";
import { TableRow } from "./TableRow";
import { ModelWithId } from "../../types/table.types";

export type TableColumn<Model> = {
  id: string;
  label: string;
  value: keyof Model | ReactElement;
  textAlign?: CSSProperties["textAlign"];
};

type TableProps<Model extends ModelWithId> = {
  columns: TableColumn<Model>[];
  items: Model[];
  title: string;
  ButtonProps?: Pick<ButtonProps, "children" | "onClick">;
};

export const Table: FC<TableProps<any>> = ({
  columns,
  items,
  title,
  ButtonProps,
}) => {
  return (
    <Box>
      {/*TODO: style to match designs*/}
      <Paper sx={{}}>
        <Typography>{title}</Typography>
        {ButtonProps !== undefined && (
          <Button variant={"contained"} {...ButtonProps} />
        )}
      </Paper>

      <TableContainer>
        <MuiTable>
          <TableHead>
            <MuiTableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  sx={{ textAlign: column.textAlign || "left" }}
                >
                  {column.label}
                </TableCell>
              ))}
            </MuiTableRow>
          </TableHead>
          <TableBody>
            {items.map((item) => (
              <TableRow key={item.id} item={item} columns={columns} />
            ))}
          </TableBody>
        </MuiTable>
      </TableContainer>
    </Box>
  );
};
