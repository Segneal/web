import React, { useEffect } from "react";

export default function ToTop() {
  const [isVisible, setIsVisible] = React.useState("false");

  const toggleVisibility = () => {
    console.log(window.pageYOffset);
    if (window.pageYOffset > 400) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const toTop = () => {
    window.scrollTo({ top: "0", behavior: "smooth" });
  };

  return (
    <>
      {isVisible && (
        <div className="button-scroller">
          <button className="arrow-scroller" onClick={toTop}>
            sarasa
          </button>
        </div>
      )}
    </>
  );
}
