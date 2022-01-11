import { StoreProvider } from "./slomux/StoreContext";
import { createStore } from "./slomux/createStore";

import { Timer } from "./components/Timer";

import { reducer } from "./reducers";

export function App() {
  return (
    <StoreProvider store={createStore(reducer, 0)}>
      <Timer />
    </StoreProvider>
  );
}
