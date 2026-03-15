export default function ContentArticil(props) {
  return (
    <section>
      <article>
        <img src={props.img.scr}
        alt={props.img.alt} />
        <h1> {props.title} </h1>
      </article>
    </section>
  )
}