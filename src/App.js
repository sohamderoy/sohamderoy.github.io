import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import IndexPage from "./pages/IndexPage/IndexPage";
import HomePage from "./pages/HomePage/HomePage";
import CertificatePage from "./pages/CertificatePage/CertificatePage";
function App() {
  return (
    <Router>
      <Route path="/" exact component={IndexPage} />
      <Route path="/certificates" component={CertificatePage} />
    </Router>
  );
}

export default App;
