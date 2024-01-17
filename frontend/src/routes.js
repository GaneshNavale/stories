import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NewPost from "./pages/NewPost";
import EditPost from "./pages/EditPost";

const routes = [
  { path: "/", component: <Home />, exact: true },
  { path: "/about", component: <About /> },
  { path: "/contact", component: <Contact /> },
  { path: "/newPost", component: <NewPost /> },
  { path: "/editPost", component: <EditPost /> },
];

export default routes;