import './styles/App.css';
import Navbar from './components/Navbar';
import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';
import References from './pages/References';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Admin from "./pages/admin/Admin";
import Footer from "./components/Footer";
import ProjectsList from "./pages/admin/ProjectsList";
import ProjectsForm from "./pages/admin/ProjectsForm";

// app page
import { Routes, Route } from 'react-router-dom'
function App() {
  return (
    <div>

      {/* Navigation bar */}
      <Navbar />

      {/* Routes to each page */}
      <Routes>
        <Route path= "/" element = {<Home/>}/>
        <Route path= "/about" element = {<About/>}/>
        <Route path= "/contact" element = {<Contact/>}/>
        <Route path= "/projects" element = {<Projects/>}/>
        <Route path= "/references" element = {<References/>}/>
        <Route path= "/services" element = {<Services/>}/>
        <Route path= "/admin" element = {<Admin/>}/>

        {/* Adding new routes to forms and pages */}
        <Route path = "/admin/projects" element = {<ProjectsList/>}/>
        <Route path = "/admin/projects/add" element = {<ProjectsForm/>}/>
        <Route path = "/admin/projects/edit/:id" element = {<ProjectsForm/>}/>
      </Routes>

      {/* Footer bar */}
      <Footer />

    </div>

  );
}

export default App
