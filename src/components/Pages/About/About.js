import React from "react";

const About = () => {
  return (
    <div className="flex justify-center mt-10 mb-10 text-center">
      <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img
            className="rounded-t-lg"
            src="https://i.postimg.cc/NGbcvYcw/20200809-040719.jpg"
            alt=""
          />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Abdullah Al Safayet
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            My goal is simple I want to be a good Web Developer in future. I
            really interested in react library. After the course i will be work
            on it and deep into it. Lastly i want to say i will grow more passion, dedication, hark working ability and do more practice to achieve my goals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
