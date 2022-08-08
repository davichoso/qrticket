import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const EventEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="CloseAt" source="closeAt" />
        <DateTimeInput label="OpenAt" source="openAt" />
        <TextInput label="Titulo" source="titulo" />
      </SimpleForm>
    </Edit>
  );
};
