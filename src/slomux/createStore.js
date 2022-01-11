export const createStore = (reducer, initialState) => {
  let currentState = initialState;
  let listeners = [];

  const getState = () => currentState;

  const dispatch = (action) => {
    currentState = reducer(currentState, action);
    listeners.forEach((listener) => listener());
  };

  const subscribe = (listener) => {
    listeners.push(listener);

    // TODO: Added unsubscribe method
    return () => {
      listeners = listeners.filter((fn) => fn !== listener);
    };
  };

  return { getState, dispatch, subscribe };
};
