import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type PromotionWhereInput = {
  descripciN?: StringNullableFilter;
  fechaFin?: DateTimeNullableFilter;
  fechaInicio?: DateTimeNullableFilter;
  id?: StringFilter;
  imagen?: StringNullableFilter;
  Nombre?: StringNullableFilter;
};
