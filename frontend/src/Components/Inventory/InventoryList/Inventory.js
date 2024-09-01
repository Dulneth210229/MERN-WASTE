import React from "react";

function Inventory(props) {
  const {
    _id,
    productName,
    ProductCategory,
    materialType,
    quantity,
    productDescription,
  } = props.inventory;
  return (
    <div>
      <div>
        <h1>Inventory Display</h1>
        <hr />
        <h1>Inventory ID : {_id}</h1>
        <h1>Product Name : {productName}</h1>
        <h1>Product Category : {ProductCategory}</h1>
        <h1>MaterialType : {materialType}</h1>
        <h1>Product Quantity : {quantity}</h1>
        <h1>Product Dis : {productDescription}</h1>
        <button>Update</button>
        <button>Delete</button>
      </div>
    </div>
  );
}
export default Inventory;
