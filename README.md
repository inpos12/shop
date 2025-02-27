# PHARMACY SHOP (React)
# 프로젝트 소개
React를 사용하면 상태관리가 용이하고 UI를 효율적으로 재사용할수 있어서 (React, firebase) 를  활용하여 쇼핑몰 사이트 를 제작하였습니다.
# 기술
+ ### Front-end
  + React, JavaScript, Css
+ ### Back-end
  + FireStore
+ ### DataBase
  + Firetore Database  
+ ### Library
  + React Router, Styled-Components, Firebase, bootstrap
# Library
### Styled Components
+ 각 스타일을 컴포넌트화하여 유지보수성을 높이고 코드의 중복을 줄이기 위해 사용하였습니다.
### React Router
+ 페이지 전환 시 새로고침 없이 빠르게 이동할 수 있게 사용하였습니다.
### Firebase
+ 서버 없이 클라우드 기반으로 데이터를 관리하기 위해 사용하였습니다.
### Bootstrap 
+ 반응형 디자인을 손쉽게 구현하고, UI 스타일링을 간편하게 하기 위해 사용하였습니다.
# 사이트 소개
+ ### 반응형 디자인
  + **BootStrap** 를 사용하여 다양한 화면 크기에서 최적화된 레이아웃을 제공하도록 설계하였습니다.
  + 화면 크기에 따라 콘텐츠의 크기, 배치, 스타일을 동적으로 조정하여 모바일, 태블릿, 데스크탑 등 다양한 기기에서 편리하게 사용할 수 있도록 구현하였습니다.
  + 화면 크기에 맞춰 텍스트 크기, 버튼 크기, 이미지 크기 등을 조정하였으며, 이를 통해 사용자 경험을 향상시켰습니다.
+ ### Mobile Navbar
  +  Mobile Navbar를 추가하여 작은 화면에서도 손쉽게 메뉴를 접근할 수 있도록 구현하였습니다.
  +  메뉴바는 화면 크기에 따라 **햄버거 메뉴(Hamburger menu)** 로 변환되며, 클릭 시 메뉴가 표시되어 사용자가 편리하게 탐색할 수 있습니다.
+ ### 회사 위치
  + **Kakao Maps API**를 활용하여 지도에서 회사의 위치를 마커로 표시하였습니다.
+ ### 어드민페이지
  +  관리자의 UID와 로그인한 사용자의 UID를 비교하여 어드민 여부를 확인하고, 어드민 페이지 접근을 제한했습니다.
  +  관리자만 어드민 페이지에 접근할 수 있으며, 비로그인 사용자나 일반 사용자는 메인 화면으로 리다이렉트됩니다.- 관리자가 아닌 경우 어드민 페이지의 버튼 클릭 방지 기능을 추가했습니다.
  +  Firestore에서 읽어온 데이터를 수정할 수 있도록 데이터 추가 및 수정 기능을 구현했으며, 빈 값 입력 시 기본값을 설정했습니다.
