import React, { useState, useEffect } from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Shop() {
    {/* What is useEffect?*/}
  useEffect( ()=>{
    fetchItems();
  }, []);

  {/* What is useState?*/}
  const [items, setItems] = useState([]);

  {/* What is async, await?*/}
  const fetchItems = async () => {
      const data = await fetch('https://fortnite-public-api.theapinetwork.com/prod09/upcoming/get');
      const items = await data.json();
      console.log(items);
      setItems(items.items);
  }

  { /* How to use array functions like map, filter, reduce etc */}
  return (
    <div>
      {items.map( item => (
          <h1 key={item.itemid}><Link to={`/shop/${item.itemid}`}>{item.name}</Link></h1>
      ))}
    </div>
  );
}

export default Shop;