import React from "react";
class Selector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: props.list,
      values: "",
      status: props.status,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleSubmit() {
      alert(this.state.values);
  }
  handleChange(eventChange) {
    if (this.state.status) {
      this.setState((state) => ({
        ...state,
        values: eventChange.target.value,
      }));
    } else {
      this.setState((state) => ({
        ...state,
        values: eventChange.target.value + " " + this.state.values,
      }));
    }
  }
  handleClick() {
    this.setState((state) => ({
      ...state,
      status: !this.state.status,
    }));
  }
  render() {
    return (
      <div>
        <div>
          <input type="text" value={this.state.values} onChange={this.handleChange}></input>
          <button type="submit" onClick = {this.handleSubmit}>Submit</button>
        </div>
        <div>
        <button onClick={this.handleClick}>
          {this.state.status ? "Multiple" : "Single"}
        </button>
        </div>
        
        <select
          multiple={!this.state.status}
          onChange={this.handleChange}
        >
          {this.state?.list?.map((item, index) => (
            <option key = {index}>{item}</option>
          ))}
        </select>
      </div>
    );
  }
}
export default Selector;
