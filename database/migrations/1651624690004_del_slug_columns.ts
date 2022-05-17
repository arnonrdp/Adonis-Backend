import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Posts extends BaseSchema {
  protected tableName = 'posts'

  public async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('slug')
    })
  }

  public async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.string('slug').notNullable().unique()
    })
  }
}
