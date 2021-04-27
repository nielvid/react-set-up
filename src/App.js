import React, { useState, useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PageWrapper from "./layout/PageWrapper";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Mobilemenu from "./common/Mobilemenu";
import Header from "./common/Header";

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
      <ChakraProvider>
        <PageWrapper>
          <Router>
            {state < 720 ? <Mobilemenu /> : <Header />};
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/signup">
                <Signup />
              </Route>
            </Switch>
          </Router>
        </PageWrapper>
      </ChakraProvider>
    </>
  );
}

export default App;
