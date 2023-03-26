import React from "react";
import AllRoutes from "./Routes";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import "./App.scss";

function App() {
  return (
    <div className="flex flex-col justify-between items-stretch h-screen w-full">
      <Header />
      <div className="flex-1 w-full">
        <AllRoutes />
      </div>
      <Footer />
    </div>
  );
}

export default App;
