import React from "react";
import Layout from "@/components/Layout";

const DashboardPage = () => {
  return <div>DashboardPage</div>;
};

export default DashboardPage;

DashboardPage.getLayout = function (page: React.ReactNode) {
  return <Layout>{page}</Layout>;
};
