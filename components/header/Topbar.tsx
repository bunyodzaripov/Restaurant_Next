"use client";

import { useState } from "react";
import { Phone, Mail, ChevronDown } from "lucide-react";
import Link from "next/link";
import UserButton from "./UserButton";

const languages = [
  { value: "ru", label: "Русский", flag: "🇷🇺" },
  { value: "uz", label: "O'zbek", flag: "🇺🇿" },
  { value: "en", label: "English", flag: "eng" },
];

export default function Topbar() {
  const [selectedLang, setSelectedLang] = useState("ru");

  const currentLang = languages.find((l) => l.value === selectedLang);

  return (
    <div className="py-2 mb-11.25 flex items-center justify-between">
      <div className="flex gap-6.75">
        <Link href="tel:+998907583833" className="flex items-center gap-2">
          <Phone size={16} />
          +998(90)758 38 33
        </Link>
        <Link
          href="mailto:info@bmgsoft.com"
          className="flex items-center gap-2 hover:text-black transition"
        >
          <Mail size={16} />
          info@bmgsoft.com
        </Link>
      </div>

      <div className="flex items-center gap-3">
        <div className="relative flex items-center">
          <span className="pointer-events-none absolute left-2">
            {currentLang?.flag}
          </span>
          <select
            aria-label="Выберите язык"
            value={selectedLang}
            onChange={(e) => setSelectedLang(e.target.value)}
            className="pl-8 pr-6 py-1.5 rounded-md bg-transparent cursor-pointer outline-none appearance-none text-sm"
          >
            {languages.map((lang) => (
              <option key={lang.value} value={lang.value}>
                {lang.label}
              </option>
            ))}
          </select>
          <ChevronDown
            size={14}
            className="pointer-events-none absolute right-1"
          />
        </div>

        <UserButton />
      </div>
    </div>
  );
}
