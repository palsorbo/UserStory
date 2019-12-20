import React from "react";
import axios from "axios";

class CreateStory extends React.Component {
  state = {
    summary: "",
    description: "",
    type: "",
    complexity: "",
    eta: "",
    cost: ""
  };

  submitFormHandler = e => {
    e.preventDefault();
    /*console.log(this.state);
    const { email, password, usertype } = this.state;
    const params = {
      email,
      password
    };*/
  };

  onTextChange = e => {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  };

  render() {
    return (
      <>
        <form onSubmit={this.submitFormHandler}>
          <div>
            <label>summary</label>
            <input
              type="summary"
              name="summary"
              value={this.state.summary}
              onChange={this.onTextChange}
            />
          </div>
          <div>
            <label>Description</label>
            <input
              type="textarea"
              name="description"
              value={this.state.description}
              onChange={this.onTextChange}
            />
          </div>
          <div>
            <label>Type</label>
            <select
              value={this.state.type}
              name="type"
              onChange={this.onTextChange}
            >
              <option value="enhancement">Enhacement</option>
              <option value="bugfix">Bug-Fix</option>
              <option value="development">Development</option>
              <option value="qa">QA</option>
            </select>{" "}
          </div>
          <div>
            <label>Complexity</label>
            <select
              value={this.state.complexity}
              name="complexity"
              onChange={this.onTextChange}
            >
              <option value="Low">Low</option>
              <option value="Mid">Mid</option>
              <option value="High">High</option>
            </select>{" "}
          </div>
          <div>
            <label>Estimated time for Completion</label>
            <input
              type="text"
              name="eta"
              value={this.state.eta}
              onChange={this.onTextChange}
            />
          </div>
          <div>
            <label>Cost</label>
            <input
              type="number"
              name="cost"
              value={this.state.cost}
              onChange={this.onTextChange}
            />
          </div>

          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </>
    );
  }
}

export default CreateStory;
