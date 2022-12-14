import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import Student from './pages/Student';
import Login from './pages/Login';
import AddStudent from './pages/AddStudent';
import Delete from './pages/Delete';
import Test from './pages/Test';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs/:id" element={<Blogs />} />
          <Route path="delete/:id" element={<Delete />} />
          {/* <Route path="blogs/:id" render={(props) => <Blogs {...props} />}/>  */}
          <Route path="contact" element={<Contact />} />
          <Route path="students" element={<Student />} />
          <Route path="login" element={<Login />} />
          <Route path="add_students" element={<AddStudent />} />
          <Route path="test" element={<Test/>} />
        </Route>
      </Routes>
    </BrowserRouter> 
    </>
  );
}

export default App;
