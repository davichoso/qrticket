import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const PhotoEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="src" source="src" />
        <TextInput label="Titulo" source="titulo" />
      </SimpleForm>
    </Edit>
  );
};
