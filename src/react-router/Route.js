import { useContext } from "react";
import ReactRouterContext from "./reactRouterContext";
import matchPath from "./matchPath";

function Route({ path, component, exact, computedMatch, render }) {
  const { location, history } = useContext(ReactRouterContext);
  const match = computedMatch
    ? computedMatch
    : matchPath(location.pathname, path, exact);
  if (!match) return null;
  let RouteComponent = component;
  const routeProps = {
    history,
    location,
    match,
  };
  if (!match) {
    return null;
  }
  if (RouteComponent) {
    return <RouteComponent {...routeProps} />;
  } else if (render && typeof render === "function") {
    RouteComponent = render(routeProps);
  }
}

export default Route;
