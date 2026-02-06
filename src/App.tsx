import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import StakePage from "./pages/StakePage";
import LendBorrowPage from "./pages/LendBorrowPage";
import BridgePage from "./pages/BridgePage";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/stake" element={<StakePage />} />
        <Route path="/lend-borrow" element={<LendBorrowPage />} />
        <Route path="/bridge" element={<BridgePage />} />
      </Routes>
    </Layout>
  );
}
