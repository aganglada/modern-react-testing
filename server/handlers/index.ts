import { rest } from 'msw'
import { allTodosHandler } from './todos'

export const handlers = [rest.get('/api/todos', allTodosHandler)]
