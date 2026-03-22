"use client";

import { useEffect, useRef } from "react";
import Typed from "typed.js";

interface TypedTextProps {
  strings: string[];
  className?: string;
}

export default function TypedText({ strings, className = "" }: TypedTextProps) {
  const el = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!el.current) return;

    const typed = new Typed(el.current, {
      strings,
      typeSpeed: 70,
      backSpeed: 70,
      backDelay: 1000,
      loop: true,
    });

    return () => typed.destroy();
  }, [strings]);

  return <span ref={el} className={className} />;
}
