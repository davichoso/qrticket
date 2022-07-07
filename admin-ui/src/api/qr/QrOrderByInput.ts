import { SortOrder } from "../../util/SortOrder";

export type QrOrderByInput = {
  code?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  used?: SortOrder;
};
