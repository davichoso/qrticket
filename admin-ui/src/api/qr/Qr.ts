import { User } from "../user/User";

export type Qr = {
  code: string;
  createdAt: Date;
  id: string;
  updatedAt: Date;
  used: boolean;
  users?: Array<User>;
};
