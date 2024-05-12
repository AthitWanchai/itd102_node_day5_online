import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import NoPage from "./components/NoPage";
import Employee from "./components/Employee";
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="employee" element={<Employee />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
      
    </>
  )
}

export default App
