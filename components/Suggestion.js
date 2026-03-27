export default function Suggestion ({description, link, linkText}) {
  return (
    <div className="suggestion">
      <a className="suggestion-header" href={link}>{linkText}</a>
      <p className="suggestion-text">&emsp;{description}</p>
    </div>
  )
}