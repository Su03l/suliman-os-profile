import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

export const useScrollFadeIn = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 }); // Trigger when 20% of the element is in view

  return { ref, isInView };
};