import { useState, useEffect, createRef } from "react";

const useDescriptionOverflow = () => {
  const [showMore, setShowMore] = useState(false);
  const [contentOverflow, setContentOverflow] = useState(false);
  const [width, setWidth] = useState();
  const descriptionRef = createRef();

  /* Detect if the description text has overflowed from its container */
  useEffect(() => {
    if (
      descriptionRef.current.clientHeight < descriptionRef.current.scrollHeight
    ) {
      return setContentOverflow(true);
    }
    return setContentOverflow(false);
  }, [descriptionRef, width]);

  useEffect(() => {
    /* The 9.5rem is calculated from line-clamp at 7 lines and line-height 
       at 1.35rem, thus (7 * 1.35rem = 9.45rem)
     */
    descriptionRef.current.style.height =
      contentOverflow && !showMore ? "9.45rem" : "100%";
  }, [contentOverflow, descriptionRef, showMore]);

  useEffect(() => {
    window.addEventListener("resize", handleDescriptionResize);
    return () => window.removeEventListener("resize", handleDescriptionResize);
  });

  const handleDescriptionResize = () => {
    setWidth(descriptionRef.current.clientWidth);
  };

  return {
    showMore,
    setShowMore,
    contentOverflow,
    descriptionRef,
  };
};

export default useDescriptionOverflow;
