import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type EventWhereInput = {
  closeAt?: DateTimeFilter;
  id?: StringFilter;
  openAt?: DateTimeFilter;
  title?: DateTimeNullableFilter;
};
