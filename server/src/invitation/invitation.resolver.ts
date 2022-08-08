import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { InvitationResolverBase } from "./base/invitation.resolver.base";
import { Invitation } from "./base/Invitation";
import { InvitationService } from "./invitation.service";

@graphql.Resolver(() => Invitation)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class InvitationResolver extends InvitationResolverBase {
  constructor(
    protected readonly service: InvitationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
