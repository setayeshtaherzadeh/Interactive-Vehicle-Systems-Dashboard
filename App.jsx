import { useState, useMemo } from "react";
import SpeedSlider from "./components/SpeedSlider";
import SpeedChart from "./components/SpeedChart";
import InsightBox from "./components/InsightBox";
import { generateData } from "./utils/generateData";

export default function App() {
  const [speed, setSpeed] = useState(80);

  const data = useMemo(() => generateData(speed), [speed]);

  return (
    <div style={styles.container}>
      <h1>🚗 Vehicle Speed Simulation</h1>
      <p>Interactive data storytelling dashboard</p>

      <SpeedSlider speed={speed} setSpeed={setSpeed} />

      <SpeedChart data={data} />

      <InsightBox speed={speed} />
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "sans-serif",
    padding: 20,
    maxWidth: 900,
    margin: "0 auto",
  },
};
