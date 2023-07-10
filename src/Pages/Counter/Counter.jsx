import { useState } from "react";

const Counter = () => {
  const [value, setValue] = useState(0);
  return (
    <div className="container-xl mt-3">
      <h1 className="text-secondary text-center">Counter example</h1>
      <div className="row justify-content-center">
        <div className="card colt-6 col-sm-4 col-md-3">
          <div className="card-body text-center">
            <h4 className="card-title text-primary">Counter</h4>
            <h3
              className={`card-text ${
                value >= 0 ? "text-success" : "text-danger"
              }`}
            >
              {value}
            </h3>
            <div className="d-flex justify-content-between">
              <button
                type="button"
                onClick={() => setValue(value - 1)}
                className="btn btn-danger btn-lg"
              >
                -
              </button>
              <button
                type="button"
                onClick={() => setValue(value + 1)}
                className="btn btn-info btn-lg"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
