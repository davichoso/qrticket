import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { QrWhereUniqueInput } from "../qr/QrWhereUniqueInput";

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
  qr?: QrWhereUniqueInput;
  qrId?: StringNullableFilter;
  username?: StringFilter;
};
