import { Test } from "@nestjs/testing";
import { INestApplication, HttpStatus, ExecutionContext } from "@nestjs/common";
import request from "supertest";
import { MorganModule } from "nest-morgan";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { PromotionController } from "../promotion.controller";
import { PromotionService } from "../promotion.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  createdAt: new Date(),
  descripciN: "exampleDescripciN",
  fechaFin: new Date(),
  fechaInicio: new Date(),
  id: "exampleId",
  imagen: "exampleImagen",
  Nombre: "exampleNombre",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  createdAt: new Date(),
  descripciN: "exampleDescripciN",
  fechaFin: new Date(),
  fechaInicio: new Date(),
  id: "exampleId",
  imagen: "exampleImagen",
  Nombre: "exampleNombre",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    createdAt: new Date(),
    descripciN: "exampleDescripciN",
    fechaFin: new Date(),
    fechaInicio: new Date(),
    id: "exampleId",
    imagen: "exampleImagen",
    Nombre: "exampleNombre",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  createdAt: new Date(),
  descripciN: "exampleDescripciN",
  fechaFin: new Date(),
  fechaInicio: new Date(),
  id: "exampleId",
  imagen: "exampleImagen",
  Nombre: "exampleNombre",
  updatedAt: new Date(),
};

const service = {
  create() {
    return CREATE_RESULT;
  },
  findMany: () => FIND_MANY_RESULT,
  findOne: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

describe("Promotion", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: PromotionService,
          useValue: service,
        },
      ],
      controllers: [PromotionController],
      imports: [MorganModule.forRoot(), ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /promotions", async () => {
    await request(app.getHttpServer())
      .post("/promotions")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        fechaFin: CREATE_RESULT.fechaFin.toISOString(),
        fechaInicio: CREATE_RESULT.fechaInicio.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /promotions", async () => {
    await request(app.getHttpServer())
      .get("/promotions")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          fechaFin: FIND_MANY_RESULT[0].fechaFin.toISOString(),
          fechaInicio: FIND_MANY_RESULT[0].fechaInicio.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /promotions/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/promotions"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /promotions/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/promotions"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        fechaFin: FIND_ONE_RESULT.fechaFin.toISOString(),
        fechaInicio: FIND_ONE_RESULT.fechaInicio.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
