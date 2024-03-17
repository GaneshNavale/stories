import "./App.scss";
import { Route, Routes } from "react-router-dom";
import routes from "./routes";
import NavBar from "./components/navbar/NavBar";
import { useAuth } from "./hooks/useAuth";
function App() {
  const { user } = useAuth();
  return (
    <>
      <NavBar user={user} />
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.component} />
        ))}
      </Routes>
    </>
  );
}

export default App;
