import React, { useEffect, useState } from 'react';
import { getMeals, addToCart } from '../../services/mealService.js';


export default function MenuPage() {
  const [category, setCategory] = useState('BREKFAST');
  const [meals, setMeals] = useState([]);

   useEffect(() => {
    getMeals(category)
      .then(data => {
        console.log("Fetched meals:", data); 
        setMeals(data);
      })
      .catch(console.error);
  }, [category]);

  return (
    <section className='bg-[#281515]'>
      <h2 className="italic text-3xl text-center font-semibold text-[#DBA825] [text-shadow:_2px_2px_0_[#CE6730],_0px_0px_0_[#CE6730]] mt-15">
        Culinary Delights
      </h2>
      <p className="text-2xl text-center text-white mt-10">Taste in Tune</p>

      <div className="justify-center gap-15 text-xl flex space-x-4 mb-20 mt-20">
        {['BREKFAST', 'LUNCH', 'DINNER', 'DESSERTS', 'DRINKS'].map(cat => (
          <button
            key={cat}
            className={`px-15 py-2 rounded-full ${category === cat
              ? 'bg-gradient-to-r from-[#CE6730] to-[#683418] text-white'
              : 'bg-gradient-to-r from-[#FFE8AC] to-[#683418]'
              }`}
            onClick={() => setCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mr-60">
        {meals.map(meal => (
          <div
            key={meal._id}
            className="mb-20 ml-45 border-2 border-[#CE6730] rounded-3xl shadow bg-gradient-to-b from-[#42291B] to-[#9F7272] w-70 h-120"
          >
            <img src={meal.image} alt={meal.name} className="ml-10 mt-10 w-50 h-42" />
            <h3 className="text-xl font-semibold mt-3 text-center text-white">{meal.name}</h3>
            <p className="text-white mt-4 text-center">{meal.description}</p>
            <p className="mt-9 font-semibold text-center text-black bg-[#D1B7B7] rounded-lg w-25 ml-20">
              Rs.{meal.price}
            </p>
            <button
              onClick={() =>
                addToCart(meal._id)
                  .then(data => console.log("Added to cart:", data))
                  .catch(console.error)
              }
              className="mt-9 font-bold text-center text-black bg-[#D1B7B7] rounded-lg w-35 ml-15 shadow-md hover:scale-105 transition"
            >
              Add To Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
