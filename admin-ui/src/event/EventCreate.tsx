import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const EventCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="CloseAt" source="closeAt" />
        <DateTimeInput label="OpenAt" source="openAt" />
        <TextInput label="Titulo" source="titulo" />
      </SimpleForm>
    </Create>
  );
};
