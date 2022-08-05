import { Routes, Route } from "react-router-dom";
import * as Components from "./Components/index";
import * as Page from "./Page/index";

function App() {
  return (
    <>
      <Components.Nav />
      <Routes>
        <Route path="/" element={<Page.Home />} />
        <Route path="detail-activity" element={<Page.DetailActivity />} />
      </Routes>
    </>
  );
}

export default App;
