"use client";

import { useState, FormEvent, useCallback } from "react";
import emailjs from "@emailjs/browser";
import Toast from "./Toast";

// EmailJS configuration — set these in .env.local:
// NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
// NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
// NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
// Sign up at https://www.emailjs.com/ to get these values
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: "success" | "error"; visible: boolean }>({
    message: "",
    type: "success",
    visible: false,
  });

  const closeToast = useCallback(() => {
    setToast((prev) => ({ ...prev, visible: false }));
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSending(true);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        EMAILJS_PUBLIC_KEY
      );

      setToast({ message: "Message sent successfully!", type: "success", visible: true });
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setToast({ message: "Failed to send message. Please try again.", type: "error", visible: true });
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="font-mono text-sm text-text-secondary block mb-1">
            name
          </label>
          <input
            id="name"
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 bg-background border border-surface-border rounded-lg text-text-primary focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="font-mono text-sm text-text-secondary block mb-1">
            email
          </label>
          <input
            id="email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 bg-background border border-surface-border rounded-lg text-text-primary focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
            placeholder="your@email.com"
          />
        </div>
        <div>
          <label htmlFor="message" className="font-mono text-sm text-text-secondary block mb-1">
            message
          </label>
          <textarea
            id="message"
            required
            rows={5}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full px-4 py-3 bg-background border border-surface-border rounded-lg text-text-primary focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors resize-none"
            placeholder="Your message..."
          />
        </div>
        <button
          type="submit"
          disabled={sending}
          className="font-mono w-full px-6 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {sending ? "sending..." : "send_message()"}
        </button>
      </form>
      <Toast message={toast.message} type={toast.type} visible={toast.visible} onClose={closeToast} />
    </>
  );
}
