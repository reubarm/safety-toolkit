import React, { useEffect } from "react";
import { PrismicRichText } from "@prismicio/react";
import Button from "react-bootstrap/Button";

/**
 * Text section slice component
 */
export const TextSection = ({ slice }) => {
  const sectionClass = slice.slice_label
    ? `text-section-${slice.slice_label}`
    : "text-section-1col";

  return (
    <section className={`content-section ${sectionClass}`}>
      <PrismicRichText field={slice.primary.rich_text} />
      {slice.primary.next_page && (
        <>
          {slice.primary.next_page[0].text ? (
            <a
              href={slice.primary.next_page_url[0].text}
              className="btn-action style-2 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-duration="1200"
              style={{
                color: "#000",
                textTransform: "none",
                textDecoration: "none",
                fontSize: "18px",
                zIndex: "1",
                position: "relative",
                margin: "3rem auto 0"
              }}
            >
              <span style={{ opacity: "0.7" }}>Next: </span>
              <strong>{slice.primary.next_page[0].text}</strong>
            </a>
          ) : (
            <></>
          )}
        </>
      )}
    </section>
  );
};
