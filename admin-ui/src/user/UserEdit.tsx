import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  SelectInput,
  PasswordInput,
  SelectArrayInput,
} from "react-admin";

import { ROLES_OPTIONS } from "../user/RolesOptions";

export const UserEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="email" source="email" type="email" />
        <TextInput label="First Name" source="firstName" />
        <SelectInput
          source="gusto"
          label="gusto"
          choices={[
            { label: "House", value: "House" },
            { label: "Tech House", value: "TechHouse" },
            { label: "Techno", value: "Techno" },
            { label: "Hard Techno", value: "HardTechno" },
            { label: "Comercial", value: "Comercial" },
            { label: "Melódico", value: "Melodico" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="Last Name" source="lastName" />
        <PasswordInput label="Password" source="password" />
        <TextInput label="qrid" source="qrid" />
        <TextInput label="qrtxt" source="qrtxt" />
        <SelectArrayInput
          source="roles"
          choices={ROLES_OPTIONS}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="Username" source="username" />
      </SimpleForm>
    </Edit>
  );
};
