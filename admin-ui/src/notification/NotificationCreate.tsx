import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const NotificationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="texto" multiline source="texto" />
        <TextInput label="Titulo" source="titulo" />
      </SimpleForm>
    </Create>
  );
};
