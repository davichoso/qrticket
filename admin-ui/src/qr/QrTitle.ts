import { Qr as TQr } from "../api/qr/Qr";

export const QR_TITLE_FIELD = "code";

export const QrTitle = (record: TQr): string => {
  return record.code || record.id;
};
