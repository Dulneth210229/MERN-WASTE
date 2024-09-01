import React, { useEffect } from "react";
import { useState } from "react";
import InventoyHeader from "../InventoryHeader/InventoyHeader";
import axios from "axios";
import Inventory from "../InventoryList/Inventory";

const IURL = "http://Localhost:5001/inventory";

const fetchInventory = async () => {
  return await axios.get(IURL).then((res) => res.data);
};

function InventoryDetails() {
  const [inventory, setInventory] = useState();
  useEffect(() => {
    fetchInventory().then((data) => setInventory(data.inventory));
  }, []);
  return (
    <div>
      <InventoyHeader />
      <h1>Inventory Details Display</h1>
      <hr />
      {inventory &&
        inventory.map((inventory, i) => (
          <div key={i}>
            <Inventory inventory={inventory} />
          </div>
        ))}
    </div>
  );
}

export default InventoryDetails;
