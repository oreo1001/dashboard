type DefProp = {
  title: string
  content: string
}

export default function Def({ title, content }: DefProp) {
  return (
    <div className="pt-8 text-lg">
      <span className="font-semibold">{title}</span>
      <span>&nbsp;&nbsp;</span>
      <span>{content}</span>
    </div>
  )
}
