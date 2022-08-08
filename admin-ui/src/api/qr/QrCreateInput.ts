import { UserCreateNestedManyWithoutQrsInput } from "./UserCreateNestedManyWithoutQrsInput";

export type QrCreateInput = {
  code: string;
  used: boolean;
  users?: UserCreateNestedManyWithoutQrsInput;
};
