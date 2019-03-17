/**
 * editFunc.js 의 일부 코드
 */

// dday 사용 여부
function infoDdayChkUpdate(val, section) {
	// d-day 계산
	var start = new Date(getInfoDateStart());
	var end = new Date(getInfoDateEnd());
	var dday = start.getTime() - end.getTime();
	dday = Math.floor(dday / (1000 * 60 * 60 * 24));
	console.log($(section).find(".skin-info-dday"));
	$(section).find(".skin-info-dday").text(dday);
	// 보이기,안보이기 설정
	hideShowFunc(val, section);
}

// 계좌 선택
function accountSelectUpdate(val, section) {
	if(val != '계좌번호를 선택하세요') {
		// 은행명 추출
		let bankName = val.split("[")[1];
		bankName = bankName.split("]")[0];
		// 예금주명 추출
		let accountName = val.split("]")[1];
		accountName = accountName.split("(")[0];
		// 계좌 추출
		let accountNumber = val.split("(")[1];
		let accountNumberDash = accountNumber.split(")")[0];
		accountNumber = accountNumberDash.replace(/-/g,'');
		// 송금료
		let accountMoney = getAccountMoney();
		
		// 내용 변경
		$(section).find(".skin-account-name").text(accountName);
		$(section).find(".skin-account-bank").text(bankName);
		$(section).find(".skin-account-number").text(accountNumber);
		$(section).find(".skin-account-money").text(accountMoney);		
	}
}

//생성일 : 18.05.26
//작성자 : 송유진
//함수 기능 : 이미지 파일 선택 시 미리보기 제공
function readURL(input, wrapName, count) {
	var src;
	if(count == 1) {
		if (input.files && input.files[0]) {
			var reader = new FileReader();
			reader.onload = function (e) {
				$(wrapName + " > img").attr('src', e.target.result);
			}
			reader.readAsDataURL(input.files[0]);
			// 라벨 수정
			changeLabel(input);
		}
	}else if(count > 1) {
		if (input.files && input.files[0]) {
			var reader = new FileReader();
			reader.onload = function (e) {
				// 미리보기 이미지 재나열
				var inputName = $(input).attr('name');
				var imgName = $('.' + inputName).attr('class');
				
				var name = $(input).attr('id');
				var fileName = $(input).val();
				var index = fileName.lastIndexOf("\\");
				fileName = fileName.substring(index+1);

				var newImg = "<img src='" + e.target.result + "' class='" + inputName + "' height='150' alt='" + fileName + "'>";
				if(inputName == imgName) { // input name과 이미지 class에 같은게 있을 경우 기존 이미지 삭제, 새로 추가
					$('.' + inputName).remove();
					$(wrapName).append(newImg);
					console.log("aa");
				}else { // 새로 추가인 경우 그냥 추가
					$(wrapName).append(newImg);
					console.log("bb");
				}
			}
			reader.readAsDataURL(input.files[0]);
			// 라벨 수정
			changeLabel(input);
		}			
	}
}

//생성일 : 18.09.10
//작성자 : 송유진
//함수 기능 : 이미지 파일 선택 시 이미지 이름 가져와서 리스트화 시킴
function imgList(input, wrapName, count) {
	
	var name = $(input).val();
	var index = name.lastIndexOf("\\");
	name = name.substring(index+1);
	console.log("name:" + name);

	if(count == 1) {
		var inputName = $(input).attr("name");
		$("input[name='" + inputName + "-list']").val(name);
		
	}else if(count > 1) {
		// gallery input 일 경우
		console.log("class:" + $(input).attr('class'));
		if($(input).attr('class') == 'custom-file-input galleryUploadImg') {
			// 이미지 리스트 돌면서 이미지 이름 얻음
			var imgName;
			var str = "";
			var imgs = $(wrapName + " img");
			console.log(imgs);
			for(var i=0; i<imgs.length; i++) {
				str = $(imgs[i]).attr('alt') + ", ";
				console.log("str:" + str);
			}
			
		}
	}
}


// 작성자 : 송유진
// 작성일 : 18.09.25
// 기능 : edit page 설문조사 데이터 뽑는 함수
function surveySave() {
  // 수정하는 경우 poll update chk -> update 설정
  $("input[name='poll-update-chk']").val("update");
	
  // 객체, 리스트 생성
  let surveyObj = new Object(); // survey object
  let surveyTitle = ""; // survey obj(title)
  let surveyArr = new Array(); // survey obj(content-array)
  
  // title
  surveyTitle = $('.survey-title').text();
  surveyObj["title"] = surveyTitle;
  
  // content
  let contents = $('#survey-canvas > li'); // question list
  for(var i=0; i<contents.length; i++) {
	  if($(contents[i]).hasClass('type-text')) {
		  let surveyContent = new Object(); // survey obj(content-array-object)
		  surveyContent['type'] = 'text';
		  surveyContent['q'] = $(contents[i]).find('label').text();
		  surveyArr.push(surveyContent);
	  }else if($(contents[i]).hasClass('type-radio')) {
		  let surveyContent = new Object(); // survey obj(content-array-object)
		  surveyContent['type'] = 'radio';
		  surveyContent['q'] = $(contents[i]).find('label').text();
		  const radioVal = $(contents[i]).find('label').text();
		  const radioQs = $(contents[i]).find('.survey-radio > span');
		  let radioQ1, radioQ2, radioQ3;			  
		  for(var j=0; j<radioQs.length; j++) {
			  if(j==0) surveyContent['q1'] = $(radioQs[j]).text();
			  else if(j==1) surveyContent['q2'] = $(radioQs[j]).text();
			  else if(j==2) surveyContent['q3'] = $(radioQs[j]).text();
		  }
		  surveyArr.push(surveyContent);
	  }
  }
  surveyObj['content'] = surveyArr;
  $("input[name='poll-content']").val(JSON.stringify(surveyObj));
	  console.log(surveyObj);
}