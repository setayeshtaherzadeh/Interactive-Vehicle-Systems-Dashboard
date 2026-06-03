export default function InsightBox({ speed }) {
  let title = "";
  let desc = "";

  if (speed > 140) {
    title = "High Performance State";
    desc =
      "Vehicle is operating under high load. Fuel consumption and engine temperature are increasing rapidly.";
  } else if (speed > 80) {
    title = "Balanced Driving Mode";
    desc =
      "System is maintaining stable performance with moderate energy consumption.";
  } else {
    title = "Efficiency Mode";
    desc =
      "Low-speed operation allows optimal fuel efficiency and reduced thermal load.";
  }

  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}
