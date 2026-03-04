import {createRoot} from "react-dom/client";


const root = createRoot(document.getElementById("root"));


  


function Header() {
  return (
 <header className="header-list">
      <img   src="./src/assets/logo.png"  className="imgLogo"  alt="logo" />
     <nav className="list">
      <ul className="nav-list">
        <li>Pricing</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
     </header>
  )
}

function Main() {
  return (
    <main> 
      <h1>Reason I am exited from the react </h1>
  <ul>
<li>for find good job</li>
<li>because its more easy to work </li>
<li>it has a large community and good documentation</li>
<li>this is a great framework for building user interfaces</li>
  </ul>
  </main>
  )
}




function Footer() {
  return (
<footer> 
    <small> 
    Thank you for choosing React!
    </small>
  </footer>
  )
}

function LoveReact() {
  return (
  <> 
  <Header />
 <Main />
   <Footer />
  </>
  )
}



root.render (
  <LoveReact /> 
)