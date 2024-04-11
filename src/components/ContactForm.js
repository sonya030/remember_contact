import React, { useState } from "react";
import { useDispatch } from "react-redux";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const dispatch = useDispatch();
  const addContact = (event) => {
    event.preventDefault();
    dispatch({ type: "ADD_CONTACT", payload: { name, phoneNumber } });
  };
  return (
    <div className="ContactForm">
      <h3 className="FormTitle">
        ✧ 연락처를 저장해주세요&nbsp;<span>(╹ڡ╹ )</span>
      </h3>
      <form className="Form" onSubmit={addContact}>
        <label htmlFor="name">·&nbsp;name&nbsp;</label>
        <br />
        <input
          type="text"
          id="name"
          placeholder="이름을 입력해 주세요"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label htmlFor="phoneNumber">·&nbsp;phone-number&nbsp;</label>
        <br />
        <input
          type="number"
          id="phoneNumber"
          placeholder="핸드폰 번호를 입력해주세요"
          value={phoneNumber}
          onChange={(e) => setphoneNumber(e.target.value)}
        />
        <br />
        <button type="submit">
          저장하기 <span>✔</span>
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
