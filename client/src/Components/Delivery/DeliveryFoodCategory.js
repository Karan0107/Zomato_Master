import React from "react";

export function CarousalBurger(){
  return (<>
  <div className="bg-zomato-100 rounded-md shadow">
    <div className='w-40 h-40'>
      <img
        src="https://b.zmtcdn.com/data/o2_assets/dff007e05e2f72a4abc0772c7a8cd0951632716697.png"
        alt="Burger"
        className="w-full w-full p-2"
      />
    </div>

    <div className="pb-4">
      <h3 className="my-4 text-base font-large font-bold mx-4 text-center mb-6">Burger</h3>
      <div className="mx-1 flex justify-between md:justify-evenly" >
      <p> Rs 65 </p>
      <p className="bg-zomato-500 text-white px-2 rounded-md"> 10% off </p>
      </div>
    </div>
  </div>
  </>)
}

export function CarousalMomos(){
  return (<>
  <div className="bg-zomato-100 rounded-md shadow">
    <div className='w-40 h-40'>
      <img
        src="https://b.zmtcdn.com/data/pictures/2/19706442/ef65ee1777385af3eac957622f34fdeb_o2_featured_v2.jpg?output-format=webp"
        alt="Burger"
        className="w-full w-full p-2"
      />
    </div>

    <div className="pb-4">
      <h3 className="my-4 text-base font-large font-bold mx-4 text-center mb-6">Greedy MoMos</h3>
      <div className="mx-1 flex justify-between md:justify-evenly" >
      <p> Rs 88 </p>
      <p className="bg-zomato-500 text-white px-2 rounded-md"> 8 in rate of 4 </p>
      </div>
    </div>
  </div>
  </>)
}

export function CarousalPizza(){
  return (<>
  <div className="bg-zomato-100 rounded-md shadow">
    <div className='w-40 h-40'>
      <img
        src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-homemade-pizza-horizontal-1542312378.png?crop=1.00xw:1.00xh;0,0&resize=480:*"
        alt="Pizza"
        className="w-full w-full p-2"
      />
    </div>

    <div className="pb-4">
      <h3 className="my-4 text-base font-large font-bold mx-4 text-center mb-6">Burger</h3>
      <div className="mx-1 flex justify-between md:justify-evenly" >
      <p> Rs 65 </p>
      <p className="bg-zomato-500 text-white px-2 rounded-md"> BestSeller </p>
      </div>
    </div>
  </div>
  </>)
}

/*const DeliveryFoodCategory = () => {
  return (
    <>
      <carousalBurger />
    </>
  );
};

export default DeliveryFoodCategory;*/
