import { Module } from "@nestjs/common";
import { QrModuleBase } from "./base/qr.module.base";
import { QrService } from "./qr.service";
import { QrController } from "./qr.controller";
import { QrResolver } from "./qr.resolver";

@Module({
  imports: [QrModuleBase],
  controllers: [QrController],
  providers: [QrService, QrResolver],
  exports: [QrService],
})
export class QrModule {}
