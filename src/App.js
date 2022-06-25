//import './App.css';
import { BrowserRouter as Router, Route, Routes as Switch } from "react-router-dom";
import ProductList from "./components/ProductList";
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";

function App() {
  return (
    <Router>
    <div className="container">
      <div className="columns">
        <div className="column is-half is-offset-one-quarter">
          <Switch>
            <Route exact path="/" element={<ProductList />}>
              {/* <ProductList /> */}
            </Route>
            <Route path="/add" element={<AddProduct />}>
              {/* <AddProduct /> */}
            </Route>
            <Route path="/edit/:id" element={<EditProduct />}>
              {/* <EditProduct /> */}
            </Route>
          </Switch>
        </div>
      </div>
    </div>
    </Router>
  );
}

export default App;
