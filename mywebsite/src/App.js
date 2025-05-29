import Navbar from "./components/navbar.js";
import Intro from "./components/intro.js"
import Skill from "./components/skill.js"
import Works from "./components/works.js"
import Contact from "./components/contact.js"
import Footer from "./components/footer.js"

function App() {
  return (
    <div className="App">

      <Navbar/>
      <Intro/>
      <Skill/>
      <Works />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
