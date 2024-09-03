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
      <div className="">
        <table className=" mx-auto w-auto m-1 ">
          <tr className="bg-yellow-300 m-2 ">
            <td className="p-1 w-72 text-center font-medium text-slate-800">
              {_id}
            </td>
            <td className="p-1 w-56 text-center font-medium text-slate-800">
              {productName}
            </td>
            <td className=" p-1 w-48 text-center font-medium text-slate-800">
              {ProductCategory}
            </td>
            <td className="p-1 w-48 text-center font-medium text-slate-800">
              {materialType}
            </td>
            <td className="p-1 w-36 text-center">{quantity}</td>
            <td className="p-1 w-52 text-center font-medium text-slate-800">
              {productDescription}
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}
export default ReportInventoryList;
