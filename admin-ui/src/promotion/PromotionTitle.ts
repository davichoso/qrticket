import { Promotion as TPromotion } from "../api/promotion/Promotion";

export const PROMOTION_TITLE_FIELD = "descripciN";

export const PromotionTitle = (record: TPromotion): string => {
  return record.descripciN || record.id;
};
