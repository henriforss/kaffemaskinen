import "./CoffeeInput.css";
import { postData } from "../lib/requests";
import { useRef, useState } from "react";

const CoffeeInput = ({ coffeeData, setCoffeeData }) => {
  const [coffeeName, setCoffeeName] = useState("");
  const [packageSize, setPackageSize] = useState("");
  const [packagePrice, setPackagePrice] = useState("");
  const [roast, setRoast] = useState("1");

  const optionRef = useRef();

  const handleSelect = (e) => {
    setRoast(e.target.value);
  };

  const handleButton = () => {
    const coffeeObject = {
      coffeeName,
      packageSize,
      packagePrice,
      roast,
    };

    console.log(coffeeObject);

    /* Post data. */
    try {
      postData(coffeeObject);
      setCoffeeData(coffeeData.concat(coffeeObject));

      /* Reset input. */
      setCoffeeName("");
      setPackageSize("");
      setPackagePrice("");
      setRoast("");
    } catch (error) {
      console.log(error);
    }

    /* Reset select. */
    optionRef.current.selected = true;
  };

  console.log(roast);

  return (
    <div className="input-wrapper">
      <h2>Add new coffee:</h2>

      <div className="input-div">
        <p>
          <label htmlFor="input-coffee-name">Coffee name:</label>
        </p>

        <input
          type="text"
          id="input-coffee-name"
          value={coffeeName}
          onInput={(e) => setCoffeeName(e.target.value)}
          placeholder="Enter name of coffee"
        />
      </div>

      <div className="input-div">
        <p>
          <label htmlFor="input-coffee-package-size">Package size:</label>
        </p>

        <input
          type="number"
          id="input-coffee-package-size"
          value={packageSize}
          onInput={(e) => setPackageSize(e.target.value)}
          placeholder="Weight in grams"
        />
      </div>

      <div className="input-div">
        <p>
          <label htmlFor="input-coffee-package-price">Price:</label>
        </p>
        <input
          type="number"
          id="input-coffee-package-price"
          value={packagePrice}
          onInput={(e) => setPackagePrice(e.target.value)}
          placeholder="Price in euros"
        />
      </div>

      <div className="input-div">
        <p>
          <label htmlFor="input-coffee-roast">Roast:</label>
        </p>
        <select id="input-coffee-roast" onChange={(e) => handleSelect(e)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option ref={optionRef} value="3">
            3
          </option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>

      <div className="input-div">
        <button onClick={() => handleButton()}>Save</button>
      </div>
    </div>
  );
};

export default CoffeeInput;
