"use client";

import React from "react";
import SectionHeading from "./Headings";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./Submit";
import toast from "react-hot-toast";
import Link from "next/link";
import Image from "next/image";
import { Locate, Mail, PhoneCallIcon } from "lucide-react";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Get in Touch</SectionHeading>

      <section className="w-full">
        <div className="mx-auto max-w-4xl px-4 flex flex-col items-center space-y-4">
          <div className="space-y-2 text-center">
            <p className="text-gray-500 dark:text-gray-400">
              Reach out to discuss your project or learn more about my work.
            </p>
          </div>
          <div className="space-y-4">
            <div className="space-y-1">
              <h3 className="font-semibold">Email</h3>
              <p className="flex flex-row justify-center">
                <Mail className="pr-3 w-6 h-6" />
                Jonathancho.jc@gmail.com
              </p>
            </div>
            <div className="space-y-1">
              <h3 className="font-semibold">Phone</h3>

              <p className="flex flex-row justify-center">
                <PhoneCallIcon className="pr-3 w-6 h-6" />
                (253) 347-6077
              </p>
            </div>
            <div className="space-y-1">
              <h3 className="font-semibold">Location</h3>
              <p className="flex flex-row justify-center">
                <Locate className="pr-3 w-6 h-6" />
                Olympia, WA
              </p>
            </div>
            <div className="space-y-1">
              <h3 className="font-semibold">Social</h3>
              <div className="flex items-center gap-4">
                <Image
                  alt="LinkedIn profile picture"
                  src="/icon2.png"
                  width={40}
                  height={40}
                  layout="fixed"
                  objectFit="cover"
                  className="rounded-full" // Apply rounded corners using external CSS
                />
                <Link
                  className="underline underline-offset-[4px] underline-gray-900 dark:underline-gray-100"
                  href="https://www.linkedin.com/in/jon-jc/"
                >
                  View my LinkedIn profile
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <form
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully!");
        }}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
