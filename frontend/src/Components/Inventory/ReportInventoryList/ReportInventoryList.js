import React from "react";

function ReportInventoryList(props) {
  const {
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
          <tr className="bg-sky-200 m-2 ">
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
