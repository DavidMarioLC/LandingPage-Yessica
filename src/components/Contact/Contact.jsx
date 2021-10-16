import React from "react";
import { ContactContent, ContactTitle, ContactEmail } from "./styles";
const Contact = ({ title, email }) => {
  return (
    <ContactContent>
      <ContactTitle>{title}</ContactTitle>
      <ContactEmail>{email}</ContactEmail>
    </ContactContent>
  );
};

export default Contact;
