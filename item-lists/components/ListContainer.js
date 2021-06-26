import React, { useState, useEffect } from "react";
import * as api from "../Api";
import List from "./List";

function mapItems(items) {
  return items.map(
    (value, i) => ({ key: i.toString(), value })
  );
}

function fetchItems() {
  return api.fetchItems()
    .then(resp => resp.json())
    .then(({ items }) => {
      setData(mapItems(items));
    });
}

export default function ListContainer() {
  const [asc, setAsc] = useState(true);
  const [filter, setFilter] = useState("");
  const [data, setData] = useState([]);
  useEffect(
    () => {fetchItems()},
    []
  );
  return <List data={data} fetchItems={fetchItems} />;
}
