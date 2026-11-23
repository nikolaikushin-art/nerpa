import { useEffect } from "react";

const ELFSIGHT_SCRIPT_ID = "elfsight-platform-script";
const ELFSIGHT_APP_CLASS = "elfsight-app-4abdf018-4e60-49a8-9e22-30287284c0f3";

const ElfsightWidget = () => {
  useEffect(() => {
    if (document.getElementById(ELFSIGHT_SCRIPT_ID)) return;

    const script = document.createElement("script");
    script.id = ELFSIGHT_SCRIPT_ID;
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return (
    <div className="pointer-events-none fixed bottom-8 right-8 z-40 hidden md:block">
      <div
        className={`${ELFSIGHT_APP_CLASS} pointer-events-auto`}
        data-elfsight-app-lazy
      />
    </div>
  );
};

export default ElfsightWidget;
