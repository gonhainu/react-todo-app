import React, { MouseEventHandler } from 'react'

export const TodoAdd = ({ inputEl, handleAddTodoListItem }: { inputEl: React.MutableRefObject<HTMLTextAreaElement>, handleAddTodoListItem: MouseEventHandler }) => {
  return (
    <div className='flex items-end'>
      <textarea
        className='
          form-control
          px-3
          py-1.5
          text-base
          border border-solid border-gray-300
          focus:text-gray-700
        '
        placeholder='TODO'
        rows={3}
        ref={inputEl} />

      <button
        className='
          px-2
          py-1
          bg-blue-400
          text-white
          rounded
          hover:bg-blue-500
        '
        onClick={handleAddTodoListItem}
      >+ TODOを追加</button>
    </div>
  )
}