/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CreateQrArgs } from "./CreateQrArgs";
import { UpdateQrArgs } from "./UpdateQrArgs";
import { DeleteQrArgs } from "./DeleteQrArgs";
import { QrFindManyArgs } from "./QrFindManyArgs";
import { QrFindUniqueArgs } from "./QrFindUniqueArgs";
import { Qr } from "./Qr";
import { UserFindManyArgs } from "../../user/base/UserFindManyArgs";
import { User } from "../../user/base/User";
import { QrService } from "../qr.service";

@graphql.Resolver(() => Qr)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class QrResolverBase {
  constructor(
    protected readonly service: QrService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Qr",
    action: "read",
    possession: "any",
  })
  async _qrsMeta(
    @graphql.Args() args: QrFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Qr])
  @nestAccessControl.UseRoles({
    resource: "Qr",
    action: "read",
    possession: "any",
  })
  async qrs(@graphql.Args() args: QrFindManyArgs): Promise<Qr[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Qr, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Qr",
    action: "read",
    possession: "own",
  })
  async qr(@graphql.Args() args: QrFindUniqueArgs): Promise<Qr | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Qr)
  @nestAccessControl.UseRoles({
    resource: "Qr",
    action: "create",
    possession: "any",
  })
  async createQr(@graphql.Args() args: CreateQrArgs): Promise<Qr> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Qr)
  @nestAccessControl.UseRoles({
    resource: "Qr",
    action: "update",
    possession: "any",
  })
  async updateQr(@graphql.Args() args: UpdateQrArgs): Promise<Qr | null> {
    try {
      return await this.service.update({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Qr)
  @nestAccessControl.UseRoles({
    resource: "Qr",
    action: "delete",
    possession: "any",
  })
  async deleteQr(@graphql.Args() args: DeleteQrArgs): Promise<Qr | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [User])
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async users(
    @graphql.Parent() parent: Qr,
    @graphql.Args() args: UserFindManyArgs
  ): Promise<User[]> {
    const results = await this.service.findUsers(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
