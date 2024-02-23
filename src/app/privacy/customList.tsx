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

export function CustomList2({ title, descriptionList }: ListProps) {
  return (
    <div className="pt-3">
      <div className="font-semibold text-xl pb-3">{title}</div>
      {descriptionList.map((description, index) => (
        <div className="pb-4" key={index}>
          {description}
        </div>
      ))}
    </div>
  )
}
