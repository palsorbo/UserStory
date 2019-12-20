import React from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

import AllStories from "./AllStories";

class ViewAllStories extends React.Component {
  state = {
    allStories: [
      {
        createdBy: 2,
        summary: "1st story created by 2",
        description: "dummy desc",
        type: "enhancement",
        complexity: "high",
        estimatedHrs: 1,
        cost: 100,
        status: true
      },
      {
        createdBy: 2,
        summary: "2st story created by 2",
        description: "dummy desc",
        type: "fixing",
        complexity: "low",
        estimatedHrs: 1,
        cost: 500,
        status: false
      }
    ]
  };
  render() {
    return (
      <>
        <h1> View All Stories </h1>
        <AllStories storiesList={this.state.allStories} {...this.props} />
      </>
    );
  }
}

export default ViewAllStories;
