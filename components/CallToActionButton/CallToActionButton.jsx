import { ButtonLink } from "components/ButtonLink";

export const CallToActionButton = ({ label, align = "left", destination }) => {
  const alignMap = {
    left: "text-align",
    center: "text-center",
    right: "text-right",
  };

  return (
    <div className={alignMap[align]}>
      <ButtonLink label={label} destination={destination} />
    </div>
  );
};
