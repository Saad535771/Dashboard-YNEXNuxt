
const scores = [
  { name: "Attack", max: 20, value: 19 },
  { name: "Defense", max: 20, value: 9 },
  { name: "Speed", max: 20, value: 18 },
  { name: "Strength", max: 20, value: 16 },
  { name: "Endurance", max: 20, value: 16 },
  { name: "Agility", max: 20, value: 20 }
];
export default function getRadarData() {
    return {
      animation: false,
      backgroundColor : 'transparent',
      title: {
        text: "Player Ability"
      },
      tooltip: {},
      radar: {
        indicator: scores.map(({ name, max }, index) => {
          if (index === 0) {
            return { name, max, color: "goldenrod" };
          }
          return { name, max };
        })
      },
      series: [
        {
          name: "Value",
          type: "radar",
          data: [{ value: scores.map(({ value }) => value) }]
        }
      ]
    };
  }