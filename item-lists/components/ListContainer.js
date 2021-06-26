import React, { useState, useEffect } from "react";
import * as api from "../Api";
import List from "./List";

export default function ListContainer() {
  const [data, setData] = useState([]);
  
  function fetchItems() {
    return api
      .fetchItems()
      .then(resp => resp.json())
      .then(({ items }) => {
        setData(
          items.map((value, i) => ({
            key: i.toString(),
            value
          }))
        );
      });
  }

  useEffect(() => {
    fetchItems();
  }, []);

  return <List data={data} fetchItems={fetchItems} />;
}
