import { Qr } from "../qr/Qr";

export type User = {
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  qr?: Qr | null;
  roles: Array<string>;
  updatedAt: Date;
  username: string;
};
