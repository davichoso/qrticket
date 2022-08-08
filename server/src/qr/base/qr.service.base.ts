/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import { Prisma, Qr } from "@prisma/client";

export class QrServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.QrFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.QrFindManyArgs>
  ): Promise<number> {
    return this.prisma.qr.count(args);
  }

  async findMany<T extends Prisma.QrFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.QrFindManyArgs>
  ): Promise<Qr[]> {
    return this.prisma.qr.findMany(args);
  }
  async findOne<T extends Prisma.QrFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.QrFindUniqueArgs>
  ): Promise<Qr | null> {
    return this.prisma.qr.findUnique(args);
  }
  async create<T extends Prisma.QrCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.QrCreateArgs>
  ): Promise<Qr> {
    return this.prisma.qr.create<T>(args);
  }
  async update<T extends Prisma.QrUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.QrUpdateArgs>
  ): Promise<Qr> {
    return this.prisma.qr.update<T>(args);
  }
  async delete<T extends Prisma.QrDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.QrDeleteArgs>
  ): Promise<Qr> {
    return this.prisma.qr.delete(args);
  }
}
