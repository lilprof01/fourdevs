import Form from "./Form";
import { useOutletContext } from "react-router-dom";
// import React from 'react'

interface LayoutContext {
  setOpenNav: React.Dispatch<React.SetStateAction<boolean>>;
}

const Contact = () => {
  const { setOpenNav } = useOutletContext<LayoutContext>();

  return (
    <div onClick={() => setOpenNav(false)}>
      <Form />
    </div>
  );
};

export default Contact;
