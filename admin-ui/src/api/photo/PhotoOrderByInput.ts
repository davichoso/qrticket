import { SortOrder } from "../../util/SortOrder";

export type PhotoOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  src?: SortOrder;
  titulo?: SortOrder;
  updatedAt?: SortOrder;
};
