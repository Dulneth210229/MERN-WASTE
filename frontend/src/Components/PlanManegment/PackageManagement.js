import React, { useState, useEffect } from "react";
import axios from "axios";
import jsPDF from "jspdf";
import "jspdf-autotable";

function PackageDashboard() {
  const [packages, setPackages] = useState([]);
  const [newPackage, setNewPackage] = useState({ name: "", price: "", features: [] });
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [errors, setErrors] = useState({ name: "", price: "", features: "" });

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


   


    if (newPackage.name.trim() === "") {
      errors.name = "Package name is required.";
      isValid = false;
    }

    if (String(newPackage.price).trim() === "") {
      errors.price = "Package price is required.";
      isValid = false;
    } else if (isNaN(newPackage.price) || Number(newPackage.price) < 0) {
      errors.price = "Price must be a positive number.";
      isValid = false;
    }

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
      setNewPackage({ name: "", price: "", features: [] });
      setErrors({ name: "", price: "", features: "" }); // Clear errors on success
    } catch (err) {
      console.error("Error saving package:", err);
    }
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPackage((prevPackage) => ({ ...prevPackage, [name]: value }));
  };

  // Generate PDF report
  const generateReport = () => {
    const doc = new jsPDF();
    const title = "Subscription Package Report";
    const subtitle = "Comprehensive overview of current subscription packages";
  
    // Title
    doc.setFontSize(22);
    doc.setFont("helvetica", "bold");
    doc.text(title, 14, 22);
    
    // Subtitle
    doc.setFontSize(16);
    doc.setFont("helvetica", "normal");
    doc.text(subtitle, 14, 30);
    
    // Add a horizontal line under the title
    doc.setLineWidth(0.5);
    doc.line(14, 33, 195, 33);
  
    // Add some spacing before the table
    const marginTop = 40;
  
    // AutoTable for displaying package details
    doc.autoTable({
      startY: marginTop,
      head: [['Package Name', 'Price', 'Features']],
      body: packages.map((pkg) => [
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
            <label className="block text-gray-700 font-bold mb-2">Features (comma separated)</label>
            <input
              type="text"
              name="features"
              value={newPackage.features}
              onChange={(e) =>
                setNewPackage({ ...newPackage, features: e.target.value })
              }
              className={`w-full px-4 py-2 border rounded-lg ${errors.features ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="Enter features"
              required
            />
            {errors.features && <p className="text-red-500 text-sm">{errors.features}</p>}
          </div>
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300"
          >
            {isEditing ? "Update Package" : "Create Package"}
          </button>
        </form>
      </div>

      {/* Generate Report Button */}
      <div className="text-center my-6">
        <button
          onClick={generateReport}
          className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Generate Report
        </button>
      </div>

      {/* Package List Section */}
      <div className="container mx-auto my-10">
        <h2 className="text-3xl font-bold mb-6 text-center text-slate-600">Manage Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {packages.map((pkg) => (
            <div key={pkg._id} className="p-6 bg-white shadow-lg rounded-lg border border-gray-300">
              <h3 className="text-2xl font-bold text-center text-slate-700">{pkg.packageName}</h3>
              <p className="text-center text-lg mt-2 text-gray-600">${pkg.packagePrice}</p>
              <ul className="mt-4 text-gray-600 text-center">
                {pkg.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <div className="mt-6 flex justify-around">
                <button
                  onClick={() => handleEdit(pkg._id)}
                  className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(pkg._id)}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PackageDashboard;
