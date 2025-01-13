import React from "react";
import OrgChart from "../../components/OrgChart";

const About: React.FC = () => {
  return (
    <div className="container mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold text-center mb-4">About Us</h1>
      <p className="text-center text-lg text-gray-600">
        Learn more about our team and the structure of our organization.
      </p>
      <OrgChart />
    </div>
  );
};

export default About;
