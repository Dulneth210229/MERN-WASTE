import React from "react";

function ReportRequestList(props) {
  const {
    service,
    name,
    address,
    phoneNumber,
    date,
    time,
  } = props.request;

  return (
    <div>
      <div className="">
        <table className=" mx-auto w-auto m-1 ">
          <tr className="bg-sky-200 m-2 ">
            <td className="p-1 w-56 text-center font-medium text-slate-800">
              {service}
            </td>
            <td className=" p-1 w-48 text-center font-medium text-slate-800">
              {name}
            </td>
            <td className="p-1 w-48 text-center font-medium text-slate-800">
              {address}
            </td>
            <td className="p-1 w-36 text-center">{phoneNumber}</td>
            <td className="p-1 w-52 text-center font-medium text-slate-800">
              {date}
            </td>
            <td className="p-1 w-52 text-center font-medium text-slate-800">
              {time}
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}
export default ReportRequestList;
