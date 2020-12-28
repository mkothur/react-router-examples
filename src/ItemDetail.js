import React, { useEffect, useState } from "react";
import "./styles.css";

export default function Shop({ match }) {
  useEffect(() => {
    fetchItem();
  }, []);
  const [item, setItem] = useState({ address: {} });
  const fetchItem = async () => {
    const data = await fetch(
      `https://jsonplaceholder.typicode.com/users?id=${match.params.id}`
    );
    const item = await data.json();
    setItem(item[0]);
  };
  return (
    <div className="App">
      <h2>User Details:</h2>
      <h4>Username: {item.username}</h4>
      <h4>City: {item.address.city}</h4>
      <h4>Phone: {item.phone}</h4>
      <h4>Website: {item.website}</h4>
    </div>
  );
}
