import React, { MouseEventHandler } from 'react'

export const TodoAdd = ({ inputEl, handleAddTodoListItem }: { inputEl: React.MutableRefObject<HTMLTextAreaElement>, handleAddTodoListItem: MouseEventHandler }) => {
  return (
    <>
      <textarea ref={inputEl} />

      <button onClick={handleAddTodoListItem}>+ TODOを追加</button>
    </>
  )
}