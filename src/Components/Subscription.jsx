import { useEffect, useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import subscriptions from "../Data/subscriptions.json";
const Subscription = () => {
  const [planOneUsers, setPlanOneUsers] = useState([]);
  const [planTwoUsers, setPlanTwoUsers] = useState([]);
  const [planThreeUsers, setPlanThreeUsers] = useState([]);
  const [planSixUsers, setPlanSixUsers] = useState([]);
  const [planUnlimitedUsers, setPlanUnlimitedUsers] = useState([]);
  const getPlanUsers = (plan) => {
    return subscriptions.filter((subscription) => subscription.package == plan);
  };
  useEffect(() => {
    setPlanOneUsers(getPlanUsers("Plan 1"));
    setPlanTwoUsers(getPlanUsers("Plan 2"));
    setPlanThreeUsers(getPlanUsers("Plan3"));
    setPlanSixUsers(getPlanUsers("Plan 6"));
    setPlanUnlimitedUsers(getPlanUsers("Plan Unlimited"));
  }, []);
  const plans = subscriptions.map((subscription) => subscription.package);
  const uniquePlans = [...new Set(plans)];
  const data = [
    {
      name: uniquePlans[0],
      Users: planOneUsers.length,
      pv: 50,
    },
    {
      name: uniquePlans[1],
      Users: planTwoUsers.length,
      pv: 50,
    },
    {
      name: uniquePlans[2],
      Users: planThreeUsers.length,
      pv: 50,
    },
    {
      name: uniquePlans[3],
      Users: planSixUsers.length,
      pv: 50,
    },
    {
      name: uniquePlans[4],
      Users: planUnlimitedUsers.length,
      pv: 50,
    },
    {
      name: uniquePlans[5],
      Users: planOneUsers.length,
      pv: 50,
    },
  ];
  return (
    <AreaChart
      width={850}
      height={330}
      data={data}
      margin={{
        top: 15,
        right: 0,
        left: 0,
        bottom: 0,
      }}
    >
      <CartesianGrid />
      <XAxis dataKey="name" />
      <YAxis dataKey="pv" />
      <Tooltip />
      <Area type="monotone" dataKey="Users" stroke="#576ba8" fill="#576ba8" />
    </AreaChart>
  );
};

export default Subscription;
