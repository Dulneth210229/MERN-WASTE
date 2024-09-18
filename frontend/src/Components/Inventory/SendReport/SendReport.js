import React, { useState, useEffect } from "react";
import InventoyHeader from "../InventoryHeader/InventoyHeader";
import axios from "axios";

function SendReport() {
  const [title, setTitle] = useState("");
  const [file, saveFile] = useState("");
  const [allpdfs, setAllpdfs] = useState("");

  useEffect(() => {
    getpdf();
  }, []);

  const getpdf = async () => {
    const result = await axios.get("http://localhost:5001/getFile");
    console.log(result.data.data);
    setAllpdfs(result.data.data);
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
      } else {
        alert("Upload error");
      }
    } catch (error) {
      console.error("Error Uploading : " + error.message);
      alert("Error Uploading");
    }
  };

  return (
    <div>
      <InventoyHeader />
      <h1>Send Report Portal</h1>
      <div>
        <form onSubmit={submitpdf}>
          <lable>PDF Title</lable>
          <input
            required
            type="text"
            onChange={(e) => setTitle(e.target.value)}
          ></input>
          <br />
          <br />
          <lable>Select Document</lable>
          <input
            type="file"
            accept="application/pdf"
            required
            onChange={(e) => saveFile(e.target.files[0])}
          ></input>
          <br />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default SendReport;
