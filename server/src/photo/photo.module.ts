import { Module } from "@nestjs/common";
import { PhotoModuleBase } from "./base/photo.module.base";
import { PhotoService } from "./photo.service";
import { PhotoResolver } from "./photo.resolver";

@Module({
  imports: [PhotoModuleBase],
  providers: [PhotoService, PhotoResolver],
  exports: [PhotoService],
})
export class PhotoModule {}
