import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
  const priceOptions = [
    {
      id: 1,
      name: "Basic Membership",
      price: "$30/month",
      features: [
        "Access to cardio area",
        "Access to weightlifting area",
        "Locker room access",
        "Limited group classes",
      ],
    },
    {
      id: 2,
      name: "Standard Membership",
      price: "$50/month",
      features: [
        "Access to cardio area",
        "Access to weightlifting area",
        "Full access to group classes",
        "Locker room access",
        "Personal training sessions (1/month)",
      ],
    },
    {
      id: 3,
      name: "Premium Membership",
      price: "$80/month",
      features: [
        "Access to cardio area",
        "Access to weightlifting area",
        "Unlimited access to group classes",
        "Locker room access with towel service",
        "Personal training sessions (2/month)",
        "Access to sauna and steam room",
      ],
    },
  ];
  return (
    <div>
      <h1 className="font-bold text-3xl ">Best Price in the town</h1>
      <div className="grid md:grid-cols-3 gap-6 ">
        {priceOptions.map((option) => (
          <PriceOption key={option.id} option={option}></PriceOption>
        ))}
      </div>
    </div>
  );
};

export default PriceOptions;
