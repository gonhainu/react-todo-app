type TodoTitleProps = {
  title: string,
  as: string
}

export const TodoTitle = ({ title, as }: TodoTitleProps) => {
  if (as === 'h1') return <h1 className="text-3xl">{title}</h1>
  if (as === 'h2') return <h2 className="text-2xl">{title}</h2>

  return <p className="text-xl">{title}</p>
}