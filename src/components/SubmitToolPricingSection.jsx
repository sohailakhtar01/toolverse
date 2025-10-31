import { useState } from "react";

const SubmitToolPricingSection = () => {
  const [toolPricingModel, setToolPricingModel] = useState("");
  const [selectedPlan, setSelectedPlan] = useState("");
  const [hoveredPlan, setHoveredPlan] = useState(null);

  const toolPricingOptions = [
    "Free",
    "Freemium",
    "Paid",
    "Subscription",
    "One-time Purchase",
  ];

  const toolsversePlans = [
    {
      name: "Free",
      price: "₹0/month",
      description: "Basic listing with limited visibility on The Toolsverse.",
    },
    {
      name: "Starter",
      price: "₹499/month",
      description: "Better reach and appearance in recommended tools.",
    },
    {
      name: "Pro",
      price: "₹999/month",
      description: "Priority listing, verified badge, and analytics access.",
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large teams with full promotional support.",
    },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto space-y-10 mt-10">
      {/* 1️⃣ Pricing model of your tool */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">
          Pricing model of your tool
        </h2>
        <p className="text-gray-600 mb-4">
          Choose how your tool is priced for users.
        </p>

        <select
          value={toolPricingModel}
          onChange={(e) => setToolPricingModel(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-600 focus:outline-none"
        >
          <option value="">Select pricing model</option>
          {toolPricingOptions.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </div>

      {/* 2️⃣ Select The Toolsverse plan */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">
          Select the pricing model of The Toolsverse
        </h2>
        <p className="text-gray-600 mb-6">
          List your tool at your preferred plan below.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {toolsversePlans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-white border rounded-2xl shadow-sm p-5 text-center transition-all cursor-pointer ${
                selectedPlan === plan.name
                  ? "border-blue-600 ring-2 ring-blue-100"
                  : "hover:border-blue-600"
              }`}
              onClick={() => setSelectedPlan(plan.name)}
              onMouseEnter={() => setHoveredPlan(plan.name)}
              onMouseLeave={() => setHoveredPlan(null)}
            >
              <h3 className="text-lg font-semibold text-gray-900">
                {plan.name}
              </h3>
              <p className="text-gray-500">{plan.price}</p>

              {hoveredPlan === plan.name && (
                <div className="absolute bottom-[-70px] left-1/2 -translate-x-1/2 w-56 bg-gray-900 text-white text-sm rounded-lg p-3 shadow-lg z-10">
                  {plan.description}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubmitToolPricingSection;
