import { useNavigate } from "react-router-dom";

//admin page
export default function Admin() {

    const navigate = useNavigate() 
    
    return (
        <div>
        <h1>Admin</h1>
        <div className = "homeContainer">
            <div className = "content">
                <p> Content TBD </p> </div>
        </div>

        {/*Buttons for user to navigate through pages */}
            <div className = "redirects">
                <button onClick={() => navigate("/about")}>
                    Manage About Me
                </button>
                <button onClick={() => navigate("/projects")}>
                    Manage My Previous Projects
                </button>
                <button onClick={() => navigate("/contact")}>
                    Manage Contact Me
                </button>
                <button onClick={() => navigate("/references")}>
                    Manage My References
                </button>
                <button onClick={() => navigate("/services")}>
                    Manage Other Services Offered
                </button>

                </div>
            
        </div>
        
    );
}