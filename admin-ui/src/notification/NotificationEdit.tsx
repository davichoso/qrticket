import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const NotificationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="texto" multiline source="texto" />
        <TextInput label="Titulo" source="titulo" />
      </SimpleForm>
    </Edit>
  );
};
