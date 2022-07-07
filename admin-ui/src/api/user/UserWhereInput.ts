import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type UserWhereInput = {
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  testfield1?: StringNullableFilter;
  testfield2?: StringNullableFilter;
  username?: StringFilter;
};
