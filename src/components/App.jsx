import React from "react";
import Card from "./Card.jsx";
import Avatar from "./Avatar.jsx";
import contacts from "../contact.js";

function App() {
  return (
    <div>
      <h1 className="heading">FareFirst</h1>
      <Avatar imgURL="https://www.farefirst.com/blog/assets/authors/yajnesh-b3395e6e2dc1ca7e834df1a076bf25d3426581062f4d1b1eb70dd95646aae01d.jpg" />
      <Card
        name={contacts[0].name}
        imgURL={contacts[0].imgURL}
        phone={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        imgURL={contacts[1].imgURL}
        phone={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        imgURL={contacts[2].imgURL}
        phone={contacts[2].phone}
        email={contacts[2].email}
      />
      <Card
        name={contacts[3].name}
        imgURL={contacts[3].imgURL}
        phone={contacts[3].phone}
        email={contacts[3].email}
      />
      <Card
        name={contacts[4].name}
        imgURL={contacts[4].imgURL}
        phone={contacts[4].phone}
        email={contacts[4].email}
      />
    </div>
  );
}

export default App;