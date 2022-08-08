import { Routes, Route } from "react-router-dom";
import * as Assets from "./Assets";
import * as Components from "./Components";
import * as Page from "./Page";

function App() {
  return (
    <>
      <Components.Nav />
      <Routes>
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
