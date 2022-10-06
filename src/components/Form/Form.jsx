import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  FormColumn,
  FormWrapper,
  FormInput,
  FormSection,
  FormRow,
  FormLabel,
  FormInputRow,
  FormMessage,
  FormButton,
  FormTitle,
  FormTextArea,
} from "./FormStyles";
import { Container } from "../../globalStyles";
import validateForm from "./validateForm";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const resultError = validateForm({ name, email });

    if (resultError !== null) {
      setError(resultError);
      return;
    }
    setName("");
    setEmail("");
    setError("");
    setMessage("");
    setSuccess("Email sent!");
    emailjs
      .sendForm(
        "service_zqiz893",
        "template_ifm07sg",
        form.current,
        "o4lrIIQjk265zfmk_"
      )
      .then((error) => {
        console.log(error.text);
      });
  };

  const messageVariants = {
    hidden: { y: 30, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { delay: 0.2, duration: 0.4 } },
  };

  return (
    <FormSection>
      <Container>
        <FormRow>
          <FormColumn small>
            <FormTitle>Contact</FormTitle>
            <FormWrapper ref={form} onSubmit={handleSubmit}>
              <FormInputRow>
                <FormLabel>Name</FormLabel>
                <FormInput
                  type="text"
                  name="name"
                  placeholder={`Enter your name`}
                  onChange={(e) => setName(e.target.value)}
                />
                <FormLabel>Email</FormLabel>
                <FormInput
                  type="email"
                  name="email"
                  placeholder={`Enter your e-mail adress`}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <FormLabel>Message</FormLabel>
                <FormTextArea
                  name="message"
                  placeholder="Enter your message"
                  onChange={(e) => setMessage(e.target.value)}
                ></FormTextArea>
              </FormInputRow>
              <FormButton type="submit">Send Email</FormButton>
            </FormWrapper>
            {error && (
              <FormMessage
                variants={messageVariants}
                initial="hidden"
                animate="animate"
                error
              >
                {error}
              </FormMessage>
            )}
            {success && (
              <FormMessage
                variants={messageVariants}
                initial="hidden"
                animate="animate"
              >
                {success}
              </FormMessage>
            )}
          </FormColumn>
        </FormRow>
      </Container>
    </FormSection>
  );
};

export default Form;
