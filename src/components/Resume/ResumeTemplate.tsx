import ContactInfo from "./header/ContactInfo";
import Header from "./header/Header";
import ResumeDetails from "./ResumeDetails";

const ResumeTemplate: React.FC = () => {
  return (
    <div
      className={`w-[1200px] min-h-[1696.8px] mx-auto z-[10] bg-white flex flex-col shadow-lg`}
    >
      <Header />
      <ContactInfo />
      <ResumeDetails />
    </div>
  );
};

export default ResumeTemplate;
