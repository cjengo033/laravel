import logo from './logo.svg';
import './App.css';
import Header from '././component/Header';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import Student from './pages/Student';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs/:id" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="students" element={<Student />} />
        </Route>
      </Routes>
    </BrowserRouter> 
    </>
  );
}

export default App;
