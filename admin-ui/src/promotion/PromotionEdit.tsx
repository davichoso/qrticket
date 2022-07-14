import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const PromotionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Descripción" source="descripciN" />
        <DateTimeInput label="Fecha fin" source="fechaFin" />
        <DateTimeInput label="Fecha Inicio" source="fechaInicio" />
        <TextInput label="Imagen" source="imagen" />
        <TextInput label="Nombre" source="Nombre" />
      </SimpleForm>
    </Edit>
  );
};
