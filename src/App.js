import { useEffect, useState } from "react";
import "./App.css";
import LineChart from "./components/LineChart";

const v1 = {
  link: "http://localhost:4000/stats/v1Annually",
  xField: "timeInAnnual",
  yField: "globaAnnual",
  version: "Global Annual",
};

const v2 = {
  link: "http://localhost:4000/stats/v2",
  xField: "time",
  yField: "temperature",
  version: "2000 year temperature",
};

function App() {
  const [data, setData] = useState({ v1: [], v2: [] });

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = async () => {
    const v1Res = await fetch(v1.link);
    const v1Data = await v1Res.json();

    const v2Res = await fetch(v2.link);
    const v2Data = await v2Res.json();

    setData(() => ({
      v1: v1Data.data.map((item) => ({
        id: item._id,
        label: item[v1.xField],
        value: item[v1.yField],
        version: v1.version,
      })),
      v2: v2Data.data.map((item) => ({
        id: item._id,
        label: item[v2.xField],
        value: item[v2.yField],
        version: v2.version,
      })),
    }));
  };

  return (
    <div>
      Web DEV V2
      <LineChart
        data={[...data.v2, ...data.v1]}
        xField="label"
        yField="value"
      />
    </div>
  );
}

export default App;
