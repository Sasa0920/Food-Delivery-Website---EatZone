import React from 'react'
import delivery1 from '../../assets/delivery1.jpg'
import chefs from '../../assets/chefs.jpg'
import quality from '../../assets/quality.jpg'
import chef2 from '../../assets/chef2.jpg'
import chef1 from '../../assets/chef1.jpg'
import chef3 from '../../assets/chef3.jpg'
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi';


const AboutContent = () => {
  return (
     <>
      <section  style={{ backgroundColor: '#5C4747' }} className="w-full h-160 ">
        <p className="text-center text-3xl font-semibold drop-shadow-md text-yellow-200 font-serif py-25 px-6md:text-2xl ]">
          Delivering memorable meals, made <br />with passion.  
        </p>
      </section>
      <section className="absolute py-80 flex flex-wrap justify-center ml-45 gap-30 text-white ">
        {/* Card 1: Instant Delivery */}
        <div className="bg-gradient-to-b from-[#341E1E] to-[#9A5858] p-4 rounded-2xl shadow-lg w-75 text-center border-2 border-[#CE6730]">
          <img src={delivery1}  className="w-full h-50 object-cover mb-4 rounded" />
          <h3 className="text-lg font-semibold">Instant Delivery</h3>
          <p className="text-yellow-400 mt-2">★★★★★</p>
        </div>

        {/* Card 2: Master Chefs */}
        <div  className="bg-gradient-to-b from-[#341E1E] to-[#9A5858] p-4 rounded-lg shadow-lg w-75 text-center border-2 border-[#CE6730]">
          <img src={chefs}  className="w-full h-50 object-cover mb-4 rounded" />
          <h3 className="text-lg font-semibold">Master Chefs</h3>
          <p className="text-yellow-400 mt-2">★★★★★</p>
        </div>

        {/* Card 3: Premium Quality */}
        <div className="bg-gradient-to-b from-[#341E1E] to-[#9A5858] p-4 rounded-lg shadow-lg w-75 text-center border-2 border-[#CE6730]">
          <img src={quality}  className="w-full h-50 object-cover mb-4 rounded" />
          <h3 className="text-lg font-semibold">Premium Quality</h3>
          <p className="text-yellow-400 mt-2">★★★★★</p>
        </div>
      </section>
      <section className="bg-gradient-to-b from-[#5C4747] to-[#D4B7B7] py-12 text-center text-white">
        <h2 className="text-3xl font-bold mb-10 text-yellow-100 font-serif">Meet Our Team</h2>
        <div className="flex justify-center gap-10 flex-wrap px-6">
          {[
            { name: "Marco Jansen", title: "Executive Chef", desc: "3 Michelin stars | Italian cuisine specialist", img: chef1 },
            { name: "Antoine Mathis", title: "Pastry Chef", desc: "World Baking Champion | French desserts expert",  img: chef2},
            { name: "Oliver Henry", title: "Sushi Chef", desc: "5th generation sushi chef | Traditional techniques", img: chef3 },
          ].map((chef, idx) => (
            <div key={idx} className="bg-gradient-to-b from-[#341E1E] to-[#9A5858] rounded-2xl border-3 border-[#CE6730] p-4 w-72 shadow-lg">
              <img src={chef.img}  className="h-70 w-50 object-cover rounded-md mb-7 justify-center ml-6" />
              <h3 className="text-xl font-bold">{chef.name}</h3>
              <p className="italic text-sm text-white">{chef.title}</p>
              <p className="mt-2 text-sm">{chef.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-[#D4B7B7] py-20 text-left">
        <div className="space-y-7 max-w-200  mx-auto  ">
          <div className="bg-[#D4B7B7] bg-opacity-10 p-7 rounded shadow-[inset_7px_7px_20px_rgba(0,0,0,0.6)]  text-xl  ">
            <FeatureItem icon={<FiMapPin size={28} className="mx-auto sm:mx-7  text-black" />} title="Our Headquarter - Colombo"/>
          </div>
          <div className="bg-[#D4B7B7] bg-opacity-10 p-7 rounded shadow-[inset_7px_7px_20px_rgba(0,0,0,0.6)]  text-xl">
            <FeatureItem icon={<FiPhone size={28} className="mx-auto sm:mx-7  text-black" />} title="Contact Number - 0112918808"/>
          </div>
          <div className="bg-[#D4B7B7] bg-opacity-10 p-7 rounded shadow-[inset_7px_7px_20px_rgba(0,0,0,0.6)]  text-xl">
            <FeatureItem icon={<FiMail size={28} className="mx-auto sm:mx-7  text-black" />} title="Email Address - etzone@gmail.com"/>
          </div>
        </div>
      </section>


    </>
  )
}
const FeatureItem = ({ icon, title }) => (
  <div className="flex items-center space-x-4 ml-2">
    <div>{icon}</div>
    <h3 className="font-semibold text-xl">{title}</h3>
  </div>
);



export default AboutContent