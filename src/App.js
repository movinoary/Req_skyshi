import { Routes, Route, useLocation } from "react-router-dom";
import * as Assets from "./Assets";
import * as Components from "./Components";
import * as Page from "./Page";

function App() {
  const location = useLocation();

  return (
    <>
      <Components.Nav />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Page.Home />} />
        <Route path="detail-activity/:id/*" element={<Page.DetailActivity />} />
        <Route
          path="*"
          element={<Components.Blank image={Assets.BlankOne} />}
        />
      </Routes>
    </>
  );
}

export default App;
