import { useEffect, useState } from "react";

import ReactRouterContext from "./reactRouterContext";

function Router({ children, history }) {
  const [location, setLocation] = useState(history.location);
  const contextValue = {
    history: history,
    location,
  };
  useEffect(() => {
    history.listen(({location}) => {
      setLocation(location);
    });
  }, []);
  console.log('router')
  return (
    <ReactRouterContext.Provider value={contextValue}>
      {children}
    </ReactRouterContext.Provider>
  );
}

export default Router;
