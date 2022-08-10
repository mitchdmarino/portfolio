import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {
  const [state, handleSubmit] = useForm("xjvzvgje");
  if (state.succeeded) {
    return (
      <p>Thanks reaching out! I will get back to you within 2 business days.</p>
    );
  }
  return (
    <div className="container mt-20 mx-auto  text-black">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name" className="">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your name.."
          required
          // onChange={e => setName(e.target.value)}
        />
        <br></br>
        <label htmlFor="email" className="">
          email
        </label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="Your email ..."
          required
          // onChange={e => setEmail(e.target.value)}
        />
        <br></br>
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Say Hello!"
          // onChange={e => setMessage(e.target.value)}
          required
        ></textarea>
        <br></br>
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <input
          type="submit"
          //   onClick={e => handleSubmit(e)}
          value="Submit"
        />
      </form>
    </div>
  );
}
