import Icons from "./shared/assets";
import Routes from "./routes";
import "./App.css";

function App() {
  return (
    <section>
      <Routes />
      <section className="background-earth">
        <img src={Icons.earth} alt="earth" />
      </section>
    </section>
  );
}

export default App;
