export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  gusto?:
    | "House"
    | "TechHouse"
    | "Techno"
    | "HardTechno"
    | "Comercial"
    | "Melodico"
    | null;
  lastName?: string | null;
  password: string;
  qrId?: string | null;
  roles: Array<string>;
  username: string;
};
