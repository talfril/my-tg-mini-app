import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { routes } from "@/navigation/routes";
import Layout from "./Layout/Layout";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.Component />}
            />
          ))}
          <Route path='*' element={<Navigate to='/' />} />
        </Route>
      </Routes>
    </Router>
  );
};
