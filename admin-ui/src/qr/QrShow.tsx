import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { QR_TITLE_FIELD } from "./QrTitle";

export const QrShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="code" source="code" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <BooleanField label="used" source="used" />
        <ReferenceManyField reference="User" target="QrId" label="Users">
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="email" source="email" />
            <TextField label="First Name" source="firstName" />
            <TextField label="gusto" source="gusto" />
            <TextField label="ID" source="id" />
            <TextField label="Last Name" source="lastName" />
            <ReferenceField label="qr" source="qr.id" reference="Qr">
              <TextField source={QR_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="qr_id" source="qrId" />
            <TextField label="Roles" source="roles" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Username" source="username" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
