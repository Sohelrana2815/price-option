import { LineChart as LChart, Line, XAxis, YAxis } from "recharts";
const LineChart = () => {
  const subjectMarkData = [
    {
      id: 1,
      name: "Alice",
      math_mark: 85,
      chemistry_mark: 78,
      physics_mark: 82,
    },
    {
      id: 2,
      name: "Bob",
      math_mark: 78,
      chemistry_mark: 85,
      physics_mark: 76,
    },
    {
      id: 3,
      name: "Charlie",
      math_mark: 92,
      chemistry_mark: 88,
      physics_mark: 90,
    },
    {
      id: 4,
      name: "David",
      math_mark: 68,
      chemistry_mark: 72,
      physics_mark: 65,
    },
    {
      id: 5,
      name: "Emma",
      math_mark: 75,
      chemistry_mark: 70,
      physics_mark: 80,
    },
    {
      id: 6,
      name: "Frank",
      math_mark: 83,
      chemistry_mark: 85,
      physics_mark: 78,
    },
    {
      id: 7,
      name: "Grace",
      math_mark: 88,
      chemistry_mark: 92,
      physics_mark: 85,
    },
    {
      id: 8,
      name: "Hannah",
      math_mark: 90,
      chemistry_mark: 84,
      physics_mark: 72,
    },
  ];
  return (
    <div>
      <LChart width={500} height={500} data={subjectMarkData}>
        <XAxis dataKey="name"></XAxis>
        <YAxis></YAxis>
        <Line dataKey="math_mark" stroke="red"></Line>
        <Line dataKey={"physics_mark"} stroke="yellow"></Line>
      </LChart>
    </div>
  );
};

export default LineChart;
