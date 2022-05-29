import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class CreateUsersSeeder extends BaseSeeder {
  public async run() {
    await User.createMany([
      {
        name: 'Administrator',
        email: 'admin@admin',
        password: 'admin',
        role: 'admin',
      },
      {
        name: 'Normal User',
        email: 'normal@normal',
        password: 'normal',
        role: 'normal',
      },
    ])
  }
}
