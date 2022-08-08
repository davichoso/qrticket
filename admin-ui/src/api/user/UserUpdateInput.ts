import { QrWhereUniqueInput } from "../qr/QrWhereUniqueInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  qr?: QrWhereUniqueInput | null;
  roles?: Array<string>;
  username?: string;
};
