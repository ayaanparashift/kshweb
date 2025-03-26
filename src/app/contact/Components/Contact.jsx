import ContInfo from "./ContInfo";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div>
      <div className="flex xl:pt-0 pt-[50px] xl:flex-row flex-col gap-[40px] xl:gap-[80px] fix12">
        <div className="xl:py-[100px] py-0">
          <ContInfo />
        </div>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
