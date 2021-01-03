import * as React from 'react'

export const Form = () => {
  return (
    <form className="mt-10">
      <label className="text-purple-800 text-xl">What's next?</label>
      <input name="todo" className="border border-purple-800 p-2 w-full" />
      <button className="bg-purple-800 text-white p-2 border-0 w-full mt-3 rounded-full uppercase hover:bg-purple-600 focus:bg-purple-600">
        Add
      </button>
    </form>
  )
}
