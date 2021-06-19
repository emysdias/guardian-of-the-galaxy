import { Selection } from "./pages";
import Icons from "./shared/assets";
import "./App.css";

function App() {
  return (
    <section>
      <Selection />
      <section className="background-earth">
        <img src={Icons.earth} alt="earth" />
      </section>
    </section>
  );
}

export default App;
