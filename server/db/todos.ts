import { v4 } from 'uuid'

const todos = new Map()

export function all() {
  const json = {}

  todos.forEach((value, key) => {
    json[key] = value
  })

  return json
}

export function add(text) {
  todos.set(v4(), { text, createdAt: Date.now() })
}
