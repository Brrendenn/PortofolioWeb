import "./App.css";
import AboutSection from "./components/sections/AboutSection";
import HeroSection from "./components/sections/HeroSection";
import ProjectSection from "./components/sections/ProjectSection";
import TechSection from "./components/sections/TechSection";
import NavBar from "./components/ui/NavBar";

function App() {
  return (
    <div className="bg-zinc-100 dark:bg-zinc-900 min-h-screen font-sans">
      <main className="w-full">
        <HeroSection />
        <AboutSection />
        <TechSection />
        <ProjectSection />
      </main>
      <NavBar />
    </div>
  );
}

export default App;
