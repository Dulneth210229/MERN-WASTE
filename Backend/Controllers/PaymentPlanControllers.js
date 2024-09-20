const PaymentPlan = require("../Model/PaymentPlanModel"); // Import the model

// Controller to save payment details
const savePaymentDetails = async (req, res) => {
  try {
    const { packageName, packagePrice, cardHolderName } = req.body; // Extract data from request body

    // Validate required fields
    if (!packageName || !packagePrice || !cardHolderName) {
      return res.status(400).json({ message: "All fields are required." });
    }

    // Create new payment entry
    const newPayment = new PaymentPlan({
      packageName,
      packagePrice,
      cardHolderName,
    });

    // Save payment to the database
    await newPayment.save();

    // Return success response
    return res.status(201).json({
      message: "Payment details saved successfully.",
      payment: newPayment,
    });
  } catch (error) {
    console.error("Error saving payment details:", error);
    return res.status(500).json({ message: "Server error." });
  }
};

module.exports = {
  savePaymentDetails,
};
