import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const PromotionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Descripción" source="descripciN" />
        <TextField label="Fecha fin" source="fechaFin" />
        <TextField label="Fecha Inicio" source="fechaInicio" />
        <TextField label="ID" source="id" />
        <TextField label="Imagen" source="imagen" />
        <TextField label="Nombre" source="Nombre" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
