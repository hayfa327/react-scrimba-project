import React from "react"

export default function stateLearning() {

const [count, setCount] =  React.useState(0)


function add() {
 setCount(prevCount=> prevCount +1 )

}

function minusTwo () {
 setCount(prevCount=> prevCount -1)
}


  return (
    <main className="container">
      <h1>How many items in this section </h1>
      <div> 
      <button className="minus" onClick={minusTwo} aria-label="decrease count">-</button>
      <h2 className="count"> {count} </h2>
      <button   onClick={add}  className="plus" aria-label="Increase count">-</button>
</div>
    </main>
  )
}


export default function conditionState() {

const [isGoingOut, setIsGoingOut] = React.useState(false)

function changeMind() {
  setIsGoingOut(prev => !prev)
}

return (
  <main>
    <h1 className="title">Do I feel tierd out this night</h1>
    <button  onClick={changeMind} 
    className="value"
    aria-label={`Current answer is ${isGoingOut ? "yes" : "No"}. click to change it.`} 
    > {isGoingOut ? "yes" : "No"} </button>
  </main>
)


}