# 연락처 기억 애플리케이션 💟

이 프로젝트는 React와 Redux를 사용하여 만든 간단한 연락처 관리 애플리케이션입니다. 사용자는 이름과 전화번호를 입력하여 새로운 연락처를 추가할 수 있고, 이름으로 연락처를 검색하고 연락처 목록을 볼 수 있습니다.

![contactUs](https://github.com/sonya030/remember_contact/assets/148966629/93249903-06b6-4d9c-bc17-fd4d7653dee1)
## :rocket: 기능

1. **연락처 등록 폼:** 사용자는 이름과 전화번호를 입력하여 새로운 연락처를 추가할 수 있습니다.
2. **연락처 목록:** 연락처 목록을 표시하며 이름으로 연락처를 필터링할 수 있는 검색 창이 있습니다.
3. **검색 기능:** 사용자는 검색 창에 이름을 입력하여 연락처를 검색할 수 있습니다.
4. **아이템 개수 표시:** 현재 목록에 표시된 연락처의 개수를 보여줍니다.

## :hammer_and_wrench: 사용된 기술

- **React**: UI 구성 및 상태 관리
- **Redux**: 애플리케이션 상태 관리
- **CSS**: 스타일링 (App.css로 스타일링)

## :globe_with_meridians: 배포

데모파일은 [이곳](https://remember-contact.netlify.app/)에서 확인할 수 있습니다.

## :file_folder: 폴더 구조

```
├── public
│   ├── index.html
├── src
│   ├── components
│   │   ├── ContactForm.js
│   │   ├── ContactItem.js
│   │   ├── ContactList.js
│   │   ├── SearchBox.js
│   ├── style
│   │   ├── App.css
│   ├── reducer
│   │   ├── reducer.js
│   ├── App.js
│   ├── index.js
├── package.json
```
