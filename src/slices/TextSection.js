import React, { useEffect } from "react";
import { PrismicRichText } from "@prismicio/react";
import Button from 'react-bootstrap/Button';

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
          <Button variant="secondary" size="lg" href={slice.primary.next_page_url[0].text} style={{height: "50px", minWidth: "300px", maxWidth: "400px", width: "100%", margin: "3rem auto 7rem", background: "#23527c"}}>
          <span style={{opacity: "0.7"}}>Next: </span><strong>{slice.primary.next_page[0].text}</strong>
          </Button>) : <></>}
        </>
      )}
    </section>
  );
};
