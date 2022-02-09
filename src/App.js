import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import { Route, Routes, BrowserRouter, Link } from "react-router-dom";
import About from "./components/About";

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, alertType) => {
    setAlert({
      msg: message,
      type: alertType,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  return (
    <>
      <BrowserRouter>
        <NavBar title="ProjectOne" />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Enter a text to anaylze"
                />
              }
            />
            <Route exact path="/about" element={<About />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
