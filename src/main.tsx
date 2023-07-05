import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { setupStore } from "./store/root";
import { Provider } from "react-redux";
import { Preloader } from "./components/Preloader/Preloader";
// import App from "./App";

const App = React.lazy(() => import('./App'));

const store = setupStore();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <Suspense fallback={<Preloader />}>
      <App />
    </Suspense>
  </Provider>
);
