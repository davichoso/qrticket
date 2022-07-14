import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const PromotionList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Promotions"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="Descripción" source="descripciN" />
        <TextField label="Fecha fin" source="fechaFin" />
        <TextField label="Fecha Inicio" source="fechaInicio" />
        <TextField label="ID" source="id" />
        <TextField label="Imagen" source="imagen" />
        <TextField label="Nombre" source="Nombre" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
