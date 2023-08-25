import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Incomplete from "./components/Incomplete/Incomplete.jsx";
import ToDo from "./components/ToDo/ToDo.jsx";
import Doing from "./components/Doing/Doing.jsx"
import UnderReview from "./components/UnderReview/UnderReview";
import Completed from "./components/Completed/Completed";
import Overdue from "./components/Overdue/Overdue";
function App() {
  return (
    <div className="app parent-card">
      <Incomplete />
      <ToDo />
      <Doing />
      <UnderReview/>
      <Completed/>
      <Overdue/>
    </div>
  );
}

export default App;
