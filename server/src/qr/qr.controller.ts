import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { QrService } from "./qr.service";
import { QrControllerBase } from "./base/qr.controller.base";

@swagger.ApiTags("qrs")
@common.Controller("qrs")
export class QrController extends QrControllerBase {
  constructor(
    protected readonly service: QrService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
