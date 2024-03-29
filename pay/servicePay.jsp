<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

<!-- bootstrap CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

<!-- web-font -->
<!-- Jua --> 
<link href="https://fonts.googleapis.com/css?family=Do+Hyeon|Gugi|Jua|Song+Myung|Sunflower:300" rel="stylesheet">

<!-- custom CSS -->
<link rel="stylesheet" href="css/font.css?ver=1">
<link rel="stylesheet" href="css/sidebar.css?ver=1">
<link rel="stylesheet" href="css/common.css?ver=1">
<link rel="stylesheet" href="css/pay.css">

<title>Insert title here</title>
</head>
<body>
<%
	String headerTitle = "제작 신청하기";
	headerTitle = java.net.URLEncoder.encode(headerTitle, "utf-8");
%>
<jsp:include page="/template/header.jsp" flush="false" >
	<jsp:param name="title" value="<%= headerTitle %>"/>
	<jsp:param name="bg" value="top_2.jpg"/>
</jsp:include>
<jsp:include page="/template/sidebar.jsp" flush="false">
	<jsp:param name="menu" value="menu2"/>
	<jsp:param name="subMenu" value="servicePay"/>
</jsp:include>


<article class="center col-8 text-center">
<!-- servicePay view -->
<form method="POST" id="service-pay-form">
<input type="hidden" id="type" name="paymentType" value="">

    <div class="col">
      <h4 class="title text-left my-2">신청하기</h4>
      <div class="select-box d-flex">
          <div class="select col-sm">
            <img src="./img/pay/type_1.png" width="200" height="160"><br>
            <button type="button" class="btn selectBtn btn1 active" name="1" onclick="insertSelected(1)">모임</button>
          </div>
          <div class="select col-sm">
            <img src="./img/pay/type_2.png" width="200" height="160"><br>
            <button type="button" class="btn selectBtn btn2" name="2" onclick="insertSelected(2)">발표회</button>
          </div>
          <div class="select col-sm">
            <img src="./img/pay/type_3.png" width="200" height="160"><br>
            <button type="button" class="btn selectBtn btn3" name="3" onclick="insertSelected(3)">종교행사</button>
          </div>
      </div>
      <!--form-->
      <table class="table table-bordered">
        <tbody>
          <!--<tr>-->
          <tr>
            <th scope="row" style="vertical-align:middle;">제공기능</th>
            <td colspan="3" class="form-group text-left" style="padding:0;">
            <!--기능내용-->
              <div id="show_1" class="row justify-content-center align-items-center p-3">
                  <ul class="col-3 m-0"  style="color:#f0581f;">
                    <li class="border-0">유료형 모임 스킨</li>
                    <li class="border-0">네이버 지도</li>
                    <li class="border-0">기간 연장</li>
                    <li class="border-0">상단이미지 정렬</li>
                    <li class="border-0">카카오톡 보내기</li>
                  </ul>
                  <ul class="col-3 m-0">
                    <li class="border-0">문자 전송</li>
                    <li class="border-0">구글 지도</li>
                    <li class="border-0">유튜브 영상</li>
                    <li class="border-0">방명록</li>
                    <li class="border-0">규격형 갤러리</li>
                  </ul>
                  <ul class="col-3 m-0">
                    <li class="border-0">네비게이션 앱 연동</li>
                    <li class="border-0">사용기간 3개월</li>
                    <li class="border-0">약도 업로드</li>
                    <li class="border-0">SNS 공유</li>
                    <li class="border-0">자유형 갤러리</li>
                  </ul>
              </div>
              <div id="show_2" class="row justify-content-center align-items-center p-3">
                  <ul class="col-3 m-0"  style="color:#f0581f;">
                    <li class="border-0">유료형 발표회 스킨</li>
                    <li class="border-0">네이버 지도</li>
                    <li class="border-0">기간 연장</li>
                    <li class="border-0">상단이미지 정렬</li>
                    <li class="border-0">카카오톡 보내기</li>
                  </ul>
                  <ul class="col-3 m-0">
                    <li class="border-0">문자 전송</li>
                    <li class="border-0">구글 지도</li>
                    <li class="border-0">유튜브 영상</li>
                    <li class="border-0">방명록</li>
                    <li class="border-0">규격형 갤러리</li>
                  </ul>
                  <ul class="col-3 m-0">
                    <li class="border-0">네비게이션 앱 연동</li>
                    <li class="border-0">사용기간 3개월</li>
                    <li class="border-0">약도 업로드</li>
                    <li class="border-0">SNS 공유</li>
                    <li class="border-0">자유형 갤러리</li>
                  </ul>
              </div>
              <div id="show_3" class="row justify-content-center align-items-center p-3">
                  <ul class="col-3 m-0" style="color:#f0581f;">
                    <li class="border-0">유료형 종교행사 스킨</li>
                    <li class="border-0">네이버 지도</li>
                    <li class="border-0">기간 연장</li>
                    <li class="border-0">상단이미지 정렬</li>
                    <li class="border-0">카카오톡 보내기</li>
                  </ul>
                  <ul class="col-3 m-0">
                    <li class="border-0">문자 전송</li>
                    <li class="border-0">구글 지도</li>
                    <li class="border-0">유튜브 영상</li>
                    <li class="border-0">방명록</li>
                    <li class="border-0">규격형 갤러리</li>
                  </ul>
                  <ul class="col-3 m-0">
                    <li class="border-0">네비게이션 앱 연동</li>
                    <li class="border-0">사용기간 3개월</li>
                    <li class="border-0">약도 업로드</li>
                    <li class="border-0">SNS 공유</li>
                    <li class="border-0">자유형 갤러리</li>
                  </ul>
              </div>
               <!--show_1_end-->
            <!--기능내용-->
            </td>
          </tr>
          <tr>
            <th scope="row" style="vertical-align:middle;">기간</th>
            <td colspan="3">
              <!--option-->
                <div class="input-group">
                  <select class="custom-select" id="inputGroupSelect01" name="paymentMonth" onchange="selectEvent(this)">
                    <option selected value="0">선택하세요.</option>
                    <option value="1">1개월</option>
                    <option value="2">3개월</option>
                    <option value="3">6개월</option>
                    <option value="4">1년</option>
                  </select>
                </div>
              <!--option-->
               <div class="text-left mt-2">
             	<span class="care">※</span><a class="care-text">기간에 따른 서비스 사용 요금을 추가 지불하여 기간연장을 하실 수 있습니다.</a>
             </div>
            </td>
          </tr>
          <tr>
            <th scope="row" style="vertical-align:middle;">초대장주소</th>
            <td colspan="3" class="form-group">
                <!--link-->
                <div class="d-flex justify-content-start">
                  <a class="" style="padding-top:5px; padding-right:5px; font-size:1rem;">http://www.invite-u.com/</a>
                  <input type="text" name="paymentUrlName" class="form-control col-sm-4" id="inputPassword3" placeholder="도메인 입력" style="min-width: 320px;"/>
                  <button type="button" class="confirm-btn" onclick="urlNameCheck()">중복확인</button>
                </div>
                <!--link-->
                <div class="text-left mt-2">
                  <span class="care">※</span>
                  <a class="care-text">초대장 주소는 초대장으로 직접 접속할 수 있는 주소를 말합니다.</a><br>
                  <span class="care" style="opacity:0;">※</span>
                  <a class="care-text-surve">http://www.invite-u/com/도메인명.page' 의 형태로 초대장이 연결됩니다.</a><br>
                  <span class="care">※</span>
                  <a class="care-text">대상 주소는 등록 후 변경이 불가능합니다. 영문, 숫자 또는 영문숫자 조합 (3자 이상 20자 이하)</a>
                </div>
            </td>
          </tr>
          <tr>
            <th scope="row" style="vertical-align:middle;">주의사항</th>
            <td colspan="3">
              <div class="text-left">
                <span class="care">※</span><a class="care-text">무료형의 경우 초대해U 초대장 체험을 위한 서비스로 제공되는 내용이 예고없이 변경될 수 있습니다.</a>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <!--form_end-->
      
      <!--내용제공-->
      <div class="service-list d-flex justify-content-center">
        <div class="col-7" style="border-right: 1px solid #dcd9d9;">
            <div class="col-9" style="margin:20px;">
              <div class="row">
                  <div class="col-8 text-left pb-1">설치 비용 :</div>
                  <div class="col-4 text-right"><span>9,900</span>원</div><br>
              </div>
              <div class="row">
                  <div class="col-8 text-left">서비스 사용 비용 :</div>
                  <div class="col-4 text-right"><span class="service-use-price"> - </span>원</div>
              </div>
            </div>
        </div>
        <div class="row col-5 align-items-center">
            <div class="total col-6">총 결제 금액 :</div>
            <div class="col-6"><span class="total-money">0 </span>원</div>
        </div>
      </div>
      <!--내용제공_end-->
      <!--결제정보-->
      <div class="pt-4">
       <div class="d-flex">
           <h4 class="title text-center my-2">결제 정보</h4>
       </div>
           <table class="table table-bordered">
              <thead>
                 <tr>
                     <th class="total" style="vertical-align:middle;" scope="row">결제금액</th>
                     <td><h3 class="text-left m-1"><span class="total-money">0</span>원</h3></td>
                 </tr>
              </thead>
              <!--결제 수단 선택-->
              <tbody>
                  <tr>
                    <th class="total" style="vertical-align:middle;" scope="row">결제방법</th>
                    <td>
                      <!--결제방법-->
                      <div class="row pl-3 align-items-center">
                         <label class="payment-type">
                             <input class="radiobtn" type="radio" name="payment-selector" id="service-payment-1" checked>
                             <div class="check" for="service-payment-1"></div><div class="payment-type-name">신용카드</div>
                         </label>
                         <label class="payment-type">
                             <input class="radiobtn" type="radio" name="payment-selector" id="service-payment-2">
                             <div class="check" for="service-payment-2"></div><div class="payment-type-name">계좌이체</div>
                         </label>
                         <label class="payment-type">
                             <input class="radiobtn" type="radio" name="payment-selector" id="service-payment-3">
                             <div class="check" for="service-payment-3" style="margin-top: 5px;"></div><div class="payment-type-name" for="chargeway"><img src="./img/pay/kakaopay.JPG" width="90" height="30"></div>
                         </label>
                      </div>
                      <!--결제방법_end-->
                     
                    </td>
                  </tr>
              </tbody>
            </table>
     </div>
      <!--결제 수단 선택_end-->
      <!--총 결제금액_end-->
      <div style="padding: 0 0 20px;">
       <button type="button" class="btn btn-lg" onclick="history.back()" style="background-color:#959595; color:white;">이전으로</button>
       <button type="button" class="btn btn-lg" onclick="requestPay('${sessionScope.user.userId}', '초대장')" style="background-color:#2d62cd; color:white;">결제하기</button>
     </div>
    </div>
</form>
</article>
<!--application_2-->


<jsp:include page="/template/footer.jsp" flush="false" />

<!-- bootstrap js -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
<!-- top js -->
<script type="text/javascript" src="js/top.js?v=<%=System.currentTimeMillis()%>"></script>
<!-- side bar js -->
<script type="text/javascript" src="js/sidebar.js?v=<%=System.currentTimeMillis()%>"></script>

<!-- iamport(결제) js -->
<script src="https://service.iamport.kr/js/iamport.payment-1.1.5.js" type="text/javascript"></script>
<!-- custom js -->
<script type="text/javascript" src="js/pay.js?v=<%=System.currentTimeMillis() %>"></script>
</body>
</html>