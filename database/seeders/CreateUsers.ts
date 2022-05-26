import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class CreateUsersSeeder extends BaseSeeder {
  public async run() {
    await User.createMany([
      {
        email: 'admin@admin',
        password: 'admin',
        role: 'admin',
      },
      {
        email: 'normal@normal',
        password: 'normal',
        role: 'normal',
      },
    ])
  }
}
