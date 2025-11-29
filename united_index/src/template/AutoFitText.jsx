import React, { useRef, useLayoutEffect } from "react";

export default function AutoFitText({ text, maxSize = 30, minSize = 10 }) {
  const textRef = useRef(null);
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const textEl = textRef.current;
    const parent = containerRef.current;

    if (!textEl || !parent) return;

    let size = maxSize;
    textEl.style.fontSize = size + "px";

    // Reduce font until it fits
    while (
      (textEl.scrollWidth > parent.clientWidth ||
        textEl.scrollHeight > parent.clientHeight) &&
      size > minSize
    ) {
      size -= 1;
      textEl.style.fontSize = size + "px";
    }
  }, [text]);

  return (
    <div
      ref={containerRef}
      style={{
        width: "100%",
        height: "auto",
        textAlign: "center",
        fontWeight:"bold",
        overflow: "visible",
        lineHeight: "1.2",
      }}
    >
      <span ref={textRef} style={{ display: "inline-block", whiteSpace: "nowrap" }}>
        {text}
      </span>
    </div>
  );
}
