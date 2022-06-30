import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type EventWhereInput = {
  closeAt?: DateTimeNullableFilter;
  id?: StringFilter;
  openAt?: DateTimeNullableFilter;
  title?: DateTimeNullableFilter;
};
