import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

/* components */
import SearchBox from "./SearchBox";
import ContactItem from "./ContactItem";

const ContactList = () => {
  const { contact, keyword } = useSelector((state) => state);
  let [filteredList, setFilteredList] = useState([]);
  useEffect(() => {
    if (keyword !== "") {
      let list = contact.filter((item) => item.name.includes(keyword));

      setFilteredList(list);
    } else {
      setFilteredList(contact);
    }
  }, [keyword]);
  return (
    <div className="ContactList">
      <h3 className="ListTitle">
        ✧ 연락처를 검색하세요&nbsp;<span>ლ(╹◡╹ლ)</span>
      </h3>
      <SearchBox />
      <div className="contact_list">
        <div className="listTop">
          <h6>{filteredList.length}개의 연락처 ❣</h6>
          <button onClick={() => {}}>전체보기</button>
        </div>
        <div className="contactItemWrap">
          {filteredList.map((item) => (
            <ContactItem item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactList;
