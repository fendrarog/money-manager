import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Transactions from "./components/transactions/Transactions";
import Stocks from "./components/stocks/Stocks";
import Analysis from "./components/analysis/Analysis";
import Settings from "./components/settings/Settings";
import NotFoundPage from "./components/notFoundPage/NotFoundPage";
import Layout from "./components/Layout";
import Login from "./components/login/Login";
import { RequireAuth } from "./hoc/RequireAuth";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="transactions" element={<Transactions />} />
          <Route path="stocks" element={<Stocks />} />
          <Route path="analysis" element={<Analysis />} />
          <Route
            path="settings"
            element={
              <RequireAuth>
                <Settings />
              </RequireAuth>
            }
          />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
