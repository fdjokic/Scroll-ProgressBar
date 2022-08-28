import "./App.css";
import { useRef, useEffect } from "react";
import DummyText from "./DummyText";

function App() {
  const containerRef = useRef(null);
  const progressRef = useRef(null);

  const scrollHandler = () => {
    let scrollDistance = -containerRef.current.getBoundingClientRect().top;
    let progressWidth =
      (scrollDistance /
        (containerRef.current.getBoundingClientRect().height -
          document.documentElement.clientHeight)) *
      100;

    progressRef.current.style.width = progressWidth + "%";
    if (progressWidth < 0) {
      progressRef.current.style.width = 0 + "%";
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler, true);
    return () => {
      window.removeEventListener("scroll", scrollHandler, true);
    };
  }, []);

  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="progress-bar" ref={progressRef}></div>
      <div className="container" ref={containerRef}>
       <DummyText/>
      </div>
      <p className="back-top" onClick={backToTop}>
        Back To The Top
      </p>
    </>
  );
}

export default App;
