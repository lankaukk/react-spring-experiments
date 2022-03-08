import React from "react";
import { animated, useSpring } from "react-spring";
// import "../styles.css";

export default function App() {
  const [props, set] = useSpring(() => ({ x: 0, y: 0 }));
  return (
    <div className="App__wrapper">
      <main>
        <br></br>
        <div className="">
          <animated.div
            className="Simple"
            onMouseMove={(e) => {
              const { clientX, clientY } = e;
              const { left, top } = e.target.getBoundingClientRect();
              const x = clientX - left;
              const y = clientY - top;

              set({ x, y });
            }}
            style={{
              backgroundPositionX: props.x.interpolate((x) => `${x / 4}%`),
              backgroundPositionY: props.y.interpolate((y) => `${y / 4}%`)
            }}
          />
        </div>
      </main>
    </div>
  );
}
