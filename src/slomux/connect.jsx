import { useEffect, useState } from "react";

import { useStore } from "./StoreContext";

export const connect = (mapStateToProps, mapDispatchToProps) => (Component) => {
  function WrappedComponent(props) {
    const store = useStore();
    const [state, setState] = useState({});

    function forceUpdate() {
      setState({});
    }

    useEffect(() => {
      const unsubscribe = store.subscribe(forceUpdate);

      // TODO: unsubscribe from listener after change store
      return () => {
        unsubscribe();
      };
    }, [store]);

    return (
      <Component
        {...props}
        {...mapStateToProps(store.getState(), props)}
        {...mapDispatchToProps(store.dispatch, props)}
      />
    );
  }

  return WrappedComponent;
};
