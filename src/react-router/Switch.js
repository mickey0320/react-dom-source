import React, { useContext } from "react";
import ReactRouterContext from "./reactRouterContext";
import mathPath from "./matchPath";

function Switch({ children }) {
  const { location } = useContext(ReactRouterContext);
  let MatchedElement = null;
  let match = null;
  React.Children.forEach(children, (child) => {
    if (match) return;
    if (React.isValidElement(child)) {
      match = mathPath(location.pathname, child.props.path, child.props.exact);
      if (match) {
        MatchedElement = child;
      }
    }
  });
  if (!match) {
    return null;
  }

  return React.cloneElement(MatchedElement, { computedMatch: match });
}

export default Switch;
