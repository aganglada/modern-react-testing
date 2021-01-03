import * as todosDB from '../db/todos'

export const allTodosHandler = (req, res, ctx) => {
  return res(
    ctx.json({
      todos: todosDB.all(),
    }),
  )
}
