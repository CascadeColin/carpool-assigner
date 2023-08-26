import { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import CarpoolEvents from "./components/carpoolevents/CarpoolEvents";
import Footer from "./components/footer/Footer";

export default function App() {
  const [currentPage, setCurrentPage] = useState("");

  function renderPage() {
    switch (currentPage) {
      case "signup":
        return <Signup/>;
      case "login":
        return <Login />;
      case "events":
        return <CarpoolEvents />;
      default:
        return "";
    }
  }

  const pageHandler = (page: string) => setCurrentPage(page);

  return (
    <>
      <Header />
      <div className="navlinks">
        <a href="#signup" onClick={() => pageHandler("signup")}>
          Signup
        </a>
        <a href="#login" onClick={() => pageHandler("login")}>
          Login
        </a>
        <a href="#events" onClick={() => pageHandler("events")}>
          See Events
        </a>
      </div>
      {renderPage()}
      <Footer />
    </>
  );
}
