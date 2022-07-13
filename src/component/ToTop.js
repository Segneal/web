import React, { useEffect } from "react";
import arrow from "../Assets/logos/up-arrow.png";
export default function ToTop() {
  const [isVisible, setIsVisible] = React.useState("true");

  const toggleVisibility = () => {
    if (window.scrollY > 400) {
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
    window.scrollTo({ top: 10 });
  };

  const buttonClasses = () => {
    let classNames = "button-scroller center fixed-bottom ";
    if (isVisible) {
      return classNames + "active";
    }
    return classNames;
  };

  return (
    <div className={buttonClasses()}>
      <button className="arrow-scroller" onClick={toTop}>
        ^
      </button>
    </div>
  );
}
