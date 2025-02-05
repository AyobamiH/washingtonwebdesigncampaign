import React, { useEffect, useState } from "react";

import { useParams, Link } from "react-router-dom";
import jsPDF from "jspdf";
import { InlineWidget } from "react-calendly"; // Import Calendly widget
 

const SuccessReceipt = () => {
  const { sessionId } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [receiptDetails, setReceiptDetails] = useState(null);
  const [showScheduler, setShowScheduler] = useState(false)

  // Define pricing plans
  const pricingPlans = [
    {
      name: "Basic",
      price: 79.99,
      validityMonths: 36,
      onboardingFee: 50,
      features: [
        "Responsive Design: Works across all devices",
        "Mobile Friendly: Optimized for mobile users",
        "Basic SEO Setup: Simple keyword and on-page optimization",
        "User-friendly Navigation: Easy for visitors to navigate",
        "Integration with Basic Booking System: Simple calendar or form",
      ],
    },
    {
      name: "Professional",
      price: 128.79,
      validityMonths: 48,
      onboardingFee: 120,
      features: [
        "Custom Design: Fully tailored to your brand and business",
        "Mobile Optimization: Advanced responsiveness",
        "Advanced SEO Setup: Keyword optimization and metadata",
        "Improved Site Performance and Speed",
        "Organized Content Restructuring",
        "Basic Security Updates",
        "Booking System Integration",
      ],
    },
    {
      name: "Enterprise",
      price: 198.99,
      validityMonths: 48,
      onboardingFee: 0,
      features: [
        "Custom Design & Branding: Fully customized to your branding",
        "Full SEO Optimization: Includes Local SEO and keyword research",
        "Advanced Site Performance Improvements",
        "Flawless Mobile Responsiveness",
        "Full-scale Security Updates",
        "Web Accessibility Enhancements",
        "Regular Maintenance & Post-launch Support",
        "Advanced Booking Systems: Notifications & reminders",
      ],
    },
  ];

  // useEffect(() => {
  //   const fetchReceiptDetails = async () => {
  //     try {
  //       const response = await fetch(`http://localhost:8050/success/stripe/${sessionId}`);
  //       if (!response.ok) {
  //         throw new Error("Failed to fetch receipt details");
  //       }

  //       const sessionData = await response.json();

  //       if (!sessionData.questionnaireId) {
  //         throw new Error("Questionnaire ID is missing in session data.");
  //       }

  //       const questionnaireId = sessionData.questionnaireId;

  //       const questionnaireResponse = await fetch(
  //         `http://localhost:8050/questionnaire/${questionnaireId}`
  //       );

  //       if (!questionnaireResponse.ok) {
  //         throw new Error("Failed to fetch questionnaire data");
  //       }

  //       const questionnaireData = await questionnaireResponse.json();

  //       const selectedPlan = pricingPlans.find((plan) => plan.name === questionnaireData.suggestedPackage.name);

  //       if (!selectedPlan) {
  //         throw new Error("Selected plan not found in pricing plans");
  //       }

  //       const totalPaid = sessionData.amountTotal; // First installment + onboarding fee
  //       const monthlyPayment = selectedPlan.price; // Monthly installment
  //       const balanceDue = (selectedPlan.validityMonths - 1) * monthlyPayment;

  //       setReceiptDetails({
  //         companyName: "Tail Wagging Websites Design Factory Northampton ",
  //         location: "London, UK",
  //         phone: "+44 07 40234 2694",
  //         website: "www.tailwaggingwebdesign.com",
  //         orderId: questionnaireId, // Display Questionnaire ID as Order ID
  //         orderDate: new Date(sessionData.created * 1000).toLocaleString(),
  //         plan: selectedPlan,
  //         totalPaid: totalPaid.toFixed(2),
  //         balanceDue: balanceDue.toFixed(2),
  //         paymentMethod: sessionData.payment_method_details?.card?.brand || "Unknown",
  //         remainingMonths: selectedPlan.validityMonths - 1,
  //       });
  //     } catch (err) {
  //       setError(err.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchReceiptDetails();
  // }, [sessionId]);
useEffect(() => {
    const fetchReceiptDetails = async () => {
      try {
        const response = await fetch(`http://localhost:8050/success/stripe/${sessionId}`);
        if (!response.ok) {
          throw new Error("Failed to fetch receipt details");
        }

        const sessionData = await response.json();

        if (!sessionData.questionnaireId) {
          throw new Error("Questionnaire ID is missing in session data.");
        }

        const questionnaireResponse = await fetch(
          `http://localhost:8050/questionnaire/${sessionData.questionnaireId}`
        );

        // if (!questionnaireResponse.ok) {
        //   throw new Error("Failed to fetch questionnaire data");
        // }

        const questionnaireData = await questionnaireResponse.json();
        const selectedPlan = pricingPlans.find((plan) => plan.name === questionnaireData.suggestedPackage.name);

        if (!selectedPlan) {
          throw new Error("Selected plan not found in pricing plans");
        }

        const totalPaid = sessionData.amountTotal;
        const monthlyPayment = selectedPlan.price;
        const balanceDue = (selectedPlan.validityMonths - 1) * monthlyPayment;

        setReceiptDetails({
          companyName: "The Tail-Wagging Websites Design Factory Northampton",
          location: "London, UK",
          phone: "+44 07 40234 2694",
          website: "www.tailwaggingwebdesign.com",
          orderId: sessionData.questionnaireId,
          orderDate: new Date(sessionData.created * 1000).toLocaleString(),
          plan: selectedPlan,
          totalPaid: totalPaid.toFixed(2),
          balanceDue: balanceDue.toFixed(2),
          paymentMethod: sessionData.payment_method_details?.card?.brand || "Unknown",
          remainingMonths: JSON.stringify(selectedPlan.validityMonths - 1),
        });
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchReceiptDetails();
  }, [sessionId]);
  const generatePdfReceipt = () => {
    if (!receiptDetails) return;

    const doc = new jsPDF();
    doc.setFont("helvetica");

    // Add Logo
    const logoUrl = "/images/Tailwaggingwebdesignlogo.png"; // Replace with your logo URL
    doc.addImage(logoUrl, "PNG", 10, 10, 50, 20);

    // Title
    doc.setFontSize(18);
    doc.text("Receipt", 105, 40, { align: "center" });

    // Details
    doc.setFontSize(12);
    doc.text(`Order ID: ${receiptDetails.orderId}`, 20, 60);
    doc.text(`Order Date: ${receiptDetails.orderDate}`, 20, 70);
    doc.text(`Payment Method: ${receiptDetails.paymentMethod}`, 20, 80);

    // Table
    let y = 90;
    doc.setFontSize(10);
    doc.text("Description", 20, y);
    doc.text("Amount (£)", 180, y, { align: "right" });

    
    y += 10;
    doc.text("Plan: " + receiptDetails.plan.name, 20, y);
    doc.text(receiptDetails.plan.price.toFixed(2), 180, y, { align: "right" });

    y += 10;
    doc.text("Onboarding Fee", 20, y);
    doc.text(receiptDetails.plan.onboardingFee.toFixed(2), 180, y, { align: "right" });

    y += 10;
    doc.text("Features Included", 20, y);

    receiptDetails.plan.features.forEach((feature) => {
      y += 10;
      doc.text(feature, 20, y);
      doc.text("Included", 180, y, { align: "right" });
    });


   
    y += 10;
    doc.text("Total Paid", 20, y);
    doc.text(receiptDetails.totalPaid, 180, y, { align: "right" });

    y += 10;
    doc.text("Balance Due", 20, y, { style: "bold", color: "red" });
    doc.text(receiptDetails.balanceDue, 180, y, { align: "right" });
      console.log("Balance Due: ", receiptDetails.balanceDue)
      console.log("Monthly Installment Due:", receiptDetails.remainingMonths)
    y += 10;
    doc.text("Monthly Installments Due", 20, y, { style: "bold", color: "red" });
    doc.text(receiptDetails.remainingMonths.toString(), 180, y, { align: "right" });
    console.log("Monthly Installment Due:", receiptDetails.remainingMonths)
    // Footer
    y += 20;
    doc.setFontSize(12);
    doc.text("Thank you for choosing Tail Wagging Web Designs!", 105, y, { align: "center" });

    // Save PDF
    doc.save(`Receipt_${receiptDetails.orderId}.pdf`);
  };



  if (loading) {
    return <p className="min-h-[calc(80vh-64px)] text-5xl font-fold text-center mx-auto">Loading...</p>;
  }

  if (error) {
    return <p className="min-h-[calc(100vh-64px)] text-5xl justify-center font-fold text-center mx-auto">Error: {error}</p>;
  }

  return (
    <div className="max-w-7xl mx-auto bg-yellow-100 p-6 rounded-lg shadow-lg border border-gray-300">
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-lg font-bold text-gray-800">{receiptDetails.companyName}</h1>
        <p className="text-sm text-gray-600">{receiptDetails.location}</p>
        <p className="text-sm text-gray-600">{receiptDetails.phone}</p>
        <p className="text-sm text-gray-600">
          <a href={`https://${receiptDetails.website}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            {receiptDetails.website}
          </a>
        </p>
      </div>

      {/* Receipt Details */}
      <div className="bg-white p-4 rounded shadow-md border border-gray-200">
        <h2 className="text-md font-semibold text-gray-800 mb-4">Receipt</h2>
        <div className="mb-2">
          <p className="text-sm text-gray-600">Order ID: {receiptDetails.orderId}</p>
          <p className="text-sm text-gray-600">Order Date: {receiptDetails.orderDate}</p>
          <p className="text-sm text-gray-600">Payment Method: {receiptDetails.paymentMethod}</p>
        </div>
        <table className="w-full text-sm text-left text-gray-600">
          <thead>
            <tr>
              <th className="border-b py-1">Description</th>
              <th className="border-b py-1 text-right">Amount (£)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-1 font-medium">Plan: {receiptDetails.plan.name}</td>
              <td className="py-1 text-right">{receiptDetails.plan.price.toFixed(2)}</td>
            </tr>
            <tr>
              <td className="py-1">Onboarding Fee</td>
              <td className="py-1 text-right">{receiptDetails.plan.onboardingFee.toFixed(2)}</td>
            </tr>
            {receiptDetails.plan.features.map((feature, index) => (
              <tr key={index}>
                <td className="py-1">{feature}</td>
                <td className="py-1 text-right">Included</td>
              </tr>
            ))}
            <tr>
              <td className="font-bold py-1">Total Paid</td>
              <td className="font-bold py-1 text-right">{receiptDetails.totalPaid}</td>
            </tr>
            <tr>
              <td className="font-bold py-1 text-red-600">Balance Due</td>
              <td className="font-bold py-1 text-right text-red-600">{receiptDetails.balanceDue}</td>
            </tr>
            <tr>
              <td className="font-bold py-1 text-red-600">Monthly Installments Due</td>
              <td className="font-bold py-1 text-right text-red-600">{receiptDetails.remainingMonths}</td>
            </tr>
            <tr>
              {/* CTA and Generate PDF */}
       
            </tr>
          </tbody>
        </table>
         <button
          onClick={generatePdfReceipt}
          className=" bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold py-2 px-4 xs:px-6 sm:py-3 sm:px-8 text-sm xs:text-base sm:text-lg rounded-full transition duration-300 mb-4 mt-8"
        >
          Download PDF Receipt
        </button>
      </div>

      
       <div className="max-w-7xl mx-auto bg-yellow-50 p-6 mt-8  rounded-lg shadow-lg border border-gray-300">
      {/* Receipt Details */}
      

      {/* What Happens Next Section */}
      <div className="bg-yellow-100 p-6 rounded-lg shadow-lg mb-12 mt-8">
        <h3 className="text-xl xs:text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
          What Happens Next?
        </h3>
        <p className="text-sm xs:text-md sm:text-lg text-gray-800 mb-4">
          Here's what to expect:
        </p>
        <ol className="list-decimal list-inside text-sm xs:text-md sm:text-lg text-gray-800">
          <li className="mb-2">We'll contact you within 24 hours to schedule a consultation.</li>
          <li className="mb-2">You'll receive a detailed onboarding guide to get started.</li>
          <li className="mb-2">Our team will begin working on your personalized website design.</li>
        </ol>

        {/* Call to Action Buttons */}
      
      </div>


      

      {/* Call to Action Buttons */}
      {/* <div className="flex flex-col xs:flex-row justify-center items-center space-y-4 xs:space-y-0 xs:space-x-4 mt-6">
        <Link to="/schedule-consultation" className="w-full xs:w-auto">
          <button className="w-full bg-yellow-700 hover:bg-yellow-800 text-white font-bold py-3 px-6 rounded-full transition duration-300">
            Schedule Your Consultation
          </button>
        </Link>
        <Link to="/portfolio" className="w-full xs:w-auto">
          <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold py-3 px-6 rounded-full transition duration-300">
            Explore Our Portfolio
          </button>
        </Link>
      </div> */}
      {/* Call to Action Buttons */}
      <div className="flex flex-col xs:flex-row justify-center items-center space-y-4 xs:space-y-0 xs:space-x-4 mt-6">
        <button
          onClick={() => setShowScheduler(true)} // Open the Calendly modal
          className=" bg-yellow-700 hover:bg-yellow-800 text-white font-bold py-3 px-6 rounded-full transition duration-300"
        >
          Schedule Your Consultation
        </button>
        <Link to="/portfolio" className="w-full xs:w-auto">
          <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold py-3 px-6 rounded-full transition duration-300">
            Explore Our Portfolio
          </button>
        </Link>
      </div>

      {/* Calendly Modal */}
      {showScheduler && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full relative">
            <button
              onClick={() => setShowScheduler(false)} // Close the Calendly modal
              className=" text-gray-500 hover:text-gray-800 w-3/5 text-2xl font-bold"
            >
              &times;
            </button>
            <InlineWidget url="https://calendly.com/ayobami-haastrup/consultation" />
          </div>
        </div>
      )}
    </div>

      {/* Footer */}
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-500">Thank you for choosing {receiptDetails.companyName}!</p>
      </div>
    </div>




  );
};

export default SuccessReceipt;

