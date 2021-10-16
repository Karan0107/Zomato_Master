import React from "react";
//component
//import DeliveryFoodCategory from "./DeliveryFoodCategory";

import { CarousalBurger, CarousalMomos, CarousalPizza } from "./DeliveryFoodCategory";

/*<DeliveryFoodCategory />
<DeliveryFoodCategory />
<DeliveryFoodCategory />*/
const DeliveryCarousal = () => {
  return (
    <>
    <h1 className="text-xl font-bold pt-24 mt-10 pb-8 text-center text-zomato-500">Eat what makes you happy!</h1>
    <div className="flex flex-wrap justify-between gap-3" >
      <CarousalBurger />
      <CarousalMomos />
      <CarousalPizza />
    </div>
    </>
  );
};

export default DeliveryCarousal;
