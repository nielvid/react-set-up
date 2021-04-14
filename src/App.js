import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Menu from "./common/Menu";

function App() {
  const [state, setstate] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setstate(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, [window]);

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            {state < 720 ? <Menu color="blue" /> : <div>fullwidth</div>};
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
