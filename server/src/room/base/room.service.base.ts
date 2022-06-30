/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import { Prisma, Room } from "@prisma/client";

export class RoomServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.RoomFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.RoomFindManyArgs>
  ): Promise<number> {
    return this.prisma.room.count(args);
  }

  async findMany<T extends Prisma.RoomFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.RoomFindManyArgs>
  ): Promise<Room[]> {
    return this.prisma.room.findMany(args);
  }
  async findOne<T extends Prisma.RoomFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.RoomFindUniqueArgs>
  ): Promise<Room | null> {
    return this.prisma.room.findUnique(args);
  }
  async create<T extends Prisma.RoomCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.RoomCreateArgs>
  ): Promise<Room> {
    return this.prisma.room.create<T>(args);
  }
  async update<T extends Prisma.RoomUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.RoomUpdateArgs>
  ): Promise<Room> {
    return this.prisma.room.update<T>(args);
  }
  async delete<T extends Prisma.RoomDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.RoomDeleteArgs>
  ): Promise<Room> {
    return this.prisma.room.delete(args);
  }
}
