import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import routes from "./routes";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <div className="container mt-5 pt-5">
          <Routes>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} element={route.component} />
            ))}
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
