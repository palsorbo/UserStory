import React from "react";
import axios from "axios";
import PropTypes from "prop-types";
class UserStory extends React.Component {
  state = {
    userStoryList: [
      {
        createdBy: 2,
        summary: "1st story created by 2",
        description: "dummy desc",
        type: "enhancement",
        complexity: "high",
        estimatedHrs: 1,
        cost: 100
      },
      {
        createdBy: 2,
        summary: "2st story created by 2",
        description: "dummy desc",
        type: "fixing",
        complexity: "low",
        estimatedHrs: 1,
        cost: 500
      }
    ]
  };

  redirectToCreateStory() {
    this.props.history.push("/CreateStory");
  }

  render() {
    return (
      <>
        <h1>View User UserStory </h1>
        <button onClick={() => this.redirectToCreateStory()}>
          Create Story
        </button>
        <UserList list={this.state.userStoryList} />
      </>
    );
  }
}

function UserList(props) {
  const { list } = props;
  return (
    <>
      {list
        .filter(li => li.createdBy === "2")
        .map((data, index) => {
          return (
            <div key={index}>
              <ul style={{ listStyleType: "none" }}>
                <li>Summary: {data.summary}</li>
                <li>Description: {data.description}</li>
                <li>Type: {data.type}</li>
                <li>Complexity: {data.complexity}</li>
                <li>Estimated time for completion: {data.estimatedHrs}</li>
                <li>Cost associated to it: {data.cost}</li>
              </ul>
            </div>
          );
        })}
    </>
  );
}

UserList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      createdBy: PropTypes.number,
      summary: PropTypes.string,
      description: PropTypes.string,
      type: PropTypes.string,
      complexity: PropTypes.string,
      estimatedHrs: PropTypes.number,
      cost: PropTypes.number,
      status: PropTypes.bool
    })
  )
};

export default UserStory;
