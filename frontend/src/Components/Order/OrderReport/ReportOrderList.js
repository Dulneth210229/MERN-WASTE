import React from "react";
//01

function ReportOrderList(props) {
  const {
    // _id,
    productName,
    productCategory,
    seller,
    deliveryType,
    trakingID,
    orderDescription,
    unitPrice,
    quantity,
    orderTotal,
    paymentType,
  } = props.order;

  return (
    <div>
      <div className="">
        <table className=" mx-auto w-auto m-1 ">
          <tr className="bg-slate-300 m-2 ">
            {/* <td className="p-1 w-40 text-center font-medium text-slate-800 text-nowrap">
              {_id}
            </td> */}
            <td className="p-1 w-56 text-center font-medium text-slate-800">
              {productName}
            </td>
            <td className=" p-1 w-48 text-center font-medium text-slate-800">
              {productCategory}
            </td>
            <td className="p-1 w-48 text-center font-medium text-slate-800">
              {seller}
            </td>
            <td className="p-1 w-36 text-center">{deliveryType}</td>
            <td className="p-1 w-48 text-center font-medium text-slate-800">
              {trakingID}
            </td>
            <td className="p-1 w-52 text-center font-medium text-slate-800">
              {orderDescription}
            </td>
            <td className="p-1 w-48 text-center font-medium text-slate-800">
              {unitPrice}
            </td>
            <td className="p-1 w-48 text-center font-medium text-slate-800">
              {quantity}
            </td>
            <td className="p-1 w-48 text-center font-medium text-slate-800">
              {orderTotal}
            </td>
            <td className="p-1 w-48 text-center font-medium text-slate-800">
              {paymentType}
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}
export default ReportOrderList;
