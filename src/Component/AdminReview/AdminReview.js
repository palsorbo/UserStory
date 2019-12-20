import React from "react";
import axios from "axios";
import PropTypes from "prop-types";

class AdminReview extends React.Component {
  state = {
    approveStory: {
      createdBy: 2,
      summary: "1st story created by 2",
      description: "dummy desc",
      type: "enhancement",
      complexity: "high",
      estimatedHrs: 1,
      cost: 100,
      status: true
    }
  };
  render() {
    return (
      <>
        <h1> View All Stories </h1>
        <ApproveStories story={this.state.approveStory} />
      </>
    );
  }
}

function ApproveStories(props) {
  const { story } = props;
  return (
    <div>
      <ul style={{ listStyleType: "none" }}>
        <li>Summary: {story.summary}</li>
        <li>Description: {story.description}</li>
        <li>Type: {story.type}</li>
        <li>Complexity: {story.complexity}</li>
        <li>Estimated time for completion: {story.estimatedHrs}</li>
        <li>Cost associated to it: {story.cost}</li>
      </ul>
      <button onClick={() => status("Aprove")}>Approve</button>
      <button onClick={() => status("Reject")}>Reject</button>
    </div>
  );
}

function status(type) {
  console.log("type", type);
}

ApproveStories.propTypes = {
  story: PropTypes.shape({
    createdBy: PropTypes.number,
    summary: PropTypes.string,
    description: PropTypes.string,
    type: PropTypes.string,
    complexity: PropTypes.string,
    estimatedHrs: PropTypes.number,
    cost: PropTypes.number,
    status: PropTypes.bool
  })
};

export default AdminReview;
