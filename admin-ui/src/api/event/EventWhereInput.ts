import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type EventWhereInput = {
  closeAt?: DateTimeFilter;
  id?: StringFilter;
  openAt?: DateTimeFilter;
  titulo?: StringNullableFilter;
};
