import {createRoot} from "react-dom/client";
import Header from "./Header"; 
import Main from "./Main"; 
import Footer from "./Footer"; 

const root = createRoot(document.getElementById("root"));


 

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