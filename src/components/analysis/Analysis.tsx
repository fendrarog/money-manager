import classNames from "classnames";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
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
  return (
    <section className={classNames("page__home", "home")}>
      <div className="home__container">
        <div className="home__body">
          <ResponsiveContainer width="100%" aspect={3}>
            <LineChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="pv"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
};

export default Analysis;
