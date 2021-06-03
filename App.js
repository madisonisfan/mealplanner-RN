import { StatusBar } from "expo-status-bar";
import React from "react";
import Main from "./components/MainComponent";
import Loading from "./components/LoadingComponent";
import { Provider } from "react-redux";
import { ConfigureStore } from "./redux/configureStore";
import { PersistGate } from "redux-persist/es/integration/react";

const { persistor, store } = ConfigureStore();

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={<Loading />} persistor={persistor}>
        <Main style={{}} />
      </PersistGate>
    </Provider>
  );
}
