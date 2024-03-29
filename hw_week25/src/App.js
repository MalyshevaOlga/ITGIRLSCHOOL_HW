
import './App.css';
import React from "react";
import { Chart } from "react-google-charts";
export const data = [
  ["Task", "Hours per Day"],
  ["Work", 11],
  ["Eat", 2],
  ["Commute", 2],
  ["Watch TV", 2],
  ["Sleep", 7],
];

export const options = {
  title: "My Daily Activities",
  is3D: true,
};
export const data1 = [
  ["Language", "Speakers (in millions)"],
  ["Assamese", 13],
  ["Bengali", 83],
  ["Bodo", 1.4],
  ["Dogri", 2.3],
  ["Gujarati", 46],
  ["Hindi", 300],
  ["Kannada", 38],
  ["Kashmiri", 5.5],
  ["Konkani", 5],
  ["Maithili", 20],
  ["Malayalam", 33],
  ["Manipuri", 1.5],
  ["Marathi", 72],
  ["Nepali", 2.9],
  ["Oriya", 33],
  ["Punjabi", 29],
  ["Sanskrit", 0.01],
  ["Santhali", 6.5],
  ["Sindhi", 2.5],
  ["Tamil", 61],
  ["Telugu", 74],
  ["Urdu", 52],
];

export const options1 = {
  title: "Indian Language Use",
  legend: "none",
  pieSliceText: "label",
  slices: {
    4: { offset: 0.2 },
    12: { offset: 0.3 },
    14: { offset: 0.4 },
    15: { offset: 0.5 },
  },
};
export const data2 = [
  ["Pac Man", "Percentage"],
  ["", 75],
  ["", 25],
];

export const options2 = {
  legend: "none",
  pieSliceText: "none",
  pieStartAngle: 135,
  tooltip: { trigger: "none" },
  slices: {
    0: { color: "yellow" },
    1: { color: "transparent" },
  },
};
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"700px"}
    />
    <Chart
      chartType="PieChart"
      data={data1}
      options={options1}
      width={"100%"}
      height={"700px"}
    />
    <Chart
      chartType="PieChart"
      data={data2}
      options={options2}
      width={"100%"}
      height={"700px"}
    />
      </header>
    </div>
  );
}

export default App;
