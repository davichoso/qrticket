import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type PhotoWhereInput = {
  id?: StringFilter;
  src?: StringNullableFilter;
};
