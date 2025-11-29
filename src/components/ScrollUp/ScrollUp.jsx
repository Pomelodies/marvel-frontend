import { useEffect, useState } from "react";
import "./scrollup.css";

const ScrollUpButton = () => {
  const [showGoTop, setShowGoTop] = useState(false);

  const handleVisibleButton = () => {
    setShowGoTop(window.pageYOffset > 100);
  };

  const handleScrollUp = () => {
    window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleVisibleButton);
  }, []);

  return (
    <div className={showGoTop ? "scrollUpStyle" : ""} onClick={handleScrollUp}>
      <button>
        <span>Retournez vers le haut</span>
      </button>
    </div>
  );
};

export default ScrollUpButton;
