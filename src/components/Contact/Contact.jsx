import React from "react";
import { ContactContent, ContactTitle, ContactEmail } from "./styles";
const Contact = ({ title, email }) => {
  return (
    <ContactContent id="contact">
      <ContactTitle>{title}</ContactTitle>
      <ContactEmail>{email}</ContactEmail>
    </ContactContent>
  );
};

export default Contact;
