import ContactUs from "@/components/common/ContactUs";
import GlassEffectBg from "@/components/common/GlassEffectBg";
import ContactForm from "@/components/contact/ContactForm";
import Header from "@/components/header/Header";

const page = () => {
  return (
    <>
      <GlassEffectBg>
        <Header />
        <ContactUs title="Контакты" className="mt-7.75" />
        <ContactForm title="Написать нам" />
      </GlassEffectBg>
    </>
  );
};

export default page;
