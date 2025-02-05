import React from "react";

const BuyPlanButton = ({ planName, planPrice, onboardingFee }) => {
  const handleCheckout = async () => {
    console.log("Checkout Details:", { planName, planPrice, onboardingFee });

    try {
      const response = await fetch("http://localhost:8050/create-buy-plan-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          planName,
          planPrice: parseFloat(planPrice), // Ensure numeric value
          onboardingFee: parseFloat(onboardingFee), // Ensure numeric value
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Server Error Response:", errorText);
        alert("Failed to initiate checkout. Please try again.");
        return;
      }

      const { url } = await response.json();
      console.log("Redirecting to:", url);
      window.location.href = url; // Redirect to Stripe Checkout
    } catch (error) {
      console.error("Checkout error:", error.message || error);
      alert("An error occurred during checkout. Please try again.");
    }
  };

  return (
    <button
      onClick={handleCheckout}
      className="w-full py-2 rounded-lg font-medium bg-yellow-300 hover:bg-yellow-400 text-black transition"
    >
      Pay Now
    </button>
  );
};

export default BuyPlanButton;
