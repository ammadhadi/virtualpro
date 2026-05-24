import React, { useRef, useState } from "react";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { MdFacebook, MdOutlineLocationOn } from "react-icons/md";
import Image from "next/image";
import emailjs from "emailjs-com";
import Button from "@/components/ui/button";
import { PiFacebookLogo, PiInstagramLogo, PiGlobeBold } from "react-icons/pi";
import Link from "next/link";

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm(
        "service_f45gqry",
        "template_t2xjlnj",
        formRef.current as HTMLFormElement,
        "IOmcwSsFE3mJ4gTsb" // Public API Key
      )
      .then((result) => {
        console.log(result.text);
        alert("Message sent successfully!");

        if (formRef.current) {
          formRef.current.reset();
        }
      })
      .catch((error) => {
        console.log(error.text);
        alert("Failed to send message. Please try again later.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <main
      className="bg-[--company-background-color] h-full w-full flex justify-center items-center md:py-28 lg:py-5 p-6 md:px-10"
      id="contact"
    >
      <section className="flex flex-col md:flex-row justify-center items-start w-full">
        <article
          className="hidden h-auto w-full md:w-1/3 lg:w-1/4 rounded-lg md:flex flex-col justify-between items-start 
          p-6 shadow-lg z-10"
        >
          <h2 className="text-white font-Kanit text-lg md:text-xl font-bold font-poppins mb-4">
            
          </h2>
          <div className="flex flex-col gap-4 w-full">
            <div className="flex gap-3 items-center">
              <MdOutlineLocationOn
                size={35}
                className="text-white rounded-full p-2 shadow-md"
              />
              <p className="text-white font-Kanit text-sm font-medium">
                Pakistan
              </p>
            </div>
            <div className="flex gap-3 items-center">
              <AiOutlineMail
                size={35}
                className="text-white rounded-full p-2 shadow-md"
              />
              <p className=" text-white font-Kanit text-sm font-medium">
                virtualpropvtltd@hotmail.com
              </p>
            </div>
            <div className="flex gap-3 items-center">
              <AiOutlinePhone
                size={35}
                className="text-white font-Kanit rounded-full p-2 shadow-md"
              />
              <p className="text-white font-Kanit text-sm font-medium">
                +923132537173
              </p>
            </div>
            <div className="flex gap-3 items-center">
            <Link 
              href={"https://www.facebook.com/VirtualProPvtLtd/" || "#"} 
              target="_blank" 
              rel="noopener noreferrer"
              className="footerSocials"
            >
              <PiFacebookLogo size={35}
                className="text-white font-Kanit rounded-full p-2 shadow-md" />
              <p className="text-white font-Kanit text-sm font-medium">
                VirtualProPvtLtd
              </p>
            </Link>
            </div>
            <div className="flex gap-3 items-center">
            <Link
              href={"https://www.instagram.com/virtualproahe/" || "#"} 
              target="_blank" 
              rel="noopener noreferrer"
              className="footerSocials"
            >
              <PiInstagramLogo size={35}
                className="text-white font-Kanit rounded-full p-2 shadow-md" />
              <p className="text-white font-Kanit text-sm font-medium">
                virtualproahe
              </p>
            </Link>
            </div>
            <div className="flex gap-3 items-center">
            <Link
              href={"https://virtualpros.vercel.app/" || "#"} 
              target="_blank" 
              rel="noopener noreferrer"
              className="footerSocials"
            >
              <PiGlobeBold size={35}
                className="text-white font-Kanit rounded-full p-2 shadow-md" />
              <p className="text-white font-Kanit text-sm font-medium">
                virtualproweb.wordpress.com
              </p>
            </Link>
          </div>
          </div>
          
        </article>
        <article className="h-auto w-full md:w-2/3 lg:w-3/5 max-w-lg rounded-lg p-5 flex flex-col justify-center shadow-lg">
          <div className="ml-0 md:ml-5">
            <h1 className="text-lg md:text-xl mb-2 font-Kanit text-white font-bold">
              Get in Touch
            </h1>

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="flex flex-col gap-4"
            >
              <div className="flex flex-col md:flex-row gap-3">
                <input
                  type="text"
                  placeholder="Name"
                  name="user_name"
                  className="font-Kanit flex-grow w-full p-2 rounded border"
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  name="user_email"
                  className="font-Kanit flex-grow p-2 w-full rounded border"
                  required
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                name="subject"
                className="font-Kanit p-2 rounded border"
                required
              />
              <textarea
                placeholder="Message"
                name="message"
                className="font-Kanit p-2 rounded border h-32 resize-none overflow-hidden"
                required
              />

              <div className="flex w-full">
                <Button
                  text={isLoading ? "Sending..." : "SUBMIT"}
                  color="bg-#9A4DFF text-white font-Kanit max-h-12 border-transparent shadow-md"
                  hover="hover:bg-[--company-color]"
                  isDisabled={isLoading}
                />
              </div>
            </form>
          </div>
        </article>
      </section>
    </main>
  );
};

export default Contact;