import { useContext } from "react";
import ReactRouterContext from "./reactRouterContext";
import Route from "./Route";

// function withRouter(Component) {
//   return (props) => {
//     return (
//       <Route
//         render={(routeProps) => <Component {...props} {...routeProps} />}
//       />
//     );
//   };
// }

function withRouter(Component) {
  return (props) => {
    const value = useContext(ReactRouterContext);
    return <Component {...props} {...value} />;
  };
}

export default withRouter;
