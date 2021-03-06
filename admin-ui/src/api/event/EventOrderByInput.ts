import { SortOrder } from "../../util/SortOrder";

export type EventOrderByInput = {
  closeAt?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  openAt?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
