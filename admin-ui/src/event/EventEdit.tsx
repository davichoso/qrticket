import * as React from "react";
import { Edit, SimpleForm, EditProps, DateTimeInput } from "react-admin";

export const EventEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="CloseAt" source="closeAt" />
        <DateTimeInput label="OpenAt" source="openAt" />
        <DateTimeInput label="Title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
