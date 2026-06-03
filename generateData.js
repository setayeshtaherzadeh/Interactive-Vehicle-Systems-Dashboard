export function generateData(speed) {
  const data = [];

  for (let t = 0; t <= 12; t++) {
    const decay = Math.max(0, speed - t * 5.5);

    data.push({
      time: t,
      speed: decay,
      temp: 65 + t * (speed / 22),
      fuel: 3 + decay / 55,
    });
  }

  return data;
}
