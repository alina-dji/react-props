import React from 'react';
import Profile from './profile/Profile';

function App() {
  const infos = {
    fullName: "John Doe",
    profession: "Web Developer",
    bio: "Cat lover, bookworm, apple pie fanatic and nature enthousiast :)",
    image: "https://randomuser.me/api/portraits/men/32.jpg" 
  }
  const handleName = name => alert(name);
  return (
    <div className="App">
      <Profile 
        fullName = {infos.fullName} 
        profession = {infos.profession}
        bio = {infos.bio}
        handleName={handleName}>
          {infos.image}
      </Profile>
    </div>
  );
}

export default App;

/*
-Create a project using create-react-app.
-Create profile folder under src.
-Create Profile component under /profile.

-Profile component get data (fullName, bio, profession) as props, and get image as 
children props, and function handleName function as props that alert name 
of profile user.

-Define default props for Profile component. 
-Use PropsType to check props.  
-Use inline style.
*/