import { useEffect, useState } from "react";
import { PieChart, Pie, Tooltip, Legend } from "recharts";
import usersJson from "../Data/users.json";
const ActiveUsers = () => {
  const [activeUsers, setActiveUsers] = useState(0);
  const [unactiveUsers, setUnactiveUsers] = useState(0);
  const getActiveUsers = (num) => {
    return usersJson.filter((user) => user.active == num);
  };
  useEffect(() => {
    setActiveUsers(getActiveUsers(1));
    setUnactiveUsers(getActiveUsers(0));
  }, []);

  const data = [
    { name: "Active", value: activeUsers.length },
    { name: "Unactive", value: unactiveUsers.length },
  ];

  return (
    <PieChart
      width={300}
      height={300}
      margin={{
        top: 10,
        right: 0,
        left: 0,
        bottom: 0,
      }}
    >
      <Pie
        dataKey="value"
        isAnimationActive={true}
        data={data}
        fill="#4b4978"
        label
      />
      <Legend verticalAlign="bottom" height={12} />
      <Tooltip />
    </PieChart>
  );
};

export default ActiveUsers;
