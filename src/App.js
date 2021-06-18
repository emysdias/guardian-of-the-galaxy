import Begin from "./pages/Begin/Begin";
import Icons from "./shared/assets";
import "./App.css";

function App() {
  return (
    <section>
      <Begin />
      <section className="background-earth">
        <img src={Icons.earth} alt="earth" />
      </section>
    </section>
  );
}

export default App;
