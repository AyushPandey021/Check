import React from "react";

function Home2() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        margin: 0,
        padding: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#111", // dark background for contrast
      }}
    >
      <iframe
        src="https://my.spline.design/happyrobotbutton-cxneCEpzTcHjUiZOmHP5AIVQ/"
        frameBorder="0"
        style={{
          border: "none",
          width: "90%", // leave space on left/right
          maxWidth: "1200px", // prevent it from getting too big on large screens
          height: "80%", // leave space on top/bottom
          borderRadius: "20px", // curved border
          boxShadow: "0 10px 30px rgba(0,0,0,0.6)", // nice shadow effect
        }}
        title="3D Spline Scene"
      ></iframe>
    </div>
  );
}

export default Home2;
