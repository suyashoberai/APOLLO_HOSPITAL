import React from "react";
import Hero from "../components/Hero";
import AppointmentForm from "../components/AppointmentForm";

const Appointment = () => {
  return (
    <>
      <Hero
        title={"Schedule Your Appointment | Apollo Hospital"}
        imageUrl={"/signupheader.png"}
      />
      <AppointmentForm />
    </>
  );
};

export default Appointment;
