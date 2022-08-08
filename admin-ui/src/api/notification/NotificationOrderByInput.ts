import { SortOrder } from "../../util/SortOrder";

export type NotificationOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  texto?: SortOrder;
  titulo?: SortOrder;
  updatedAt?: SortOrder;
};
