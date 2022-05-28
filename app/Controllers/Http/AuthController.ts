import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import AuthValidator from 'App/Validators/AuthValidator'

export default class AuthController {
  public async store({ request, auth }: HttpContextContract) {
    const { email, password } = await request.validate(AuthValidator)

    const token = await auth.attempt(email, password, {
      expiresIn: '30 day',
    })

    return token
  }

  public async destroy({ response, auth }: HttpContextContract) {
    await auth.logout()
    return response.send('You are logged out')
  }
}
