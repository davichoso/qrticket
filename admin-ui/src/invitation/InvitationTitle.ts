import { Invitation as TInvitation } from "../api/invitation/Invitation";

export const INVITATION_TITLE_FIELD = "userId";

export const InvitationTitle = (record: TInvitation): string => {
  return record.userId || record.id;
};
