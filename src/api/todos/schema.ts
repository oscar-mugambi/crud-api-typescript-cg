import * as z from 'zod'

//zod is a schema validation library like joi or yup but it generates typescript interfaces

const Todo = z.object({
  content: z.string().min(1),
  done: z.boolean(),
})

const result = Todo.parse({
  content: 'Go to club',
})

type Todo = z.infer<typeof Todo>

export default Todo
