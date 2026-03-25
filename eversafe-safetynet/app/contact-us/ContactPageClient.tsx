"use client";

import Head from "next/head";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  AiOutlineMail,
  AiFillPhone,
  AiOutlineInstagram,
  AiOutlineFacebook,
} from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import StickyContactIcons from "../stickyIcons/StickyIcons";

export const BASE_URL = "https://eversafesafetynets.com";


export default function ContactPageClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/sendMail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("✅ Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("❌ Failed to send message. Try again later.");
      }
    } catch (err) {
      console.error(err);
      setStatus("❌ Error sending message.");
    }
  };

  return (
    <>
    <Navbar />
      <Head>
        <title>Contact Us | EverSafe Safety Nets | Balcony & Bird Protection Experts</title>
        <meta
          name="description"
          content="Contact EverSafe Safety Nets in Bengaluru for professional installation of balcony, bird, and construction safety nets. Get your free quote today!"
        />
      </Head>

      <main className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
        {/* 🟡 HERO SECTION */}
        <section className="relative h-[60vh] flex items-center justify-center text-center bg-[url('/service/balcony-5.webp')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="relative z-10 max-w-3xl px-6">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-yellow-400">
              Contact EverSafe Safety Nets
            </h1>
            <p className="text-lg md:text-xl text-white">
              Let’s make your space safer — our experts are ready to help.
            </p>
          </div>
        </section>

        {/* 🧩 CONTACT INFO + FORM */}
        <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">
          {/* LEFT INFO */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
            <p className="mb-6 leading-relaxed">
              Reach out for free consultation or installation quotes Bangalore. Our team responds quickly!
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <AiFillPhone className="text-yellow-400 text-2xl" />
                <a href="tel:+918074838518" className="hover:underline font-medium">
                  +91 8074838518
                </a>
              </div>
              <div className="flex items-center gap-3">
                <AiOutlineMail className="text-yellow-400 text-2xl" />
                <a href="mailto:eversafesafetynets@gmail.com" className="hover:underline font-medium">
                  Eversafesafetynets@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MdLocationOn className="text-yellow-400 text-2xl" />
                <p>Door No:- #50, 15th H cross,<br/> Bandappa garden,Mathikere<br/>Yeswanthpur, Bengaluru, <br />Karnataka,India</p>
              </div>
            </div>

                <p className="mb-6 leading-relaxed mt-10">
              Reach out for free consultation or installation quotes in Visakhapatanam. Our team responds quickly!
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <AiFillPhone className="text-yellow-400 text-2xl" />
                <a href="tel:+916301838456" className="hover:underline font-medium">
                  +91 6301838456
                </a>
              </div>
              <div className="flex items-center gap-3">
                <AiOutlineMail className="text-yellow-400 text-2xl" />
                <a href="mailto:official@eversafesafetynets.com" className="hover:underline font-medium">
                  official@eversafesafetynets.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MdLocationOn className="text-yellow-400 text-2xl" />
                <p>Door No:- 15-56<br/> Srinivasa Nagar, Madhurawada<br/>Visakhapatanam, 530048 <br />Andhrapradesh,India</p>
              </div>
            </div>

            <div className="flex gap-5 mt-8">
              <a
                href="https://www.facebook.com/eversafetynets"
                target="_blank"
                className="text-blue-400 hover:text-blue-300 transition"
              >
                <AiOutlineFacebook size={28} />
              </a>
              <a
                href="https://www.instagram.com/eversafetynets"
                target="_blank"
                className="text-pink-400 hover:text-pink-300 transition"
              >
                <AiOutlineInstagram size={28} />
              </a>
            </div>
          </motion.div>

          {/* RIGHT FORM */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg"
            name="User-form-data"
          >
            <h2 className="text-2xl font-bold mb-6 text-center text-yellow-400">
              Send Us a Message
            </h2>

            <div className="space-y-4">
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-yellow-400 outline-none"
              />
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                type="email"
                required
                className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-yellow-400 outline-none"
              />
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your Phone Number"
                required
                className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-yellow-400 outline-none"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows={5}
                required
                className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-yellow-400 outline-none"
              />
              <button
                type="submit"
                className="w-full bg-yellow-400 text-gray-900 font-semibold py-3 rounded-full shadow-md hover:bg-yellow-300 transition"
              disabled>
                Send Message
              </button>
            </div>

            {status && (
              <p className="text-center mt-4 text-sm text-yellow-400 font-medium">
                {status}
              </p>
            )}
          </motion.form>
        </section>

        {/* MAP SECTION */}
      <section className="max-w-full mx-auto px-6 pb-16">
  <h2 className="text-2xl font-bold mb-6 text-center">Visit Our Location</h2>

  {/* Map */}
  <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-lg mb-6">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1614.2110096025694!2d77.5491208!3d13.0344338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAyJzA0LjAiTiA3N8KwMzInNTcuMCJF!5e0!3m2!1sen!2sin!4v1700000000000"
      width="100%"
      height="100%"
      style={{border:0}}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>

  {/* Action Buttons */}
  <div className="flex flex-col sm:flex-row justify-center gap-4">

    {/* Get Directions */}
    <a
    rel="noopener"
      href="https://www.google.com/maps/dir/?api=1&destination=13.0344338,77.5491208"
      target="_blank"
      className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow hover:bg-blue-700 transition"
    >
      Get Directions
    </a>

    {/* Call */}
    <a
      href="tel:+918074838518"
      className="px-6 py-3 bg-green-600 text-white font-semibold rounded-xl shadow hover:bg-green-700 transition"
    >
      Call Now
    </a>

    {/* WhatsApp */}
    <a
    rel="noopener"
      href="https://wa.me/918074838518"
      target="_blank"
      className="px-6 py-3 bg-[#25D366] text-white font-semibold rounded-xl shadow hover:bg-[#1EBE57] transition"
    >
      WhatsApp
    </a>

    {/* Save Location */}
    <a
    rel="noopener"
      href="https://www.google.com/maps/place/13.0344338,77.5491208"
      target="_blank"
      className="px-6 py-3 bg-gray-700 text-white font-semibold rounded-xl shadow hover:bg-gray-800 transition"
    >
      Save Location
    </a>

  </div>
</section>

      </main>
      <Footer/>
      <StickyContactIcons />
    </>
  );
}