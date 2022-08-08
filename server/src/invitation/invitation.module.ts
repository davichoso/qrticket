import { Module } from "@nestjs/common";
import { InvitationModuleBase } from "./base/invitation.module.base";
import { InvitationService } from "./invitation.service";
import { InvitationResolver } from "./invitation.resolver";

@Module({
  imports: [InvitationModuleBase],
  providers: [InvitationService, InvitationResolver],
  exports: [InvitationService],
})
export class InvitationModule {}
