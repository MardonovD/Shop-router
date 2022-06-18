import React from "react";
import Header from "./components/header/Header";
import "./index.css";
import { ProductContainer } from "./redux/containers/ProductContainer";
const App = () => {
  return (
    <div className="app">
      <Header />
      <ProductContainer />
    </div>
  );
};

export default App;
