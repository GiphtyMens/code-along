import { useEffect, useState } from "react";
import ProfileCard from "./component/ProfileCard";
import ProfileForm from "./component/ProfileForm";

function App() {
  const [allProfile, setAllProfile] = useState([
    {firstName: "Hannah",
    lastName: "Montana",
    email: "hannah.montanah@gmail.com",
    phone: "+233 000 000 555"}
  ]);

  const submit = (profile) => {
    const arr = allProfile;
    arr.push(profile);
    setAllProfile(arr);
  }

  return (
    <div>
      <h1> Writer Profiles </h1>
      <div className="container">
       <ProfileForm submit={submit} />
        {allProfile.map((writer) => (
          <ProfileCard key={writer.id} writer={writer} />
        ))}
      </div>
    </div>
  );
}

export default App;
