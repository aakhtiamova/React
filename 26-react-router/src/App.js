import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contacts from "./components/Contacts";
import NotFound from "./components/NotFound";
import Courses from "./components/Courses";
import MainLayout from "./layouts/MainLayout";

import SingleCourse from "./components/SingleCourse";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index={true} element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="*" element={<NotFound />} />
            <Route path="courses" element={<Courses />} />
            <Route path="courses/:courseSlug" element={<SingleCourse />} />
          </Route>
        </Routes>
      </div>
      ;
    </BrowserRouter>
  );
}

export default App;
