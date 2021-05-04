import { useState, useEffect, createRef } from "react";

const useDescriptionOverflow = () => {
  const [showMore, setShowMore] = useState(false);
  const [contentOverflow, setContentOverflow] = useState(false);
  const descriptionRef = createRef();

  useEffect(() => {
    if (
      descriptionRef.current.clientHeight < descriptionRef.current.scrollHeight
    ) {
      setContentOverflow(true);
    }
  }, [descriptionRef]);

  useEffect(() => {
    descriptionRef.current.style.height = showMore ? "100%" : "150px";
  }, [descriptionRef, showMore]);

  return {
    showMore,
    setShowMore,
    contentOverflow,
    descriptionRef,
  };
};

export default useDescriptionOverflow;
