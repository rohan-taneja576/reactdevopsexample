import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <h1>BookKeeper v1!</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/invoices">Invoices</Link>
        <br />
        <Link to="/expenses">Expenses</Link>
      </nav>
    </div>
  );
}

export default App;
