import { Qr } from "../qr/Qr";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  gusto?:
    | "House"
    | "TechHouse"
    | "Techno"
    | "HardTechno"
    | "Comercial"
    | "Melodico"
    | null;
  id: string;
  lastName: string | null;
  qr?: Qr | null;
  qrId: string | null;
  roles: Array<string>;
  updatedAt: Date;
  username: string;
};
