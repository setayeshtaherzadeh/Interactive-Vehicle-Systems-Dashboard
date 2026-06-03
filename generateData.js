export function generateData(speed) {
  const data = [];

  for (let t = 0; t <= 10; t++) {
    const decay = Math.max(0, speed - t * 6);

    data.push({
      time: t,
      speed: decay,
      temp: 70 + t * (speed / 25),
      fuel: 5 + (decay / 50),
    });
  }

  return data;
}
