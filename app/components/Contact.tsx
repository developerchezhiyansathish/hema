"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { contact } from "../content/portfolio";

type FormStatus = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [feedback, setFeedback] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setFeedback("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(data.error ?? "Unable to send your message.");
      }

      form.reset();
      setStatus("success");
      setFeedback("Message sent successfully. Hemapriya will get back to you soon.");
    } catch (error) {
      setStatus("error");
      setFeedback(
        error instanceof Error
          ? error.message
          : "Unable to send your message right now."
      );
    }
  }

  return (
    <section
      ref={ref}
      id="contact"
      className="py-32 md:py-[240px] px-6 md:px-10 lg:px-20 bg-ivory"
    >
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-[120px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="space-y-12"
        >
          <h2 className="font-section-title text-section-title text-on-surface leading-[1.28]">
            Let&apos;s work <br />
            together.
          </h2>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center gap-6"
            >
              <HiOutlineMail className="text-primary-container text-2xl flex-shrink-0" />
              <div>
                <p className="font-navigation-label text-[10px] text-outline uppercase tracking-[0.45em]">
                  Email
                </p>
                <p className="font-body-main text-body-main text-on-surface">
                  {contact.email}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="flex items-center gap-6"
            >
              <HiOutlinePhone className="text-primary-container text-2xl flex-shrink-0" />
              <div>
                <p className="font-navigation-label text-[10px] text-outline uppercase tracking-[0.45em]">
                  Phone
                </p>
                <p className="font-body-main text-body-main text-on-surface">
                  {contact.phone}
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-surface-container-lowest p-8 md:p-12 fine-stone-border"
        >
          <form className="space-y-8" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label className="font-navigation-label text-[10px] text-outline uppercase tracking-[0.45em] block">
                Full Name
              </label>
              <input
                name="name"
                type="text"
                placeholder="Your name"
                required
                className="w-full border-0 border-b border-fine-stone focus:ring-0 focus:border-primary-container bg-transparent py-2 font-body-main text-body-main text-on-surface outline-none transition-colors duration-300"
              />
            </div>

            <div className="space-y-2">
              <label className="font-navigation-label text-[10px] text-outline uppercase tracking-[0.45em] block">
                Email Address
              </label>
              <input
                name="email"
                type="email"
                placeholder="your@email.com"
                required
                className="w-full border-0 border-b border-fine-stone focus:ring-0 focus:border-primary-container bg-transparent py-2 font-body-main text-body-main text-on-surface outline-none transition-colors duration-300"
              />
            </div>

            <div className="space-y-2">
              <label className="font-navigation-label text-[10px] text-outline uppercase tracking-[0.45em] block">
                Message
              </label>
              <textarea
                name="message"
                placeholder="Tell me about your brand or campaign..."
                required
                className="w-full border-0 border-b border-fine-stone focus:ring-0 focus:border-primary-container bg-transparent py-2 font-body-main text-body-main text-on-surface h-32 resize-none outline-none transition-colors duration-300"
              />
            </div>

            {feedback && (
              <p
                className={`font-body-caption text-[13px] leading-[1.6] ${
                  status === "success" ? "text-primary" : "text-error"
                }`}
                role="status"
              >
                {feedback}
              </p>
            )}

            <motion.button
              type="submit"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              disabled={status === "sending"}
              className="w-full bg-on-surface text-on-primary font-navigation-label text-[11px] py-5 md:py-6 uppercase tracking-[0.3em] hover:bg-primary-container disabled:cursor-not-allowed disabled:opacity-60 transition-all duration-500 cursor-pointer"
            >
              {status === "sending" ? "Sending..." : "Start a Conversation"}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
