import Counter from "./component/Counter";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./component/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element = {<Counter />} />
        <Route path="*" element = {<NotFound />} />
      </Routes>
    </Router>





    
  );
}

export default App;
