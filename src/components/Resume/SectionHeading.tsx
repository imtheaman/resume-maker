const SectionHeading: React.FC<{
  heading: string;
  className?: string;
  placeholder: string;
}> = ({ heading, className, placeholder, ...otherProps }) => {
  return (
    <h2
      className={`text-[1.75rem] text-gray-800 font-bold content-editable mb-2 ${
        className && className
      }`}
      contentEditable
      placeholder={placeholder}
      suppressContentEditableWarning
      {...otherProps}
    >
      {heading.toUpperCase()}
    </h2>
  );
};

export default SectionHeading;
