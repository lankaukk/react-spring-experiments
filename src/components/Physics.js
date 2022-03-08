import React from "react";
import { useSpring, animated } from "react-spring";
// import "../styles.css";

export default function App() {
  const [props, , stop] = useSpring(() => ({
    to: async (next) => {
      while (true) {
        await next({ width: 0 });
        await next({ width: 100 });
      }
    },
    from: { width: 0 },
    config: { duration: 1000 }
  }));
  return (
    <div className="App__wrapper">
      <main>
        <div className="App">
          <div className="Physics">
            <div className="Physics__A">A</div>
            <animated.div
              className="Physics__divider"
              style={{ width: props.width.interpolate((w) => `${w}%`) }}
            />
            <div className="Physics__B">B</div>
          </div>
        </div>
        <button
          onClick={() => {
            stop();
          }}
        >
          STOP
        </button>
      </main>
    </div>
  );
}
