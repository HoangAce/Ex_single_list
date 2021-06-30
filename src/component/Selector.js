import React from "react";
class Selector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: props.list,
      values: "",
      status: true,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleSubmit(eventSubmit) {
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
          <input value={this.state.values}></input>
          <button type="submit" onClick = {this.handleSubmit}>Submit</button>
        </div>
        <div>
        <button onClick={this.handleClick}>
          {this.state.status ? "Multiple" : "Single"}
        </button>
        </div>
        
        <select
          autoFocus={true}
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
