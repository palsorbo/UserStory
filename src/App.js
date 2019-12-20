import React, { lazy, Suspense } from "react";
import "./App.css";
import Login from "./Component/Login/Login";
import ViewUserStory from "./Component/UserStory/UserStory";
import ViewAllStories from "./Component/ViewAllStories/ViewAllStories";
import UserStory from "./Component/UserStory/UserStory";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute.js";
const AdminReview = lazy(() => import("./Component/AdminReview/AdminReview"));
const CreateStory = lazy(() => import("./Component/CreateStory/CreateStory"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<h1>Loading</h1>}>
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <ProtectedRoute
              exact
              path="/ViewUserStory"
              component={ViewUserStory}
              role="User"
            />
            <ProtectedRoute
              exact
              path="/ViewAllStories"
              component={ViewAllStories}
              role="Admin"
            />
            <ProtectedRoute
              exact
              path="/CreateStory"
              component={CreateStory}
              role="User"
            />
            <ProtectedRoute
              exact
              path="/UserStory"
              component={UserStory}
              role="User"
            />
            <ProtectedRoute
              exact
              path="/AdminReview"
              component={AdminReview}
              role="Admin"
            />
            <Route component={Login} />
          </Switch>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
