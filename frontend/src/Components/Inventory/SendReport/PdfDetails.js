import { useState } from "react";
import { Document, Page } from "react-pdf";

function PdfDetails(props) {
  const [numPages, setNumPages] = useState();
  // Removed setPageNumber since it's not being used

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className="p-5 bg-gray-100 shadow-md rounded-lg">
      {props.pdfFile ? (
        <Document
          file={props.pdfFile}
          onLoadSuccess={onDocumentLoadSuccess}
          className="flex justify-center"
        >
          {Array.from(new Array(numPages), (el, index) => (
            <div
              key={`page_${index + 1}`}
              className="mb-4 shadow-lg bg-slate-500"
            >
              <Page
                pageNumber={index + 1}
                renderTextLayer={false}
                renderAnnotationLayer={false}
                className="rounded-lg"
              />
            </div>
          ))}
        </Document>
      ) : (
        <p className="text-center text-gray-600 font-semibold">
          No PDF file selected
        </p>
      )}
      <p className="text-center mt-4 text-sm text-gray-500">
        {numPages ? `Total Pages: ${numPages}` : "Loading pages..."}
      </p>
    </div>
  );
}

export default PdfDetails;
