import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Post from 'App/Models/Post'
import { StoreValidator, UpdateValidator } from 'App/Validators/Post/'

export default class PostsController {
  public async index({}: HttpContextContract) {
    const posts = await Post.query().orderBy('created_at', 'desc').preload('author')

    return posts
  }

  public async store({ request, auth }: HttpContextContract) {
    const data = await request.validate(StoreValidator)

    const user = await auth.authenticate()

    const post = await Post.create({ authorId: user.id, ...data })

    await post.load('author')

    return post
  }

  public async show({ params }: HttpContextContract) {
    const post = await Post.findOrFail(params.id) // Equivalent to: SELECT * FROM posts WHERE id = params.id

    return post
  }

  public async update({ params, request }: HttpContextContract) {
    const post = await Post.findOrFail(params.id)
    const data = await request.validate(UpdateValidator)

    post.merge(data)
    await post.save()
    await post.load('author')

    return post
  }

  public async destroy({ params }: HttpContextContract) {
    const post = await Post.findOrFail(params.id)

    await post.delete()

    return { message: 'Post deleted successfully' }
  }
}
