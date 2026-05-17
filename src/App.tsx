import "./App.css";
import BentoAboutSection from "./components/sections/BentoAboutSection";
import HeroSection from "./components/sections/HeroSection";
import ProjectSection from "./components/sections/ProjectSection";
import NavBar from "./components/ui/NavBar";

function App() {
  return (
    <div className="bg-zinc-100 dark:bg-zinc-900 min-h-screen font-sans">
      <main className="w-full">
        <HeroSection />
        <BentoAboutSection />
        {/* <AboutSection /> */}
        {/*<TechSection />*/}
        <ProjectSection />
      </main>
      <NavBar />
    </div>
  );
}

export default App;
