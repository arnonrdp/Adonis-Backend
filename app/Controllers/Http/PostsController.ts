// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

let posts = [
  { id: 1, desc: 'post 1' },
  { id: 2, desc: 'post 2' },
  { id: 3, desc: 'post 3' },
]

export default class PostsController {
  public async index() {
    return posts
  }

  public async deleteLast() {
    posts.pop()
    return posts
  }
}
