import { StringFilter } from "../../util/StringFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type QrWhereInput = {
  code?: StringFilter;
  id?: StringFilter;
  used?: BooleanFilter;
  users?: UserListRelationFilter;
};
