import "bootstrap/dist/css/bootstrap.css";
import { Component } from "react";

// Importiruyte komponent FontAwesomeIcon
class Counter extends Component {
  state = {
    value: 0,
  };

  handleClick = (e) => {
    this.setState((prevState) => ({
      value:
        e.target.innerText === "+" ? prevState.value + 1 : prevState.value - 1,
    }));
  };

  render() {
    const { value } = this.state;
    return (
      <div className="position-absolute top-50 start-50 translate-middle">
        <div className="card bg-dark text-white" style={{ width: "600px" }}>
          <div className="card-body">
            <h5 className="card-title text-center fs-1">Counter</h5>
            <p className="card-text text-center" style={{ fontSize: "80px" }}>
              {value}
            </p>
            <div className="d-flex justify-content-center px-5">
              <button
                className="btn btn-outline-success me-5"
                style={{ fontSize: "40px", width: "80px", height: "80px" }}
                onClick={this.handleClick}
              >
                +
              </button>
              <button
                className="btn btn-outline-danger ms-5"
                style={{ fontSize: "40px", width: "80px", height: "80px" }}
                onClick={this.handleClick}
              >
                -
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Counter;
