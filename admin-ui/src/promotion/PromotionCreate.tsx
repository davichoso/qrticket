import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const PromotionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Descripción" source="descripciN" />
        <DateTimeInput label="Fecha fin" source="fechaFin" />
        <DateTimeInput label="Fecha Inicio" source="fechaInicio" />
        <TextInput label="Imagen" source="imagen" />
        <TextInput label="Nombre" source="Nombre" />
      </SimpleForm>
    </Create>
  );
};
