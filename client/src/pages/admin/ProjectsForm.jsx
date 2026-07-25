import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import "../../styles/AdminProjects.css"

export default function ProjectForm() {

    const navigate = useNavigate();
    const { id } = useParams();

    const [project, setProject] = useState({

        title:"",
        description:"",
        dateCompleted:""
    });

    function handleChange(event) {
        
        setProject({

            ...project,
            [event.target.name]:event.target.value
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        
        console.log(project);

        navigate("/admin/projects");
    }

    return(

        <form onSubmit = {handleSubmit}>
            <h1>
                {id ? "Edit Project" : "Add Project"}
            </h1>

            <div className = "formContainer">
                <label>Title </label>
                <input name = "title"
                value = {project.title}
                onChange={handleChange}
                />

                <label>Description </label>
                <input name = "description"
                value = {project.description}
                onChange={handleChange}
                />

                <label>Date COmpleted </label>
                <input name = "dateCompleted"
                value = {project.dateCompleted}
                onChange={handleChange}
                />

                <div className = "submitButton">
                    <button type = "submit">
                    Save Project
                    </button>
                </div>
                
            </div>
        </form>
    );

}