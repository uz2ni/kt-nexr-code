# kt-nexr-code
kt nexr 면접 제출 코드 입니다.

### 프로젝트 데모 동영상
https://www.youtube.com/embed/CajLHkQ7PMg

### UI
<div>
편집 페이지<br>
  <img width="500" alt="스크린샷 2019-03-17 오후 9 49 27" src="https://user-images.githubusercontent.com/26621325/54491102-16546200-48ff-11e9-963a-bf39176cb919.png">
<br>
결제 페이지<br>
  <img width="500" alt="스크린샷 2019-03-17 오후 9 50 19" src="https://user-images.githubusercontent.com/26621325/54491103-194f5280-48ff-11e9-8558-e701aad829dd.png">  
</div>

### 코드 내용
* edit (모바일 초대장 편집 플랫폼 UI 동작 코드 입니다.)
  * editForm.jsp
  * edit.js : 편집 시 클릭/데이터 입력 이벤트 함수 호출(on 이벤트 함수), 수정한 form의 값 가져오기 기능(getXxx), 미리보기 iframe 섹션 가져오기 기능 (getSectionXxx)
  * editFunc.js : editForm 에서 수정된 내용에 따라 동작 변경에 대한 기능 정의
  * editFuncSummary.js : editFunc.js 의 일부 기능 코드 (dday, 계좌 선택, 이미지 미리보기, 이미지 리스트화, 설문조사 데이터 가져오기)

* pay (이용료 결제 기능 코드 입니다.)
  * servicePay.jsp
  * paySummary.js : 결제 기능 메인 코드 (완료 클릭 -> requestPay() -> openPay() -> createUrl(), url 기간 연장, point 늘리기, url 중복 체크)
