"use client";

import { motion } from "framer-motion";

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/27717768306"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c5a355]"
      animate={{ scale: [1, 1.08, 1] }}
      transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      whileHover={{ scale: 1.12 }}
    >
      <svg viewBox="0 0 32 32" aria-hidden="true" className="h-7 w-7 fill-current">
        <path d="M19.11 17.53c-.27-.13-1.56-.77-1.8-.86-.24-.09-.42-.13-.6.14s-.69.86-.84 1.04c-.16.18-.31.2-.58.07-.27-.13-1.12-.41-2.13-1.3-.79-.7-1.32-1.56-1.47-1.82-.16-.27-.02-.41.12-.54.12-.12.27-.31.4-.47.13-.16.18-.27.27-.45.09-.18.04-.34-.02-.47-.07-.13-.6-1.45-.82-1.98-.21-.51-.43-.45-.6-.46h-.51c-.18 0-.47.07-.72.34-.24.27-.94.92-.94 2.24s.96 2.6 1.09 2.78c.13.18 1.88 2.87 4.56 4.02.64.28 1.14.44 1.53.56.64.2 1.22.17 1.68.1.51-.08 1.56-.64 1.78-1.26.22-.63.22-1.16.16-1.26-.07-.11-.24-.18-.51-.31z" />
        <path d="M16.02 3.2C8.95 3.2 3.2 8.93 3.2 16c0 2.5.72 4.93 2.09 7.03L3 29l6.15-2.22a12.77 12.77 0 0 0 6.87 2c7.07 0 12.8-5.73 12.8-12.8S23.1 3.2 16.02 3.2zm0 23.46c-2.05 0-4.06-.55-5.81-1.6l-.42-.25-3.65 1.32 1.33-3.56-.27-.44a10.58 10.58 0 0 1-1.62-5.65c0-5.85 4.76-10.61 10.62-10.61 5.85 0 10.61 4.76 10.61 10.61 0 5.86-4.76 10.62-10.61 10.62z" />
      </svg>
    </motion.a>
  );
}
