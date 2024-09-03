import React from "react";

function ReportInventoryList(props) {
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
        <table className="w-auto mx-auto m-1">
          <tr className="p-3 bg-green-100">
            <td className="border-2 p-2 w-60 font-medium text-center ">
              {_id}
            </td>
            <td className="border-2 p-2 w-48 font-medium text-center ">
              {productName}
            </td>
            <td className="border-2 p-2 w-48 font-medium text-center">
              {ProductCategory}
            </td>
            <td className="border-2 p-2 w-48 font-medium text-center">
              {materialType}
            </td>
            <td className="border-2 p-2 w-24 font-medium text-center">
              {quantity}
            </td>
            <td className="border-2 p-2 w-48 font-medium text-center">
              {" "}
              {productDescription}
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}
export default ReportInventoryList;
