import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaLinkedin, FaBlogger, FaTwitter, FaGithub } from "react-icons/fa";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const socialLinks = [
  { href: "https://www.linkedin.com/in/ananyahegde-", icon: <FaLinkedin />, label: "LinkedIn" },
  { href: "https://ananyamca.blogspot.com", icon: <FaBlogger />, label: "Blog" },
  { href: "https://x.com/HegdeAnany49037", icon: <FaTwitter />, label: "Twitter" },
  { href: "https://github.com/Ananya-Hegde2001", icon: <FaGithub />, label: "GitHub" },
  {
    href: "https://drive.google.com/file/d/18kau8gC-E-rkYXpl6aAymiYD-wbSxqGO/view?usp=sharing",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-5 h-5"
      >
        <path d="M6 2C4.89 2 4 2.89 4 4v16c0 1.1.89 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6H6zm7 1.5L18.5 9H13V3.5zM6 20V4h6v5h5v11H6zm3-9h6v2H9v-2zm0 4h6v2H9v-2z" />
      </svg>
    ),
    label: "Resume",
  },
];

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_bsz2qjj",
        "template_4wzvet5",
        {
          from_name: form.name,
          to_name: "Ananya V Hegde",
          from_email: form.email,
          to_email: "ananyavhegde2001@gmail.com",
          message: form.message,
        },
        "g8EeeA-sHHTdglj2o"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <div className="flex items-center space-x-6">
            <button
              type="submit"
              className="relative py-3 px-8 rounded-xl outline-none text-white font-bold shadow-md shadow-primary bg-tertiary overflow-hidden"
            >
              <span className="absolute inset-0 border-2 border-secondary rounded-xl animate-pulse"></span>
              <span className="relative z-10">{loading ? "Sending..." : "Send"}</span>
            </button>

            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-secondary transition-colors duration-300 text-xl"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
