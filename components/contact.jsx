import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import Image from "next/image";

export default function Contact() {
  const [state, handleSubmit] = useForm("xjvzvgje");
  if (state.succeeded) {
    return (
      <p>Thanks reaching out! I will get back to you within 2 business days.</p>
    );
  }
  return (
    <section id="contact" className="bg-[#DFE0DC] p-10 text-black">
          <h1 className=" pb-5 text-5xl text-center">CONTACT</h1>
          <div className="flex mx-auto w-3/4 justify-center">
            <a
              className=""
              href="https://www.linkedin.com/in/mitchellmarino/"
              target="_blank"
              rel="noreferrer"
            >
              <div
                className="mx-20 bg-[#F3FCF0] hover:scale-125 rounded-full "
                style={{ width: 100, height: 55, position: "relative" }}
              >
                <Image
                  src={"/linkedin.png"}
                  alt={`linkedin logo`}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </a>
            <a
              className="hover:scale-125 mt-5 text-2xl"
              href="mailto:mitchdmarino@gmail.com"
            >
              mitchdmarino@gmail.com
            </a>
            <a
              className=""
              href="https://github.com/mitchdmarino"
              target="_blank"
              rel="noreferrer"
            >
              <div
                className="mx-20 bg-[#F3FCF0] hover:scale-125 rounded-full"
                style={{ width: 100, height: 55, position: "relative" }}
              >
                <Image
                  src={"/github.png"}
                  alt={`github logo`}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </a>
          </div>
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
    </section>
  );
}
