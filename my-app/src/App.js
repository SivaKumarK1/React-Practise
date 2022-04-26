import "./App.css";

let name = "Sammy";
function App() {
  return (
    <>
      <nav>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </nav>
      <div className="container">
        <h1>Hello {name}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
          accusamus magnam aut, exercitationem beatae tenetur libero temporibus,
          voluptatibus quidem in ipsam saepe accusantium, est molestiae nemo
          vitae dolorem amet. Molestias.
        </p>
      </div>  
    </>
  );
}

export default App;
