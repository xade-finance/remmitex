import "./App.css";
import Settings from './SettingsPage/Navigation'
import FAQs from './SettingsPage/FAQs'
import Investments from './INVESTMENTS/index'
import {
  Routes,
  BrowserRouter as Router,
  Route,
  Link,
  useParams
} from "react-router-dom";


function App() {

  return (
    <div className = "App-header">
      <Router>
       <Routes>
            <Route path="/:addr" element={<Investments />} />
        </Routes>
      </Router>
      </div>
  );
}

export default App;

  

