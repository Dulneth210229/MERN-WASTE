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
      <h1>Send Report Portal</h1>
      <div>
        <form onSubmit={submitpdf} className="bg-slate-500 w-1/5 mx-auto p-3">
          <label>Enter Title Here</label>
          <br />
          <input
            required
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            className="border-2 rounded-lg w-full"
          ></input>
          <br />
          <br />
          <label className="">Select Document</label>
          <div className="border-dashed w-full border-2 rounded-lg h-20 ">
            <input
              type="file"
              accept="application/pdf"
              required
              onChange={(e) => saveFile(e.target.files[0])}
            ></input>
          </div>
          <br />
          <button>Submit</button>
        </form>
      </div>
      <div>
        <h3>Pdf Details</h3>
        {Array.isArray(allpdfs) && allpdfs.length > 0 ? (
          allpdfs.map((data) => (
            <div key={data._id}>
              <h1>Title: {data.title}</h1>
              <button onClick={() => showPdf(data.pdf)}>Show Pdf</button>
            </div>
          ))
        ) : (
          <p>No PDFs found.</p>
        )}
      </div>
      <PdfDetails pdfFile={pdfFile} />
    </div>
  );
}

export default SendReport;
