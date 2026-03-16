import React from "react"


export default function App() {

const [isGoingOut, setIsGoingOut] = React.useState(false)

function changeMind() {
  setIsGoingOut(prev => !prev)
}

return (
  <main>
    <h1 className="title">Do I feel tierd out this night</h1>
    <button  onClick={changeMind} className="value"> {isGoingOut ? "yes" : "No"} </button>
  </main>
)


}