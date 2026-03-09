import Joke from "./contact";
import jokeData from "./jokeData";
 

export default function App() {
const jokeElement = jokeData.map((joke) => {
  return <Joke setup={joke.setup}  punchline={joke.punchline} />
});

  return (
    <main>
 {jokeElement}
    </main>
  )
}