import { QrWhereInput } from "./QrWhereInput";
import { QrOrderByInput } from "./QrOrderByInput";

export type QrFindManyArgs = {
  where?: QrWhereInput;
  orderBy?: Array<QrOrderByInput>;
  skip?: number;
  take?: number;
};
