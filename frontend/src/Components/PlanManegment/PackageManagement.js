import React, { useState, useEffect } from "react";
import axios from "axios";
import jsPDF from "jspdf";
import "jspdf-autotable";
import logo from "./img/LOGO.png"; 
function PackageDashboard() {
  const [packages, setPackages] = useState([]);
  const [newPackage, setNewPackage] = useState({ name: "", price: "", features: "" });
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [errors, setErrors] = useState({ name: "", price: "", features: "" });
  const [searchTerm, setSearchTerm] = useState(""); // State for search term

  // Fetch all packages from the backend
  const fetchPackages = async () => {
    try {
      const response = await axios.get("http://localhost:5001/plan");
      setPackages(response.data.plans);
    } catch (err) {
      console.error("Error fetching packages:", err);
    }
  };

  // Load all plans when the component mounts
  useEffect(() => {
    fetchPackages();
  }, []);

  // Validate inputs
  const validateInputs = () => {
    const errors = { name: "", price: "", features: "" };
    let isValid = true;

    // Validate package name
    if (newPackage.name.trim() === "") {
      errors.name = "Package name is required.";
      isValid = false;
    } else {
      const namePattern = /^[A-Za-z\s]*$/; // Only allow letters and spaces
      if (!namePattern.test(newPackage.name)) {
        errors.name = "Package name must contain only letters and spaces.";
        isValid = false;
      } else {
        errors.name = ""; // Clear error if valid
      }
    }

    // Validate package price
    if (String(newPackage.price).trim() === "") {
      errors.price = "Package price is required.";
      isValid = false;
    } else if (isNaN(newPackage.price) || Number(newPackage.price) < 0) {
      errors.price = "Price must be a positive number.";
      isValid = false;
    }

    // Validate package features
    if (newPackage.features.trim() === "") {
      errors.features = "Features are required.";
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  // Delete a package
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5001/plan/${id}`);
      setPackages(packages.filter((pkg) => pkg._id !== id));
    } catch (err) {
      console.error("Error deleting package:", err);
    }
  };

  // Edit a package
  const handleEdit = (id) => {
    const pkg = packages.find((pkg) => pkg._id === id);
    setNewPackage({ name: pkg.packageName, price: pkg.packagePrice, features: pkg.features.join(",") });
    setEditId(id);
    setIsEditing(true);
    setErrors({ name: "", price: "", features: "" }); // Clear errors on edit
  };

  // Handle form submission for adding or updating a package
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateInputs()) return; // Validate inputs

    const packageData = {
      packageName: newPackage.name,
      packagePrice: newPackage.price,
      features: newPackage.features.split(","),
    };

    try {
      if (isEditing) {
        await axios.put(`http://localhost:5001/plan/${editId}`, packageData);
      } else {
        await axios.post("http://localhost:5001/plan/add", packageData);
      }
      fetchPackages(); // Refresh the list of packages
      setIsEditing(false);
      setEditId(null);
      setNewPackage({ name: "", price: "", features: "" });
      setErrors({ name: "", price: "", features: "" }); // Clear errors on success
    } catch (err) {
      console.error("Error saving package:", err);
    }
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Prevent invalid input for package name (only allow letters and spaces)
    if (name === "name" && !/^[A-Za-z\s]*$/.test(value)) {
      return; // If value contains invalid characters, do not update the state
    }

    // Prevent invalid input for package price (only allow numbers)
    if (name === "price" && !/^\d*\.?\d*$/.test(value)) {
      return; // If value contains invalid characters, do not update the state
    }

    setNewPackage((prevPackage) => ({ ...prevPackage, [name]: value }));
  };

  // Search functionality
  const filteredPackages = packages.filter((pkg) =>
    pkg.packageName.toLowerCase().includes(searchTerm.toLowerCase())
  );
