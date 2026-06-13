interface SectionTitleProps {
  subTitle?: string;
  title?: string;
  paragraph?: string;
  center?: boolean;
  width?: string;
  mb?: string;
}

const SectionTitle = ({
  subTitle,
  title,
  paragraph,
  center = true,
  width = "635px",
  mb = "20px",
}: SectionTitleProps) => {
  return (
    <div
      className={`mx-auto ${center ? "text-center" : "text-left"}`}
      style={{ maxWidth: width, marginBottom: mb }}
    >
      {/* SubTitle – now sage green instead of purple */}
      {subTitle && (
        <span
          className="mb-5 block font-semibold"
          style={{
            background: "linear-gradient(90deg, #8AA67E 0.01%, #A8C4A0 50.01%, #C2D9B8 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          {subTitle}
        </span>
      )}

      {/* Title */}
      {title && (
        <h2
          className="text-2xl font-extrabold text-white sm:text-4xl xl:text-heading-2"
          dangerouslySetInnerHTML={{ __html: title }}
        />
      )}

      {/* Paragraph */}
      {paragraph && (
        <p
          className="font-medium"
          dangerouslySetInnerHTML={{ __html: paragraph }}
        />
      )}
    </div>
  );
};

export default SectionTitle;