import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  BooleanInput,
} from "react-admin";

export const QrCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="code" source="code" />
        <TextInput label="test" source="test" />
        <BooleanInput label="used" source="used" />
      </SimpleForm>
    </Create>
  );
};
