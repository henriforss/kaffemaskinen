import "./CoffeeOutput.css";

const CoffeeOutput = ({ coffeeData, title }) => {
  return (
    <div className="output-wrapper">
      <h2>{title}</h2>

      <div className="output-legend">
        <p className="output-legend-item-1">Name</p>
        <p className="output-legend-item-2">Size (gr)</p>
        <p className="output-legend-item-3">Price (€)</p>
        <p className="output-legend-item-4">Roast</p>
      </div>

      {coffeeData.map((item, i) => {
        return (
          <div key={`coffee-key-${i}`} className="output-result">
            <p className="output-result-item-1">{item.coffeeName}</p>
            <p className="output-result-item-2">{item.packageSize}</p>
            <p className="output-result-item-3">{item.packagePrice}</p>
            <p className="output-result-item-4">{item.roast}</p>
          </div>
        );
      })}
    </div>
  );
};

export default CoffeeOutput;
