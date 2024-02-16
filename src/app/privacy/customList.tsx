type ListProps = {
  title: string
  descriptionList: string[]
}

export default function CustomList({ title, descriptionList }: ListProps) {
  return (
    <li>
      <span className="font-semibold">{title}</span>
      <ul className="list-disc pl-10">
        {descriptionList.map((description, index) => (
          <li key={index}>{description}</li>
        ))}
      </ul>
    </li>
  )
}
