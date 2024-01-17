import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import routes from "./routes";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.component} />
          ))}
        </Routes>
      </Router>
    </>
  );
}

export default App;
