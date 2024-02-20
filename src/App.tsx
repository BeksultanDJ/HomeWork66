import './App.css'
import { Route, Routes } from "react-router-dom";
import DisplayMeal from "./components/DisplayMeal.tsx";
import NewMeal from "./components/NewMeal.tsx";
import ToolBar from "./components/ToolBar/ToolBar.tsx";

function App() {


  return (
    <>
        <ToolBar/>

        <div>
            <Routes>
                <Route path="/" element={<DisplayMeal/>}/>
                <Route path="/NewMeal" element={<NewMeal />} />

            </Routes>
        </div>
    </>
  )
}

export default App
