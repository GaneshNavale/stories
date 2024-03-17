import Home from "./pages/guest/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NewPost from "./pages/NewPost";
import EditPost from "./pages/EditPost";
import Display from "./pages/DisplayPost";
import SignIn from "./components/Authentication/SignIn";
import GetStarted from "./components/Authentication/GetStarted";
import SignUpWithMail from "./components/Authentication/SignUpWithMail";

const routes = [
  { path: "/", component: <Home />, exact: true },
  { path: "/about", component: <About /> },
  { path: "/contact", component: <Contact /> },
  { path: "/newPost", component: <NewPost /> },
  { path: "/editPost", component: <EditPost /> },
  { path: "/displaypost", component: <Display /> },
  { path: "/signIn", component: <SignIn /> },
  { path: "/getStarted", component: <GetStarted /> },
  { path: "/signUpWithMail", component: <SignUpWithMail /> },
];

export default routes;
