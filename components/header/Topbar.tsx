export default function Topbar() {
  return (
    <div className="w-full px-6 py-2 flex items-center justify-between text-sm text-gray-700">
      <div className="flex items-center gap-6">
        <a
          href="tel:+998907583833"
          className="flex items-center gap-2 hover:text-black transition"
        >
          📞 +998(90)758 38 33
        </a>
        <a
          href="mailto:info@bmgsoft.com"
          className="flex items-center gap-2 hover:text-black transition"
        >
          ✉️ info@bmgsoft.com
        </a>
      </div>

      <div className="flex items-center gap-4">
        <select className="bg-transparent border-none outline-none cursor-pointer text-sm">
          <option value="ru">🇷🇺 Русский</option>
          <option value="uz">🇺🇿 o`zbek</option>
          <option value="en">🇬🇧 English</option>
        </select>
        <button className="bg-black text-white text-xs px-4 py-1.5 rounded-full hover:bg-gray-800 transition">
          Вход в аккаунт
        </button>
      </div>
    </div>
  );
}
