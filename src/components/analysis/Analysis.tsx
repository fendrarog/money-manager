import classNames from "classnames";
import { useState } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LabelList,
} from "recharts";

const data = [
  {
    name: "January",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "February",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "March",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "April",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "May",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "June",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "July",
    uv: 4490,
    pv: 7300,
    amt: 2100,
  },
  {
    name: "August",
    uv: 1490,
    pv: 3300,
    amt: 2100,
  },
  {
    name: "September",
    uv: 2490,
    pv: 8300,
    amt: 2100,
  },
  {
    name: "October",
    uv: 1490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "November",
    uv: 590,
    pv: 1300,
    amt: 2100,
  },
  {
    name: "December",
    uv: 2490,
    pv: 7300,
    amt: 2100,
  },
];

const Analysis: React.FC = () => {
  const [activeIndex, setIndex] = useState(-2);

  const handleClick = (data: any, index: number) => {
    setIndex(index);
  };

  const renderCustomizedLabel = (props: any) => {
    const { x, y, width, value, index } = props;

    if (index === activeIndex) {
      return (
        <g>
          <text
            x={x + width / 2}
            y={y - 10}
            style={{ fill: "#fff" }}
            textAnchor="middle"
            dominantBaseline="middle"
          >
            {value}
          </text>
        </g>
      );
    }
  };

  //Массив в элементе которого сумма расходов всех категорий
  const numberData = data
    .map((item) =>
      Object.values(item).filter(
        (item): item is number => typeof item === "number"
      )
    )
    .map((item) => item.reduce((a, b) => a + b, 0));

  //Массив с объектами {_имя, сумма всех расходов за период _имя}
  const newData = data.map((item, index) => ({
    name: item.name,
    pv: numberData[index],
  }));

  console.log(newData);
  return (
    <section className={classNames("page__home", "home")}>
      <div className="home__container">
        <div className="home__body">
          <ResponsiveContainer width="100%" aspect={2}>
            <BarChart
              width={500}
              height={300}
              data={newData}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid vertical={false} opacity={0.1} />
              <XAxis dataKey="name" axisLine={false} tickLine={false} />
              <YAxis axisLine={false} tickLine={false} tickCount={8} />
              <Tooltip
                contentStyle={{ color: "aqua", backgroundColor: "green" }}
                cursor={{
                  fill: "transparent",
                }}
                /* labelStyle={{ color: "red", backgroundColor: "aqua" }}
                wrapperStyle={{ color: "red", border: "5px solid gold" }}
                itemStyle={{
                  color: "gold",
                  backgroundColor: "red",
                  border: "1px solid green",
                }} */
                /* allowEscapeViewBox={{ x: false, y: false }}
                position={{ x: 100, y: 40 }}
                isAnimationActive={true}
                animationDuration={1500} */
              />
              <Legend />
              <Bar
                onClick={handleClick}
                dataKey="pv"
                stackId="a"
                fill="#ffb6c1"
              >
                <LabelList
                  dataKey="pv"
                  position="top"
                  style={{ fill: "#ffb6c1" }}
                  offset={10}
                  content={renderCustomizedLabel}
                />
                {newData.map((entry, index) => (
                  <Cell
                    cursor="pointer"
                    fill={
                      activeIndex === -2
                        ? "#ffb6c1"
                        : index === activeIndex
                        ? "#8884d8"
                        : "#ffb6c1"
                    }
                    key={`cell-${index}`}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
};

export default Analysis;
