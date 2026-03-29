import Link from "next/link";
import {
  Send,
  MessageCircle,
  LucideSquareFunction,
  DotSquareIcon,
} from "lucide-react";

const services = [
  { label: "Цены", href: "#" },
  { label: "Отслеживание", href: "#" },
  { label: "Сообщить об ошибке", href: "#" },
  { label: "Условия услуг", href: "#" },
];

const company = [
  { label: "Отчетность", href: "#" },
  { label: "Свяжитесь с нами", href: "#" },
  { label: "Управление", href: "#" },
];

const socials = [
  { icon: Send, href: "#" },
  { icon: MessageCircle, href: "#" },
  { icon: LucideSquareFunction, href: "#" },
  { icon: DotSquareIcon, href: "#" },
];

export default function Footer() {
  return (
    <footer
      className="relative mt-17.5"
      style={{
        background: `url('/footer-bg.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-325 mx-auto px-3 relative p-17.5 grid grid-cols-4 gap-12 ">
        <div className="flex flex-col gap-4 w-fit">
          <Link href="/" className="text-[48px] font-black text-black ">
            LOGO
          </Link>

          <div className="flex items-center gap-3">
            {socials.map(({ icon: Icon, href }, i) => (
              <Link key={i} href={href} className="text-black">
                <Icon size={20} strokeWidth={3.5} />
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h4 className="text-[25px] font-bold text-black mb-2">Наши услуги</h4>

          {services.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-base text-[#080808] font-medium"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <h4 className="text-[25px] font-bold text-black mb-2">
            Наша компания
          </h4>
          {company.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-base text-[#080808] font-medium"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-2">
          <h4 className="text-[25px] font-bold text-black mb-2">Адрес</h4>
          <p className="text-base text-[#080808] font-medium">
            Узбекистан, Ташкент
            <br />
            Улица, 24
          </p>
          <Link
            href="tel:+99894848844848"
            className="text-base text-[#080808] font-medium mt-2"
          >
            +99894848844848
          </Link>
          <Link
            href="mailto:info@bmgsoft.com"
            className="text-base text-[#080808] font-medium"
          >
            info@bmgsoft.com
          </Link>
        </div>
      </div>
    </footer>
  );
}
