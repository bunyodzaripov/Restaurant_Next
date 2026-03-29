import { cn } from "@/lib/utils";
import { MailCheck, PhoneCall, MapPinned } from "lucide-react";
import Link from "next/link";
import Title from "./Title";

interface ContactUsProps {
  title: string;
  className?: string;
}

const contacts = [
  {
    icon: MailCheck,
    title: "Напишите нам",
    lines: [
      { label: "info@bmgsoft.com", href: "mailto:info@bmgsoft.com" },
      { label: "t.me/bmgsoft.com", href: "https://t.me/bmgsoft" },
    ],
  },
  {
    icon: PhoneCall,
    title: "Позвоните нам",
    lines: [
      { label: "+9998908767888", href: "tel:+9998908767888" },
      { label: "+9989865332322", href: "tel:+9989865332322" },
    ],
  },
  {
    icon: MapPinned,
    title: "Посетите нас",
    lines: [
      { label: "Узбекистан, Ташкент", href: "#" },
      { label: "Улица, 24", href: "#" },
    ],
  },
];

export default function ContactUs({ title, className }: ContactUsProps) {
  return (
    <section className={cn(className)}>
      <Title title={title} />

      <div className="grid grid-cols-3 gap-32 w-201 mx-auto">
        {contacts.map((contact) => {
          const Icon = contact.icon;
          return (
            <div
              key={contact.title}
              className="flex flex-col gap-3 items-center"
            >
              <Icon size={51} strokeWidth={2.5} className="text-black mb-5" />

              <h3 className="text-[24px] font-semibold text-black">
                {contact.title}
              </h3>

              <div className="flex flex-col gap-1 text-center">
                {contact.lines.map((line) => (
                  <Link
                    key={line.label}
                    href={line.href}
                    className="text-base text-black"
                  >
                    {line.label}
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
