import React from "react";
import { Router, Route } from "react-router-dom";

import TempNavigation from "./components/Navigation/TempNavigation";

import Main from "./screens/Main/Main";
import MyPage from "./screens/MyPage/MyPage";
import HosDetail from "./screens/HosDetail/HosDetail";
import HosRes from "./screens/HosRes/HosRes";
import HosMapRes from "./screens/HosMapRes/HosMapRes";
import LittleMap from './components/LittleMap/LittleMap';
import history from "./history";
import ResTab from "./components/Navigation/ResTab";
import { Link } from "react-router-dom";
import ReviewDetail from "./screens/ReviewDetail/ReviewDetail";

const App = () => {
  return (
    <div>
      <Router history={history}>
        <TempNavigation>
          <div>
            <Route path="/" exact component={Main} />
            <Route path="/Main" exact component={Main} />
            <Route path="/MyPage" exact component={MyPage} />
            <Route path="/HosDetail" exact component={HosDetail} />
            <Route path="/HosRes" exact component={HosRes} />
            <Route path="/ReviewDetail" exact component={ReviewDetail} />
            <Route path="/LittleMap" exact component={LittleMap} />
            <Route path="/HosMapRes" exact component={HosMapRes} />
            <Route path="/ResTab" exact component={ResTab} />
          </div>
        </TempNavigation>

      </Router>
    </div>
  );
};

export default App;
