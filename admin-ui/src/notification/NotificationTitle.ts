import { Notification as TNotification } from "../api/notification/Notification";

export const NOTIFICATION_TITLE_FIELD = "titulo";

export const NotificationTitle = (record: TNotification): string => {
  return record.titulo || record.id;
};
