import { Routes, Route } from "react-router-dom";
import Navbar from "./compontes/Navbar.tsx";
import Projects from "./pages/project.tsx";
import About from "./pages/About.tsx";
import Contact from "./pages/contact.tsx";
import Home from "./compontes/home.tsx";

const App = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white p-4">
            {/* Main container with glassmorphism effect */}
            <div className="max-w-7xl mx-auto backdrop-blur-lg bg-white/5 rounded-3xl shadow-2xl overflow-hidden border border-white/10">
                <Navbar />

                {/* Content area with subtle animation */}
                <div className="p-6 md:p-8 transition-all duration-300">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </div>

                {/* Footer */}
                <footer className="p-4 text-center text-sm text-white/70 border-t border-white/10">
                    © {new Date().getFullYear()} S.A.A. Ushani | Full Stack Developer
                </footer>
            </div>
        </div>
    );
};

export default App;
/*const App = () => {
    return (
        <div className="min-h-screen bg-black text-white p-4">
            <div className="border border-purple-500 rounded-2xl p-4">
                <Navbar />
                <div className="border border-purple-500 rounded-2xl p-6 mt-6">
                    <Routes>
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/" element={<Projects />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
};

export default App;*/