// Generate PDF report
const generateReport = () => {
  const doc = new jsPDF();
  
  // Place the logo in the upper right corner (adjust x and y values)
  const pageWidth = doc.internal.pageSize.getWidth(); // Get page width
  const logoWidth = 50; // Adjust the logo width as needed
  const logoX = pageWidth - logoWidth - 14; // Position it with some padding from the right
  const logoY = 9; // Y position of the logo
  
  doc.addImage(logo, 'PNG', logoX, logoY, logoWidth, 10); // Adjust logo height if needed
  
  const title = "Subscription Package Report";
  const subtitle = "Comprehensive overview of current subscription packages";
  const date = new Date().toLocaleString(); // Get current date and time

  // Title
  doc.setFontSize(22);
  doc.setFont("helvetica", "bold");
  doc.text(title, 14, 22);
  
  // Subtitle
  doc.setFontSize(16);
  doc.setFont("helvetica", "normal");
  doc.text(subtitle, 14, 30);
  
  // Date and Time
  doc.setFontSize(12);
  doc.setFont("helvetica", "normal");
  doc.text(`Date: ${date}`, 14, 38); // Adding date and time

  // Add a horizontal line under the title
  doc.setLineWidth(0.5);
  doc.line(14, 41, 195, 41);
  
  // Add some spacing before the table
  const marginTop = 50;
  
  // AutoTable for displaying package details
  doc.autoTable({
    startY: marginTop,
    head: [['Package Name', 'Price', 'Features']],
    body: filteredPackages.map((pkg) => [
      pkg.packageName,
      `$${pkg.packagePrice}`,
      pkg.features.join(", "),
    ]),
    headStyles: {
      fillColor: [41, 87, 141], // Dark blue
      textColor: [255, 255, 255], // White
      fontSize: 12,
      fontStyle: 'bold',
    },
    bodyStyles: {
      fontSize: 11,
    },
    alternateRowStyles: {
      fillColor: [240, 240, 240], // Light gray for alternate rows
    },
    margin: { left: 14, right: 14 },
    theme: 'grid', // Use grid theme for better visual separation
  });
  
  // Add Signature Section
  const signatureY = doc.lastAutoTable.finalY + 10;
  doc.text("Signature: ____________________", 14, signatureY); // Add a line for signature
  
  // Save the PDF
  doc.save("Subscription_Package_Report.pdf");
};


  return (
    <div>
      {/* Dashboard Header */}
      <div className="text-center mt-16">
        <h2 className="font-bold font-serif text-slate-600 text-5xl">
          Package Management Dashboard
        </h2>
        <p className="mt-4 text-gray-600 text-xl italic">
          Create, Update, and Delete your subscription packages here.
        </p>
      </div>

      {/* Search Bar */}
      <div className="my-4 text-center">
        <input
          type="text"
          placeholder="Search Packages"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border p-2 rounded-lg w-1/3"
        />
      </div>

      {/* Package Management Form */}
      <div className="my-10 p-6 mx-auto max-w-4xl bg-white shadow-lg rounded-lg border border-gray-300">
        <h3 className="text-2xl font-bold mb-4">{isEditing ? "Edit Package" : "Create New Package"}</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Package Name</label>
            <input
              type="text"
              name="name"
              value={newPackage.name}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-lg ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="Enter package name"
              required
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Package Price</label>
            <input
              type="text"
              name="price"
              value={newPackage.price}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-lg ${errors.price ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="Enter package price"
              required
            />
            {errors.price && <p className="text-red-500 text-sm">{errors.price}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Features</label>
            <textarea
              name="features"
              value={newPackage.features}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-lg ${errors.features ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="Enter features separated by commas"
              required
            ></textarea>
            {errors.features && <p className="text-red-500 text-sm">{errors.features}</p>}
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700"
          >
            {isEditing ? "Update Package" : "Create Package"}
          </button>
        </form>
      </div>

      {/* Package List */}
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">Package Name</th>
              <th className="border border-gray-300 px-4 py-2">Price</th>
              <th className="border border-gray-300 px-4 py-2">Features</th>
              <th className="border border-gray-300 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredPackages.length > 0 ? (
              filteredPackages.map((pkg) => (
                <tr key={pkg._id}>
                  <td className="border border-gray-300 px-4 py-2">{pkg.packageName}</td>
                  <td className="border border-gray-300 px-4 py-2">${pkg.packagePrice}</td>
                  <td className="border border-gray-300 px-4 py-2">{pkg.features.join(", ")}</td>
                  <td className="border border-gray-300 px-4 py-2">
                    <button
                      onClick={() => handleEdit(pkg._id)}
                      className="bg-yellow-500 text-white font-bold py-1 px-2 rounded hover:bg-yellow-600 mr-2"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(pkg._id)}
                      className="bg-red-500 text-white font-bold py-1 px-2 rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="border border-gray-300 px-4 py-2 text-center">No packages found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Generate PDF Button */}
      <div className="mt-6 mb-6 text-center ">
        <button
          onClick={generateReport}
          className="bg-green-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-700"
        >
          Generate PDF Report
        </button>
      </div>
    </div>
  );
}

export default PackageDashboard;

