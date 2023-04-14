import "./App.css";
import ProfilePhoto from "./Component/Profil/ProfilePhoto";
import Address from "./Component/Profil/Address";
import FullName from "./Component/Profil/FullName";

function App() {
  return (
    <div className="App">
      <ProfilePhoto />
      <FullName />
      <Address />
    </div>
  );
}

export default App;
