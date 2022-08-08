import { Photo as TPhoto } from "../api/photo/Photo";

export const PHOTO_TITLE_FIELD = "src";

export const PhotoTitle = (record: TPhoto): string => {
  return record.src || record.id;
};
