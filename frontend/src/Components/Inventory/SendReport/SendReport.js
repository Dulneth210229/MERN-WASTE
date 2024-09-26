import React, { useState, useEffect } from "react";
import InventoyHeader from "../InventoryHeader/InventoyHeader";
import axios from "axios";
import PdfDetails from "./PdfDetails";
import { pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

function SendReport() {
  const [title, setTitle] = useState("");
  const [file, saveFile] = useState("");
  const [allpdfs, setAllpdfs] = useState([]); // Updated here
  const [pdfFile, setPDFFile] = useState("");

  useEffect(() => {
    getpdf();
  }, []);

  const getpdf = async () => {
    try {
      const result = await axios.get("http://localhost:5001/getFile");
      console.log("PDF data received:", result.data.data); // Check data type
      setAllpdfs(result.data.data || []); // Ensure it's an array
    } catch (error) {
      console.error("Error fetching PDFs:", error);
    }
  };

  const submitpdf = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("file", file);
    console.log(title, file);

    try {
      const result = await axios.post(
        "http://localhost:5001/uploadfile",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      console.log(result);

      if (result.data.status === 200) {
        alert("Upload successful");
        getpdf(); // Refresh the list after upload
      } else {
        alert("Upload error");
      }
    } catch (error) {
      console.error("Error Uploading : " + error.message);
      alert("Error Uploading");
    }
  };

  const showPdf = (pdf) => {
    setPDFFile(`http://localhost:5001/file/${pdf}`); // Fixed template literal
  };

  return (
    <div>
      <InventoyHeader />
      <div className="min-h-screen bg-gray-100 p-5">
        <h1 className="text-4xl text-gray-800 font-bold text-center mb-10 mt-5">
          Send Report Portal
        </h1>
        <div className="max-w-2xl mx-auto bg-white p-8 shadow-lg rounded-lg">
          <form onSubmit={submitpdf} className="space-y-6">
            <div>
              <label className="block text-lg font-medium text-gray-700 mb-2">
                Enter Title
              </label>
              <input
                required
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter title for the report"
              />
            </div>

            <div>
              <label className="block text-lg font-medium text-gray-700 mb-2">
                Select Document
              </label>
              <div className="border-dashed border-4 border-gray-300 rounded-lg p-4 flex justify-center items-center">
                <input
                  type="file"
                  accept="application/pdf"
                  required
                  onChange={(e) => saveFile(e.target.files[0])}
                  className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-200"
                />
              </div>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-600 text-white w-36 py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>

        <div className="mt-12 max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-6">Available Reports</h3>
          {Array.isArray(allpdfs) && allpdfs.length > 0 ? (
            <div className="space-y-4">
              {allpdfs.map((data) => (
                <div
                  key={data._id}
                  className="bg-white shadow-md rounded-lg p-5 flex justify-between items-center"
                >
                  <div>
                    <h1 className="font-semibold text-2xl mb-2">
                      {data.title}
                    </h1>
                  </div>
                  <button
                    onClick={() => showPdf(data.pdf)}
                    className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300"
                  >
                    Show PDF
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <h1 className="text-2xl font-medium text-gray-500">
              No PDFs found
            </h1>
          )}
        </div>

        <div className="mt-10">
          <PdfDetails pdfFile={pdfFile} />
        </div>
      </div>
    </div>
  );
}

export default SendReport;
