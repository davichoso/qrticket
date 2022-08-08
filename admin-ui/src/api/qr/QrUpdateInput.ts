import { UserUpdateManyWithoutQrsInput } from "./UserUpdateManyWithoutQrsInput";

export type QrUpdateInput = {
  code?: string;
  used?: boolean;
  users?: UserUpdateManyWithoutQrsInput;
};
