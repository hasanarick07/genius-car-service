import React from "react";
import { useParams } from "react-router-dom";

const ServiceDetails = () => {
  const { serviceDetails } = useParams();
  return <div>helli : {serviceDetails}</div>;
};

export default ServiceDetails;
