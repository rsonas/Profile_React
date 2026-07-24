import "../styles/Admin.css";
import { useNavigate } from "react-router-dom";

//admin page
export default function Admin() {

    const navigate = useNavigate() 
    
    return (
        <div>
        <h1>Admin</h1>
        <div className = "adnminContainer">
            <h1> HEADER FOR ADMIN DASHBOARD </h1>
            <h3> Info TBD </h3>
        </div>
            
        </div>
        
    );
}