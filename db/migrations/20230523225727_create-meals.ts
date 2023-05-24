import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('meals', (table) => {
    table.uuid('id').primary()
    table.string('user_id'),
    table.string('name').notNullable(),
    table.text('description').notNullable(),
    table.enu('is_on_diet', ['yes', 'no']).defaultTo('no')
    table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable()
  })
}


export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('meals')
}

