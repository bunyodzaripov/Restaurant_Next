import WorkingHours from "@/components/booking/WorkingHours";
import BookingForm from "@/components/common/BookingForm";
import ContactUs from "@/components/common/ContactUs";
import GlassEffectBg from "@/components/common/GlassEffectBg";
import Header from "@/components/header/Header";

const Booking = () => {
  return (
    <>
      <GlassEffectBg>
        <Header />
        <WorkingHours />
        <BookingForm
          title="Хотите забронировать стол?"
          className="w-225.5 mt-17.75 mx-auto"
          titleClassName="text-[48px] font-extrabold text-center"
          buttonClassName="justify-end"
        />
        <ContactUs title="Связаться с нами" className="my-13.5" />
      </GlassEffectBg>
    </>
  );
};

export default Booking;
