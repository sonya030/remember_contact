import React from "react";

const ContactItem = ({ item }) => {
  return (
    <div className="ContactItem">
      <div className="ImgWrap">
        <img
          src={`${process.env.PUBLIC_URL}/contactProfile.png`}
          alt="profile"
        />
      </div>
      <div className="ContactItemData">
        <h5>{item.name}</h5>
        <p>{item.phoneNumber}</p>
      </div>
    </div>
  );
};

export default ContactItem;
