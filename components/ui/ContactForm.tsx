"use client";

import { useState, FormEvent, useCallback } from "react";
import emailjs from "@emailjs/browser";
import Toast from "./Toast";

const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

function FloatingInput({
  id,
  label,
  type = "text",
  value,
  onChange,
  required,
}: {
  id: string;
  label: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
}) {
  const [focused, setFocused] = useState(false);
  const isActive = focused || value.length > 0;

  return (
    <div className="relative">
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        required={required}
        className="peer w-full px-4 pt-6 pb-2 bg-surface/40 border border-surface-border rounded-xl text-text-primary text-sm focus:border-primary focus:outline-none focus:shadow-[0_0_15px_rgba(139,92,246,0.1)] transition-all duration-300"
        placeholder=" "
      />
      <label
        htmlFor={id}
        className={`absolute left-4 transition-all duration-200 pointer-events-none font-mono ${
          isActive
            ? "top-2 text-[10px] text-primary tracking-wider uppercase"
            : "top-4 text-sm text-text-secondary"
        }`}
      >
        {label}
      </label>
    </div>
  );
}

function FloatingTextarea({
  id,
  label,
  value,
  onChange,
  required,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
}) {
  const [focused, setFocused] = useState(false);
  const isActive = focused || value.length > 0;

  return (
    <div className="relative">
      <textarea
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        required={required}
        rows={5}
        className="peer w-full px-4 pt-6 pb-2 bg-surface/40 border border-surface-border rounded-xl text-text-primary text-sm focus:border-primary focus:outline-none focus:shadow-[0_0_15px_rgba(139,92,246,0.1)] transition-all duration-300 resize-none"
        placeholder=" "
      />
      <label
        htmlFor={id}
        className={`absolute left-4 transition-all duration-200 pointer-events-none font-mono ${
          isActive
            ? "top-2 text-[10px] text-primary tracking-wider uppercase"
            : "top-4 text-sm text-text-secondary"
        }`}
      >
        {label}
      </label>
    </div>
  );
}

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
        <FloatingInput
          id="name"
          label="Name"
          value={formData.name}
          onChange={(v) => setFormData({ ...formData, name: v })}
          required
        />
        <FloatingInput
          id="email"
          label="Email"
          type="email"
          value={formData.email}
          onChange={(v) => setFormData({ ...formData, email: v })}
          required
        />
        <FloatingTextarea
          id="message"
          label="Message"
          value={formData.message}
          onChange={(v) => setFormData({ ...formData, message: v })}
          required
        />
        <button
          type="submit"
          disabled={sending}
          className="group w-full px-6 py-3.5 bg-primary text-white font-semibold text-sm rounded-xl hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:-translate-y-0.5"
        >
          {sending ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Sending...
            </span>
          ) : (
            <span className="flex items-center justify-center gap-2">
              Send Message
              <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
            </span>
          )}
        </button>
      </form>
      <Toast message={toast.message} type={toast.type} visible={toast.visible} onClose={closeToast} />
    </>
  );
}
