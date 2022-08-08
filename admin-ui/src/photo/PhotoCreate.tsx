import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const PhotoCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="src" source="src" />
        <TextInput label="Titulo" source="titulo" />
      </SimpleForm>
    </Create>
  );
};
