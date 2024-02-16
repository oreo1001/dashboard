type SectionProps = {
  title: string
  content: string
}

export default function Section({ title, content }: SectionProps) {
  return (
    <section id={`${title.replace(' ', '-')}`} className="my-4">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-base">{content}</p>
    </section>
  )
}

//   {/* 목차 */}
//   <ul>
//     {sections.map((section, index) => (
//       <li key={index}>
//         <a href={`#${section.title.replace(' ', '-')}`}>{section.title}</a>
//       </li>
//     ))}
//   </ul>

//   {sections.map((section, index) => (
//     <Fragment key={index}>
//       <Section title={section.title} content={section.content} />
//     </Fragment>
//   ))}
//   <List items={['Item 1', 'Item 2', 'Item 3']} />
