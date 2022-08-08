import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type InvitationWhereInput = {
  id?: StringFilter;
  userId?: StringNullableFilter;
};
