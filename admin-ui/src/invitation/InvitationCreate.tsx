import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const InvitationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="user_id" source="userId" />
      </SimpleForm>
    </Create>
  );
};
