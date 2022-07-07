import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { QrServiceBase } from "./base/qr.service.base";

@Injectable()
export class QrService extends QrServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
