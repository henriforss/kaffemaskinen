import { useEffect, useState } from "react";
import "./App.css";
import CoffeeOutput from "./CoffeeOutput/CoffeeOutput";
import CoffeeInput from "./CoffeInput/CoffeeInput";
import FindCoffee from "./FindCoffee/FindCoffee";
import { getData } from "./lib/requests.js";
import image from "./img/coffee-image.png";

function App() {
  const [coffeeData, setCoffeeData] = useState([]);
  const [foundCoffees, setFoundCoffees] = useState([]);

  /* Get data on init. */
  useEffect(() => {
    getData().then((res) => setCoffeeData(res.Items));
  }, []);

  console.log(coffeeData);

  return (
    <div className="app-wrapper">
      <div className="title-wrapper">
        <div className="title-image-wrapper">
          <img className="title-image" src={image} alt="A cup of coffee." />
        </div>
        <h1>Welcome to Kaffemaskinen!</h1>
        <p>Use Kaffemaskinen to manage your coffee inventory.</p>
      </div>

      <FindCoffee setFoundCoffees={setFoundCoffees} />

      {foundCoffees.length > 0 && (
        <CoffeeOutput coffeeData={foundCoffees} title="Found coffees:" />
      )}

      <CoffeeInput coffeeData={coffeeData} setCoffeeData={setCoffeeData} />

      <CoffeeOutput coffeeData={coffeeData} title="Inventory:" />
    </div>
  );
}

export default App;
