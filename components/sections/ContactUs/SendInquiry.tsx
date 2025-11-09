import InquiryForm from "@/components/ui/ContactComponent/InquiryForm";

export default function SendInquiry() {
  return (
    <section className="container mx-auto px-4 mt-20 md:mt-30">
      <div>
        <img
          src="/assets/icons/ic_stars.png"
          alt="stars"
          className="w-auto h-5 md:h-6 mb-3 md:mb-4"
        />
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground font-urbanist mb-3 md:mb-3.5">
        Send Us an Inquiry
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-foreground/50 font-urbanist font-medium">
        Tell us what you need — our export team will get back to you within 24 hours with full details, pricing, and shipping options.
        </p>
        <div className="bg-secondary border border-gray-200 rounded-xl mt-20 p-6 md:p-8 lg:p-10">
          <InquiryForm />
        </div>
      </div>
    </section>
  );
}