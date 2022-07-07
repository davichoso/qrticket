import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  BooleanInput,
} from "react-admin";

export const QrEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="code" source="code" />
        <TextInput label="test" source="test" />
        <BooleanInput label="used" source="used" />
      </SimpleForm>
    </Edit>
  );
};
