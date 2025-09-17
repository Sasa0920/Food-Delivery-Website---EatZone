import React from 'react'
import hero from '../../assets/hero.jpg'
import chef from '../../assets/chef.jpg'
import { FiClock, FiPhone, FiStar, FiCalendar } from 'react-icons/fi';
import Footer from '../Footer/Footer';


const Banner = () => {
    
    return (
    <>
    <section  className="relative w-full h-screen bg-brown-800">
      <img src={hero} alt='Banner' className="w-full h-screen object-cover" />
      <div className="absolute top-0 left-25 w-full h-full bg-black/50 flex flex-col justify-center items-start px-8 md:px-20 text-white space-y-40">
        <h1 className="absolute top-30  text-5xl md:text-6xl font-bold text-yellow-100 font-serif leading-20 mb-12">Hungry?<br />We’re Already<br/> on the Way.</h1>
        <p className="text-xl md:text-2xl font-serif text-yellow-100 mt-60">Delicious Starts with Us<br />From Kitchen to Door in 60 Minutes Flat.</p>   
      </div>
    </section> 
      <section className=" h-200 w-full mx-auto px-10 py-40 bg-gradient-to-b from-black to-[#D4B7B7] text-white font-serif">
       <p className=" text-center italic mb-30 text-lg max-w-full mx-auto ">
        "In Our Kitchen, Flavor Is An Art And Every Dish Tells A <br/> Story – One That Stays With You Long After The Last Bite."
       </p>
      <div className=" mb-30 flex justify-center flex flex-col md:flex-row items-center md:items-start gap-70 ">
        
        <img
          src={chef}
          alt="Chef"
          className="w-70 h-90 object-cover border-3 border-yellow-300 ml-10"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-40 text-center sm:text-left max-w-full">
          <FeatureItem icon={<FiPhone size={28} className="mx-auto sm:mx-0 text-yellow-400" />} title="Instant Ordering" desc="Seamless Digital Experience" />
          <FeatureItem icon={<FiClock size={28} className="mx-auto sm:mx-0 text-red-500" />} title="Always Open" desc="Always Open" />
          <FeatureItem icon={<FiCalendar size={28} className="mx-auto sm:mx-0 text-green-400" />} title="Exclusive Booking" desc="Priority Reservations" />
          <FeatureItem icon={<FiStar size={28} className="mx-auto sm:mx-0 text-sky-400" />} title="Signature Dishes" desc="Chef's Special Creations" />
        </div>
      </div>
      </section>
      </>

       
    )
  }
 

const FeatureItem = ({ icon, title, desc }) => (
  <div>
    <div className="mb-2">{icon}</div>
    <h3 className="font-bold text-xl">{title}</h3>
    <p className="text-sm">{desc}</p>
  </div>
);

  


export default Banner;