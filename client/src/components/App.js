import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Auth from "../hoc/auth";

// importing pages(or component) from views folder
import LandingPage from "./views/LandingPage/LandingPage.js";
import LoginPage from "./views/LoginPage/LoginPage.js";
import RegisterPage from "./views/RegisterPage/RegisterPage.js";
import NavBar from "./views/NavBar/NavBar";
import Footer from "./views/Footer/Footer";
import VideoUploadPage from "./views/VideoUploadPage/VideoUploadPage";

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NavBar />
      <div style={{ paddingTop: "69px", minHeight: "calc(100vh - 80px)" }}>
        <Switch>
          {/* null means landing page, accessible whether or not you are logged in */}
          <Route exact path="/" component={Auth(LandingPage, null)} />
          {/* false is not accessible after login */}
          <Route exact path="/login" component={Auth(LoginPage, false)} />
          <Route exact path="/register" component={Auth(RegisterPage, false)} />
          {/* true is accessible only after login */}
          <Route
            exact
            path="/video/upload"
            component={Auth(VideoUploadPage, true)}
          />
        </Switch>
      </div>
      <Footer />
    </Suspense>
  );
}

export default App;
