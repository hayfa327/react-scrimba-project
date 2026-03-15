import <React></React> from "react";


export default function App() {




  return (
    <main className="container">
      <h1>How many items in this section </h1>
      <div> 
      <button className="minus" aria-label="decrease count">-</button>
      <h2 className="count"> {count} </h2>
      <button className="plus" aria-label="Increase count">-</button>
</div>
    </main>
  )
}