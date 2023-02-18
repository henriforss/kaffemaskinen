import "./CoffeeOutput.css";

const CoffeeOutput = ({ coffeeData, title }) => {
  return (
    <div className="output-wrapper">
      <h2>{title}</h2>

      <div className="output-legend">
        <p className="output-legend-item">Name</p>
        <p className="output-legend-item">Package size</p>
        <p className="output-legend-item">Price</p>
        <p className="output-legend-item">Roast</p>
      </div>

      {coffeeData.map((item, i) => {
        return (
          <div key={`coffee-key-${i}`} className="output-result">
            <p className="output-result-item">{item.coffeeName}</p>
            <p className="output-result-item">{item.packageSize}</p>
            <p className="output-result-item">{item.packagePrice}</p>
            <p className="output-result-item">{item.roast}</p>
          </div>
        );
      })}
    </div>
  );
};

export default CoffeeOutput;
