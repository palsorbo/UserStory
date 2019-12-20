import React from "react";
import axios from "axios";
//import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";

function redirectToApprove(data, history) {
  history.push("/AdminReview/");
}

function AllStories(props) {
  const { storiesList: list, history } = props;
  console.log(props);
  return (
    <>
      {list.map((data, index) => {
        return (
          <div
            key={index}
            style={{ backgroundColor: `${data.status ? "red" : "green"}` }}
            onClick={() => redirectToApprove(data, history)}
          >
            <ul style={{ listStyleType: "none" }} key={index}>
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

AllStories.propTypes = {
  storiesList: PropTypes.arrayOf(
    PropTypes.shape({
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

export default AllStories;
