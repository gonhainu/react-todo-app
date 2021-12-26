type TodoTitleProps = {
  title: string,
  as: string
}

export const TodoTitle = ({ title, as }: TodoTitleProps) => {
  if (as === 'h1') return <h1>{title}</h1>
  if (as === 'h2') return <h2>{title}</h2>

  return <p>{title}</p>
}