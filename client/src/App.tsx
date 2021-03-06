import React from "react";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Web3ReactProvider } from "@web3-react/core";
import { ethers } from "ethers";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import { createStore } from "redux";

import GlobalStyle from "./styles/global";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";

import "react-toastify/dist/ReactToastify.css";

const history = createBrowserHistory();
const store = createStore(() => {});

function App() {
  const getLibrary = (provider: any): ethers.providers.Web3Provider => {
    const library = new ethers.providers.Web3Provider(provider);
    library.pollingInterval = 12000;
    return library;
  };

  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Provider store={store}>
        <Router history={history}>
          <div className="App">
            <GlobalStyle />
            <Navbar />
            <HomePage />
            <ToastContainer
              position="top-right"
              autoClose={5000}
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              hideProgressBar
              newestOnTop
              closeOnClick
              theme="colored"
            />
          </div>
        </Router>
      </Provider>
    </Web3ReactProvider>
  );
}

export default App;
