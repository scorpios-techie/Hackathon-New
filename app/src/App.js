import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/header";
import Footer from "./components/footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/styles.css";
import ParentContainer from "./components/parentcontainer";

const AppLayout = () => {
  return (
    <div>
      <main>
        <Header />
        <div className="border-bottom"></div>
        <ParentContainer />
        <div className="border-bottom"></div>
        <Footer />
      </main>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
