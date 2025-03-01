import {useState} from "react"
import { data } from "./data.js";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import CorConcept from "./components/CorConcept.jsx";
import TabButton from "./components/TabButton.jsx";

function App() {
  const [selectedTopic , setSelectedTopic] = useState ("components")
  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton)
  }
  console.log("tran van khanh")
  return (
    <>
      <div>
        <Header />
        <main>
          <section className="user">
         <CorConcept {...data.components} />
<CorConcept {...data.JSX} />
<CorConcept {...data.Props} />

<CorConcept {...data.State} />

          </section>
          <section>
            <h2>Examples</h2>
            <menu className="menu-examples">
              <TabButton onSelect={() => handleSelect("components")}>
                components
              </TabButton>
              <TabButton onSelect={() => handleSelect("JSX")}>JSX</TabButton>
              <TabButton onSelect={() => handleSelect("Props")}>
                Props
              </TabButton>
              <TabButton onSelect={() => handleSelect("State")}>
                State
              </TabButton>
            </menu>
      <div className="Examples-card">
        <h3>{data[selectedTopic].title}</h3>
        <p>{data[selectedTopic].description}</p>
        <img src={data[selectedTopic].image} />

      </div>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
