import { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import RecentWork from "../RecentWork/RecentWork";
import Service from "../Service/Service";

const Home = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <Banner></Banner>
      <h1 className="text-center mt-10 font- text-3xl lg:text-5xl">Services</h1>
      <div className=" container mx-auto grid grid-cols-1 lg:grid-cols-3 lg:mt-10 mb-10 mr-20">
        {services.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
      <RecentWork></RecentWork>
    </div>
  );
};

export default Home;
