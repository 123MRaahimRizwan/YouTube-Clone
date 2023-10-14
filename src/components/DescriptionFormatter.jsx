import React from "react";
import { marked } from "marked";

const DescriptionFormatter = ({ descriptionText }) => {
  const descriptionHtml = marked(descriptionText);

  return (
    <div
      className="description"
      dangerouslySetInnerHTML={{ __html: descriptionHtml }}
    />
  );
};

export default DescriptionFormatter;
