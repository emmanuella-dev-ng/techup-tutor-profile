import ProfileHeader from "./components/ProfileHeader";
import ProfileInfo from "./components/ProfileInfo";
import Skills from "./components/Skills";
import ContactButton from "./components/ContactButton";
function App() {
  return (
    <div className="min-h-screen bg-slate-100 py-10 px-4">
      <div className="max-w-lg mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="px-6 pb-8 text-center">
          <ProfileHeader />
          <ProfileInfo />
          <Skills />
          <ContactButton />
        </div>
      </div>
    </div>
  );
}

export default App;