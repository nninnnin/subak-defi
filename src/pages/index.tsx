import React from "react";
import Layout from "@/components/Layout";

const HomePage = () => {
  return <div role="container">Home page</div>;
};

export default HomePage;

HomePage.getLayout = function (page: React.ReactNode) {
  return <Layout>{page}</Layout>;
};
