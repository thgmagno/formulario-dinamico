interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  emoji: string
  title: string
}

export function ButtonWithEmoji({ emoji, title, ...rest }: Props) {
  return (
    <button
      {...rest}
      className="flex flex-col rounded-2xl bg-stone-800/40 p-6 hover:bg-stone-800/80"
    >
      <span className="text-6xl">{emoji}</span>
      <span className="mt-4 text-lg font-semibold text-zinc-300">{title}</span>
    </button>
  )
}
