import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App__wrapper">
      <main>
        <div className="App">
          <div className="Physics">
            <div className="Physics__A">A</div>
            <div className="Physics__divider" />
            <div className="Physics__B">B</div>
          </div>
        </div>
        <button>STOP</button>
      </main>
    </div>
  );
}
