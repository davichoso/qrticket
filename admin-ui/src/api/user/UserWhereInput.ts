import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  gusto?:
    | "House"
    | "TechHouse"
    | "Techno"
    | "HardTechno"
    | "Comercial"
    | "Melodico";
  id?: StringFilter;
  lastName?: StringNullableFilter;
  qrid?: StringNullableFilter;
  qrtxt?: StringNullableFilter;
  username?: StringFilter;
};
