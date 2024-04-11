import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

/* components */
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";

/*styles */
import "./Styles/reset.css";
import "./Styles/App.css";
import "./Styles/responsive.css";

/*
1. 왼쪽에는 연락처 등록폼, 오른쪽에는 연락처 아이템과 검색창이 있다.
2. 리스트에 유저 이름과 전화번호를 추가할 수 있다.
3. 리스트에 아이템이 몇개 있는지 보인다.
4. 사용자가 유저 이름을 검색할 수 있다.
*/

function App() {
  return (
    <div className="ContactApp">
      <h1 className="Title">Contact Us :)</h1>
      <div className="ContactWrap">
        <ContactForm />
        <ContactList />
      </div>
    </div>
  );
}

export default App;
