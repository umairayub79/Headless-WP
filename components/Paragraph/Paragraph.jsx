import { getTextAlign } from "utils/fonts";
import { relativeToAbsoluteUrls } from "utils/relativeToAbsoluteUrls";

export const Paragraph = ({ content, textAlign = 'left', textColor }) => {
  return (
    <p
      style={{ color: textColor }}
      dangerouslySetInnerHTML={{ __html: relativeToAbsoluteUrls(content) }}
      className={`max-w-5xl mx-auto ${getTextAlign(textAlign)}`}
    />
  );
};
