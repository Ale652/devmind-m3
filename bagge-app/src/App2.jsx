import React from "react";
import "./App.css";
import "./LogoComponent";
import Badge from "./Badge.jsx";
import BadgeNew from "./BadgeNew";
 
class App2 extends React.Component {
  render() {
    return (
      <div id="container">
        <BadgeNew
          firstName="Johhny"
          lastName="Depp"
          avatarImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIMJf32XCdIMPR005aLZbkk5TldBubjW2CfA&usqp=CAU"
          birthDate = "29.05.1978"
          smallDescription = "smallDescription"
          hobbies = '["running", "cooking", "learning"]'
        />
        <BadgeNew
          firstName="Tommy"
          lastName="Williams"
          avatarImage="https://thumbs.dreamstime.com/b/default-avatar-photo-placeholder-profile-icon-eps-file-easy-to-edit-default-avatar-photo-placeholder-profile-icon-124557887.jpg"
          birthDate = "08.05.1978"
          smallDescription = "smallDescription2"
          hobbies = '["running2", "cooking2", "learning2", "Java"]'
        />
      </div>
    );
  }
}
 
export default App2;

