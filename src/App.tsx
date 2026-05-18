import "./App.css";
import BentoAboutSection from "./components/sections/BentoAboutSection";
import HeroSection from "./components/sections/HeroSection";
import ProjectSection from "./components/sections/ProjectSection";
import CheckPointNav from "./components/ui/CheckPointNav";

function App() {
  return (
    <div className="bg-zinc-100 dark:bg-zinc-900 min-h-screen font-sans">
      <main className="w-full">
        <CheckPointNav />
        <HeroSection />
        <BentoAboutSection />
        <ProjectSection />
      </main>
    </div>
  );
}

export default App;
