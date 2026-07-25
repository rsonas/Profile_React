import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/AdminProjects.css"

export default function ProjectsList() {

    const navigate = useNavigate();

    const [projects, setProjects] = useState([
        {
            id: 1,
            title: "Java: Circularly Linked Lists",
            description: "In this program our task was to create a circularly linked list, duplicate it, and rotate it so the starting position was not the same. We then needed to create a method in order to test if these two linked lists were the same. When creating the method if you do not take the different starts into account, your method will give the wrong answer as the starting element is different. This method first searches through both lists and loops comparing the first element of the first list to each element in the second. Once it finds a match, it will then loop through the lists and compare both elements to check if they are in the same order. If they are all the same, the Boolean method returns true. if not, it returns false",
            dateCompleted: "Completed: May 31st, 2026"
        },
        {
            id: 2,
            title: "Java Code Cleanup",
            description: "In this exercise our task was to take existing code, and use eclipses debugging functions to test the code for error. The programs purpose is to book flights for passengers. This program gives the option of business/economy, checking if they are a frequent flyer (no benefits in this version yet, will come in another update), and check to see if they are eligible for an employee discount. The program had many issues, mainly in the sellTIcket() function like not adding the discount correctly, repeating prompts multiple times in the same line, and not saving any inputted passenger information which allowed you to endlessly buy and never save seats. The method was tested and now runs as intended",
            dateCompleted: "Completed: June 5th, 2026"
        },
        {
            id: 3,
            title: "Python Pizza Exercise",
            description: "This was an exercise in familiarizing ourslves with the structure of classes in python. We were given expected output and needed to write a program in python that replicated that output exactly. In the class Pizza we are able to create objects to modify the topings and size to get different prices. We can also create mew instances if we want to make another pizza, as well as change attributes about the one we have created",
            dateCompleted: "May 23, 2023"
        },
    ]); 

    function deleteProject(id) {

    const updatedProjects = projects.filter(
        project => project.id !== id
    );

    setProjects(updatedProjects);
    }

    return (
         <div className = "projectList">

            <h1>Manage Projects</h1>

            <div className = "addButton">
                <button onClick={() => navigate("/admin/projects/add")} className = "addProject">
                    Add Project
                </button>

            </div>

            {
                projects.map(project => (
                    <div key ={project.id} className = "projectContent">
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                        <p>{project.dateCompleted}</p>

                    <div className = "editAndDelete">
                        <button onClick={() => navigate(`/admin/projects/edit/${project.id}`)}>
                            Edit
                        </button>

                        <button onClick={() => deleteProject(project.id)}>
                            Delete
                        </button>

                    </div>
                        
                    </div>

                ))
            }

         </div>
    );

}