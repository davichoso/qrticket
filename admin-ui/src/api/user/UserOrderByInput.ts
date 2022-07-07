import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  createdAt?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  password?: SortOrder;
  roles?: SortOrder;
  testfield1?: SortOrder;
  testfield2?: SortOrder;
  updatedAt?: SortOrder;
  username?: SortOrder;
};
