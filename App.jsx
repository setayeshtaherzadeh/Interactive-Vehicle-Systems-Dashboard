src/App.jsx
import { useState, useMemo } from "react";
import SpeedSlider from "./components/SpeedSlider";
import SpeedChart from "./components/SpeedChart";
import InsightBox from "./components/InsightBox";
import { generateData } from "./utils/generateData";

export default function App() {
  const [speed, setSpeed] = useState(90);

  const data = useMemo(() => generateData(speed), [speed]);

  return (
    <div style={{ padding: 24, maxWidth: 1100, margin: "0 auto" }}>
      <h1>🚗 Interactive Vehicle Data Story</h1>
      <p>
        A newsroom-style visualization of how vehicle systems respond to speed
        changes over time.
      </p>

      <div className="grid">
        <SpeedSlider speed={speed} setSpeed={setSpeed} />
        <InsightBox speed={speed} />
      </div>

      <SpeedChart data={data} />
    </div>
  );
}
