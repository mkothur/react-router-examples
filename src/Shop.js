import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export default function Shop() {
  useEffect(() => {
    fetchItems();
  }, []);
  const [items, setItems] = useState([]);
  const fetchItems = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    const items = await data.json();
    setItems(items);
  };
  return (
    <div className="App">
      {items.map((item) => (
        <h2 key={item.id}>
          <Link to={`/shop/${item.id}`}>{item.name}</Link>
        </h2>
      ))}
    </div>
  );
}
