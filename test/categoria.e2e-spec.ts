import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from '../src/app.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriaModule } from '../src/categoria/categoria.module';

describe('CategoriaController (e2e)', () => {
  let app: INestApplication<App>;
  let categoriaId: number;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'sqlite',
          database: ':memory:',
          entities: [__dirname + '/../src/**/entities/*.entity.{ts,js}'],
          synchronize: true,
          dropSchema: true,
        }),
        CategoriaModule,
      ],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe());
    await app.init();
  },30000);

  afterAll(async () => {
    await app.close();
  });

 
  it('GET /categorias - Deve retornar array vazio', async () => {
    const response = await request(app.getHttpServer())
      .get('/categorias')
      .expect(200);

    expect(response.body).toEqual([]);
  });

  
  it('POST /categorias - Deve criar uma categoria', async () => {
    const response = await request(app.getHttpServer())
      .post('/categorias')
      .send({
        nome: 'Tecnologia',
        descricao: 'Categoria sobre tecnologia',
      })
      .expect(201);

    expect(response.body).toHaveProperty('id');
    expect(response.body.nome).toBe('Tecnologia');

    categoriaId = response.body.id;
  });

 
  it('GET /categorias - Deve retornar lista com uma categoria', async () => {
    const response = await request(app.getHttpServer())
      .get('/categorias')
      .expect(200);

    expect(response.body.length).toBe(1);
    expect(response.body[0].nome).toBe('Tecnologia');
  });

  
  it('GET /categorias/:id - Deve retornar categoria por id', async () => {
    const response = await request(app.getHttpServer())
      .get(`/categorias/${categoriaId}`)
      .expect(200);

    expect(response.body.id).toBe(categoriaId);
    expect(response.body.nome).toBe('Tecnologia');
  });

  
  it('GET /categorias/nome/:nome - Deve buscar por nome', async () => {
    const response = await request(app.getHttpServer())
      .get('/categorias/nome/Tec')
      .expect(200);

    expect(response.body.length).toBeGreaterThan(0);
    expect(response.body[0].nome).toContain('Tecnologia');
  });

  
  it('PUT /categorias - Deve atualizar categoria', async () => {
    const response = await request(app.getHttpServer())
      .put('/categorias')
      .send({
        id: categoriaId,
        nome: 'Tecnologia Atualizada',
        descricao: 'Nova descrição',
      })
      .expect(200);

    expect(response.body.nome).toBe('Tecnologia Atualizada');
  });

  
  it('DELETE /categorias/:id - Deve deletar categoria', async () => {
    await request(app.getHttpServer())
      .delete(`/categorias/${categoriaId}`)
      .expect(204);
  });


  it('GET /categorias - Deve retornar array vazio após delete', async () => {
    const response = await request(app.getHttpServer())
      .get('/categorias')
      .expect(200);

    expect(response.body).toEqual([]);
  });
});

