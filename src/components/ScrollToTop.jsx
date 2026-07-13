import { useState, useEffect } from "react";

function ScrollToTop() {

  const [visible, setVisible] = useState(false);

  useEffect(() => {

    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () =>
      window.removeEventListener("scroll", toggleVisibility);

  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    visible && (
      <button
        className="scroll-btn"
        onClick={scrollTop}
      >
        ↑
      </button>
    )
  );
}

export default ScrollToTop;