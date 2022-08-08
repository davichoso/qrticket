import { Event as TEvent } from "../api/event/Event";

export const EVENT_TITLE_FIELD = "titulo";

export const EventTitle = (record: TEvent): string => {
  return record.titulo || record.id;
};
