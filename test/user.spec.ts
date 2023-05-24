import { afterAll, beforeAll, it, expect, describe, beforeEach } from 'vitest'
import { execSync } from 'node:child_process'
import request from 'supertest'
import { app } from '../src/app'

describe('User Routes', () => {
  beforeAll(async () => {
    await app.ready()
  })

  beforeEach(() => {
    execSync('npm run knex migrate:rollback --all')
    execSync('npm run knex migrate:unlock')
    execSync('npm run knex migrate:latest')
  })

  afterAll(async() => {
    await app.close()
  })

  it('should be able to create a new user', async() => {
    await request(app.server)
      .post('/users')
      .send({
        name: 'Victor Manoel',
        email: 'victor.manoel8@hotmail.com'
      })
      .expect(201)
  })
})