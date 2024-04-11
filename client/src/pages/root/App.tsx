import NavBar from "../../components/NavBar";
import { Outlet } from "react-router-dom";
function App() {
    return (
        <div className="w-screen h-screen bg-[rgb(35,39,47)]">
            <NavBar />
            <Outlet />
        </div>
    );
}

export default App;
