import { BrowserRouter as Router } from "react-router-dom";
import MainRoutes from "./components/routes/main-routes";
import ScrollToTop from "./components/common/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <MainRoutes />
    </Router>
  );
}

export default App;
