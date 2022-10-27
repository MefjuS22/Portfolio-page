import styled from "styled-components";
import { motion } from "framer-motion";

interface Props {
  start?: boolean;
  inverse?: boolean;
  error?: boolean;
}

export const FormSection = styled.div<Props>`
  padding: 160px 0;
  background: #006494;

  @media screen and (min-height: 1000px) {
    height: 100vh;
  }
`;

export const FormTitle = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
`;

export const FormContainer = styled.div`
  display: flex;
`;
export const FormColumn = styled.div`
  padding: 50px;
  background: white;
  border: 20px;
  flex: 1;
  max-width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    max-width: 100% !important;
    flex-basis: 100%;
  }

  img {
    @media screen and (max-width: 768px) {
      display: none;
    }
  }
`;

export const FormRow = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
`;

export const FormWrapper = styled.form`
  padding-top: 0;
  width: 100%;
`;

export const FormMessage = styled(motion.div)<Props>`
  color: ${({ error }) => (error ? "red" : "green")};
  padding: 5px;
  text-align: center;
  margin-top: 1rem;
`;

export const FormInputRow = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: stretch;
  margin-bottom: 1.4rem;

  > p {
    font-size: 0.8rem;
    margin-top: 0.5rem;
    color: #f00e0e;
  }
`;
export const FormInput = styled.input`
  display: block;
  padding-left: 10px;
  outline: none;
  border-radius: 2px;
  height: 40px;
  width: 100%;
  border: none;
  border-bottom: 1px solid #cfcfcf;
  font-size: 1rem;
`;
export const FormTextArea = styled.textarea`
  display: block;
  padding-left: 10px;
  outline: none;
  border-radius: 2px;
  height: 200px;
  width: 100%;
  border: none;
  border-bottom: 1px solid #cfcfcf;
  font-size: 1rem;
  resize: none;
`;
export const FormLabel = styled.label`
  display: inline-block;
  font-size: 0.9rem;
  margin-bottom: 0.3rem;
  color: #afafaf;
`;
export const FormImgWrapper = styled.div<Props>`
  max-width: 555px;
  display: flex;
  justify-content: ${({ start }) => (start ? "flex-start" : "flex-end")};
`;
export const FormImg = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;
`;

export const FormButton = styled(motion.button)`
  height: 4rem;
  border-radius: 4px;
  background: none;
  margin-top: 1.5rem;
  white-space: nowrap;
  color: #003554;
  outline: none;
  width: 100%;
  font-size: 1.4rem;
  font-weight: 700;
  padding: 10px 20px;
  border: 2px solid #003554;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &:before {
    background: #003554;
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    transition: all 0.6s ease;
    width: 100%;
    height: 0%;
    transform: translate(-50%, -50%) rotate(45deg);
  }

  &:hover:before {
    height: 500%;
  }

  &:hover {
    color: white;
    transition: background-color 0.4s ease-in;
    background-color: #003554;
  }
`;
