import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createUseStyles } from "react-jss";
import { ReactComponent as MenuIcon } from "./menu.svg";

const useStyles = createUseStyles({
  display: {
    background: "blue",
    display: "block",
    position: "absolute",
    right: 0,
    width: "10%",
    height: "100vh",
    opacity: 0.9,
    color: (props) => props.color,
  },
  wrapper: {
    background: (props) => props.background,
    color: (props) => props.color,
    display: (props) => props.display,
    textAlign: (props) => props.textAlign,
    position: (props) => props.position,
    right: (props) => props.right,
    width: (props) => props.width,
    height: (props) => props.height,
    margin: (props) => props.margin,
    padding: (props) => props.padding,
    fontSize: (props) => props.fontSize,
  },
  list: {
    listStyle: "none",
    color: (props) => props.color,
    padding: [["1em", ".5em"]],
    fontSize: "1.8em",
  },
});

export default function Menu(props) {
  const [active, setActive] = useState("true");
  const classes = useStyles(props);

  const hide = () => {
    setActive(!active);
  };
  return (
    <>
      <div className={classes.wrapper}>
        <div
          style={{ color: "#ffffff", background: "#000000", padding: "2em" }}
        >
          <span>
            <MenuIcon fill="#ffffff" width="4em" onClick={hide} />
          </span>
        </div>
        {active && (
          <nav className={classes.list}>
            <li>
              <Link to="/" onClick={hide}>
                {" "}
                Home
              </Link>
            </li>
            <li>
              <Link to="/" onClick={hide}>
                {" "}
                About
              </Link>
            </li>
            <li>News</li>
            <li>
              <Link to="/" onClick={hide}>
                {" "}
                Event
              </Link>
            </li>
            <li>
              <Link to="/" onClick={hide}>
                {" "}
                Contact
              </Link>
            </li>
          </nav>
        )}
      </div>
    </>
  );
}
