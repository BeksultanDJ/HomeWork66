import {NavLink} from "react-router-dom";

function App() {


    return (
        <>
            <ul className="navbar">
                <li className="nav-item">
                    <NavLink className="navLinks" to="/">Main</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="navLinks" to="/NewMeal">Add New Meal</NavLink>
                </li>
            </ul>
        </>
    )
}

export default App
