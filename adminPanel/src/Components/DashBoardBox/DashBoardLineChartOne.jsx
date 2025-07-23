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
    name: "Jan",
    TotalUsers: 4000,
    TotalSales: 2400,
    amt: 2400,
  },
  {
    name: "Feb",
    TotalUsers: 3000,
    TotalSales: 1398,
    amt: 2210,
  },
  {
    name: "Mar",
    TotalUsers: 2000,
    TotalSales: 9800,
    amt: 2290,
  },
  {
    name: "April",
    TotalUsers: 2780,
    TotalSales: 3908,
    amt: 2000,
  },
  {
    name: "May",
    TotalUsers: 1890,
    TotalSales: 4800,
    amt: 2181,
  },
  {
    name: "June",
    TotalUsers: 2390,
    TotalSales: 3800,
    amt: 2500,
  },
  {
    name: "July",
    TotalUsers: 3490,
    TotalSales: 4300,
    amt: 2100,
  },
  {
    name: "Aug",
    TotalUsers: 2780,
    TotalSales: 3908,
    amt: 2000,
  },
  {
    name: "Sep",
    TotalUsers: 3000,
    TotalSales: 1398,
    amt: 2210,
  },
  {
    name: "Oct",
    TotalUsers: 2780,
    TotalSales: 3908,
    amt: 2000,
  },
  {
    name: "Nov",
    TotalUsers: 2390,
    TotalSales: 3800,
    amt: 2500,
  },
  {
    name: "Dec",
    TotalUsers: 4000,
    TotalSales: 2400,
    amt: 2400,
  },
];

const DashBoardLineChartOne = () => {
  return (
    <>
      <div className="card my-4 h-[625px] rounded-md bg-white p-5 shadow-md">
        <div className="">
          <div className="px-5 py-5 pb-0">
            <h3 className="text-[20px] font-[600]">
              Total Users & Total Sales
            </h3>
          </div>
          <div className="flex gap-3 px-5 py-5 pt-0">
            <p className="flex items-center gap-3">
              <span className="block h-[10px] w-[10px] rounded-full bg-green-600"></span>
              <span>Total Users</span>
            </p>
            <p className="flex items-center gap-3">
              <span className="block h-[10px] w-[10px] rounded-full bg-primary"></span>
              <span>Total Sales</span>
            </p>
          </div>
        </div>
        <div className="mb-2 h-[500px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              width={1000}
              height={400}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="none" />
              <XAxis dataKey="name" tick={{ fontSize: 14 }} />
              <YAxis tick={{ fontSize: 14 }} />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="TotalSales"
                stroke="#3872fa"
                activeDot={{ r: 8 }}
                strokeWidth={3}
              />
              <Line
                type="monotone"
                dataKey="TotalUsers"
                stroke="#16a34a"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
};
export default DashBoardLineChartOne;
