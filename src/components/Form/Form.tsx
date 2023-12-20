import { useState, useRef, type FormEvent } from "react";
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
  const form = useRef(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const resultError = validateForm({ name, email });

    if (!form.current){
      return 
    }

    if (resultError !== null) {
      setError(resultError);
      return;
    }

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
      setName("");
      setEmail("");
      setError("");
      setMessage("");
      setSuccess("Email sent!");
  };

  const messageVariants = {
    hidden: { y: 30, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { delay: 0.2, duration: 0.4 } },
  };

  const errorMessage = error && (
    <FormMessage
      variants={messageVariants}
      initial="hidden"
      animate="animate"
      error
    >
      {error}
    </FormMessage>
  )
  const successMessage = success && (
    <FormMessage
      variants={messageVariants}
      initial="hidden"
      animate="animate"
    >
      {success}
    </FormMessage>
  )

  return (
    <FormSection>
      <Container>
        <FormRow>
          <FormColumn>
            <FormTitle>Contact</FormTitle>
            <FormWrapper ref={form} onSubmit={handleSubmit}>
              <FormInputRow>
                <FormLabel>Name</FormLabel>
                <FormInput
                  type="text"
                  name="name"
                  placeholder={`Enter your name`}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <FormLabel>Email</FormLabel>
                <FormInput
                  type="email"
                  name="email"
                  value={email}
                  placeholder={`Enter your e-mail adress`}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <FormLabel>Message</FormLabel>
                <FormTextArea
                  name="message"
                  value={message}
                  placeholder="Enter your message"
                  onChange={(e) => setMessage(e.target.value)}
                ></FormTextArea>
              </FormInputRow>
              <FormButton type="submit">Send Email</FormButton>
            </FormWrapper>
            {errorMessage}
            {successMessage}
          </FormColumn>
        </FormRow>
      </Container>
    </FormSection>
  );
};

export default Form;
