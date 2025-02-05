const CheckoutButton = ({ planName, planPrice, onboardingFee, questionnaireId }) => {
  const handleCheckout = async () => {
    try {
      console.log("Checkout Details:", {
        planName,
        planPrice,
        onboardingFee,
        questionnaireId,
      });

      const response = await fetch("https://petportfoliositecampaignbackend.onrender.com/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          planName,
          planPrice: parseFloat(planPrice), // Ensure numeric value
          onboardingFee: parseFloat(onboardingFee), // Ensure numeric value
          questionnaireId,
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
      window.location.href = url;
    } catch (err) {
      console.error("Error during checkout:", err);
      alert("An unexpected error occurred. Please try again.");
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

export default CheckoutButton;
