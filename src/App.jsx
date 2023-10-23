import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import AddItem from "./components/AddItem";
import Search from "./components/Search";
import { useState, useEffect } from "react";

function App() {
  const [items, setItems] = useState([]);
  const [item, setItem] = useState("");

  // Load items from local storage when the component mounts
  useEffect(() => {
    const things = JSON.parse(localStorage.getItem("items")) || [];
    setItems(things);
    setQuantity(things.length);
  }, []);

  const [quantity, setQuantity] = useState(items.length);

  const handleInputChange = (e) => {
    setItem(e.target.value);
  };

  // Save items to local storage whenever the items state changes
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
    setQuantity(items.length);
  }, [items]);

  const addItem = (e) => {
    e.preventDefault();
    setItems([...items, item]);
  };

  return (
    <div className="App">
      <Header />
      <AddItem addItem={addItem} handleInputChange={handleInputChange} />
      <Search />
      <Content items={items} />
      <Footer quantity={quantity} />
    </div>
  );
}

export default App;
