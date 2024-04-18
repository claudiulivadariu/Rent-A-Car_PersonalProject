import Footer from "../../components/Footer/footer";
import NavBar from "../../components/NavBar";
import { Outlet } from "react-router-dom";
function App() {
    return (
        <div className="w-full h-full bg-slate-800 wrapper">
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    );
}

export default App;
