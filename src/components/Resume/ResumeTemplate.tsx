import ContactInfo from "./header/ContactInfo";
import Header from "./header/Header";
import ResumeDetails from "./ResumeDetails";

const ResumeTemplate: React.FC = () => {
  return (
    <div
      className={`w-[1180px] min-h-[1668px] mx-auto my-16 bg-white flex flex-col shadow-lg`}
    >
      <Header />
      <ContactInfo />
      <ResumeDetails />
    </div>
  );
};

export default ResumeTemplate;
