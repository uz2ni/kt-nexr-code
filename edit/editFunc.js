
/**
 * 작성일 : 18.07.27
 * 작성자 : 송유진
 * 기능 : edit form 에서 수정된 내용에 따라 동작 변경에 대한 기능 정의 
 */
mapNode = null;
mapClone = null;

// 서버 상대 경로 변수
serverUrl = "";

// html 로드 완료 후 실행
$(document).ready(function(){
	// 초대장 종류에 따라 편집 폼 네임 초기값 설정
	typeFormUpdate(contentType);
	// edit init
	editInit();
	mapNode = $('#preview_iframe').contents().find('#skin-info-address-map');
	mapClone = mapNode.clone();
});

// DB 값에 맞게 초기값 설정
function editInit() { 
	topTitleUpdate(getTopTitle(), getSectionTopTitle());
	topFontColorUpdate(getTopFontColor(), getSectionTopTitle());
	topFontAlignUpdate(getTopFontAlign(), getSectionTopTitle());
	topImgUpdate(serverUrl+getTopImgFile(), getSectionTopImg());
	topImgAlignUpdate(getTopImgAlign(), getSectionTopImg());
	infoDateStartUpdate(getInfoDateStart(), getSectionInfoDateStart());
	infoDateEndUpdate(getInfoDateEnd(), getSectionInfoDateEnd());
	checkboxVal($("input[name='info-dday-chk']"));
	infoDdayChkUpdate(getInfoDdayChk(), getSectionInfoDdayChk());
	infoTimeUpdate(getInfoTime(), getSectionInfoTime());
	infoPlaceUpdate(getInfoPlace(), getSectionInfoPlace());
	addInfoWelcomeUpdate(getAddInfoWelcome(), getSectionAddInfoWelcome());
	addInfoImgNameUpdate(getAddInfoImgName(), getSectionAddInfoImgName());
	addInfoImgProfileUpdate(serverUrl+getAddInfoImgProfile(), getSectionAddInfoImgProfile());
	addInfoImgSitUpdate(serverUrl+getAddInfoImgSit(), getSectionAddInfoImgSit());
	addInfoCallNameUpdate(getAddInfoCallName(), getSectionAddInfoCallName());
	addInfoCallNumberUpdate(getAddInfoCallNumber(), getSectionAddInfoCallNumber());
	addInfoLogoHoldNameUpdate(getAddInfoLogoHoldName(), getSectionAddInfoLogoHoldName());
	addInfoHoldImgUpdate(serverUrl+getAddInfoHoldImg(), getSectionAddInfoHoldImg());
	addInfoLogoHelpNameUpdate(getAddInfoLogoHelpName(), getSectionAddInfoLogoHelpName());
	addInfoHelpImgUpdate(serverUrl+getAddInfoHelpImg(), getSectionAddInfoHelpImg());
	infoAddressUpdate(getInfoAddress(), getSectionInfoAddress());
	checkboxVal($("input[name='info-navi']"));
	infoNaviUpdate(getInfoNavi(), getSectionInfoNavi());
	checkboxVal($("input[name='info-find']"));
	infoFindUpdate(getInfoFind(), getSectionInfoFind());
	checkboxVal($("input[name='info-load-img-chk']"));
	infoLoadImgChkUpdate(getInfoLoadImgChk(), getSectionInfoLoadImg());
	infoLoadImgUpdate(serverUrl+getInfoLoadImg(), getSectionInfoLoadImg());
	infoBusUpdate(getInfoBus(), getSectionInfoBus());
	infoSubwayUpdate(getInfoSubway(), getSectionInfoSubway());
	infoParkingUpdate(getInfoParking(), getSectionInfoParking());
	checkboxVal($("input[name='gallery-chk']"));
	galleryChkUpdate(getGalleryChk(), getSectionGallery());
	
	for(var i=0; i<6; i++) {
		var src = $('.gallery-upload-img-' + (i+1)).attr('src');
		console.log('reset src:' + src);
		galleryUploadImgUpdate(serverUrl+src, getSectionGallery(i+1));
	}
	galleryTypeUpdate(getGalleryType(), getSectionGallery());
	checkboxVal($("input[name='video-chk']"));
	videoChkUpdate(getVideoChk(), getSectionVideo());
	videoLinkBtnUpdate(getVideoLink(0), getSectionVideo(), 0);
	checkboxVal($("input[name='account-chk']"));
	accountChkUpdate(getAccountChk(), getSectionAccount());
	selectVal($("select[name='account-select'"));
	accountSelectUpdate(getAccountSelect(), getSectionAccount());
	checkboxVal($("input[name='attend-chk']"));
	attendChkUpdate(getAttendChk(), getSectionAttend());
	checkboxVal($("input[name='poll-chk']"));
	pollChkUpdate(getPollChk(), getSectionPoll());
	checkboxVal($("input[name='comment-chk']"));
	commentChkUpdate(getCommentChk(), getSectionComment());
	checkboxVal($("input[name='sns-share-chk']"));
	snsShareChkUpdate(getSnsShareChk(), getSectionSnsShare());
	selectSnsUpdate(getSelectSns(), getSectionSnsShare());
	checkboxVal($("input[name='sns-msg-chk']"));
}

/******** 공통 기능 함수 *********/
function hideShowFunc(val, section) {
	// 값에 따라 섹션 보이기,안보이기 설정
	if(val == '1') {
		$(section).show();
	}else if(val == '0') {
		$(section).hide();
	}
}


/******** 초대장 종류에 따라 편집 폼 네임 수정 *********/
contentType = type; 
/* 18.10.29 */
function typeFormUpdate(contentType) {
	if(contentType == '모임') {
		/* 상단정보 */
		$(".formTopTitle").text('모임 제목');
		/* 상세정보 - 기본 정보 */
		$(".formInfoDate").text('모임 일자');
		$(".formInfoTime").text('모임 시간');
		$(".formInfoPlace").text('모임 장소');
		/* 상세정보 - 부가 정보 */
		$(".formAddInfoWelcome").text('인사말');
		$(".formAddInfoImgProfileBox").css('display', 'none');
		$(".formAddInfoImgSitBox").css('display', 'none');
		$(".formAddInfoCall").text('모임 문의 정보');
		/* 상세정보 - 위치 정보 */
		$(".formInfoAddress").text('모임 장소 주소');
		/* 계좌 */
		$(".formAccountMoney").text('회비');
	}else if (contentType == '발표회') {
		/* 상단정보 */
		$(".formTopTitle").text('발표회 제목');
		/* 상세정보 - 기본 정보 */
		$(".formInfoDate").text('발표회 일자');
		$(".formInfoTime").text('발표회 시간');
		$(".formInfoPlace").text('발표회 장소');
		/* 상세정보 - 부가 정보 */
		$(".formAddInfoWelcome").text('초대글');
		$(".formAddInfoImgProfile").text('발표자(팀) 프로필 입력');
		$(".formAddInfoImgSit").text('자리 배치도 이미지');
		$(".FormAddInfoCall").text('발표회 문의 정보');
		/* 상세정보 - 위치 정보 */
		$(".formInfoAddress").text('발표회 장소 주소');
		/* 계좌 */
		$(".formAccountMoney").text('관람료');
	}else if (contentType == '종교 행사') {
		/* 상단정보 */
		$(".formTopTitle").text('종교 행사 제목');
		/* 상세정보 - 기본 정보 */
		$(".formInfoDate").text('종교 행사 일자');
		$(".formInfoTime").text('종교 행사 시간');
		$(".formInfoPlace").text('종교 행사 장소');
		/* 상세정보 - 부가 정보 */
		$(".formAddInfoWelcome").text('주제 말씀');
		$(".formAddInfoImgProfile").text('강사 프로필 입력');
		$(".formAddInfoImgSitBox").css('display', 'none');
		$(".FormAddInfoCall").text('종교 행사 문의 정보');
		/* 상세정보 - 위치 정보 */
		$(".formInfoAddress").text('종교 행사 장소 주소');
		/* 계좌 */
		$(".formAccountMoney").text('회비');
	}
	
}


function skinUpdate(val) {
	console.log('skinUpdate');
	let link = "skin/" + val + "/preview_index.jsp";
	$('#preview_iframe').attr('src', link);
	setTimeout(function() {
		editInit();
		}, 500);
	setTimeout(function() {
		mapUpdate('update');
		}, 600);
} 

// 02 상단 정보
// 제목 
function topTitleUpdate(val, section) {
	$(section).text(val);
}
// 제목 색상
function topFontColorUpdate(val, section) {
	$(section).css('color', val);
}
// 제목 정렬
function topFontAlignUpdate(val, section) {
	if(val == 'left') {
		$(section).addClass("text-left");
		$(section).removeClass("text-center");
		$(section).removeClass("text-right");
	}else if(val == 'center') {
		$(section).addClass("text-center");
		$(section).removeClass("text-left");
		$(section).removeClass("text-right");
	}else if(val == 'right') {
		$(section).addClass("text-right");
		$(section).removeClass("text-left");
		$(section).removeClass("text-center");
	}
}
// 상단 이미지
function topImgUpdate(val, section) {
	// 이미지 셋팅
	console.log($(section));
	$(section).find("img").attr('src', val);
	
}

// 상단 이미지 정렬
function topImgAlignUpdate(val, section) {
	// 수정 필요
	if(val == 'row') {
		console.log('row');
		imgPreview('row');
	}else if(val == 'col') {
		console.log('col');
		imgPreview('col');
	}
}
function preview(img, selection) {
	var imgW;
	var imgH;
	var w;
	var h;
	
	var val = getTopImgAlign();
	if(val == 'row') {
		imgW = img.width;
		imgH = img.height;
		w = 300;
		h = 168.75;
	}else if(val == 'col') {
		imgW = img.width;
		imgH = img.height;
		w = 300;
		h = 400;
	}

	var scaleX = w / (selection.width || 1);
    var scaleY = h / (selection.height || 1);
  
    $('.skin-top-img img').css({
        width: Math.round(scaleX * imgW) + 'px',
        height: Math.round(scaleY * imgH) + 'px',
        marginLeft: '-' + Math.round(scaleX * selection.x1) + 'px',
        marginTop: '-' + Math.round(scaleY * selection.y1) + 'px'
    });
}
function imgPreview(direction){
	var w;
	var h;
	var ratio;
	if(direction == 'row') {
		w = '300px';
		h = '168.75px';
		ratio = '16:9';
	}else if(direction == 'col') {
		w = '300px';
		h = '400px';
		ratio = '3:4';
	}
	
	//기존 이미지 초기화
	$('.skin-top-img').empty();
	
    var img = $('<div><img src="data:image/jpeg;base64,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" style="position: relative;" /></div>')
        .css({
            /* float: 'left', */
            position: 'relative',
            overflow: 'hidden',
            width: w,
            height: h
        });
    $('.skin-top-img').append(img);

    $('#ferret').imgAreaSelect({ aspectRatio: ratio, onSelectChange: preview });
}
// 03 상세 정보
// 03-1 기본 정보
// 행사 일자
function infoDateStartUpdate(val, section) {
	$(section).text(val);
	infoDdayChkUpdate(getInfoDdayChk(), getSectionInfoDdayChk());
}
function infoDateEndUpdate(val, section) {
	$(section).text(val);
	infoDdayChkUpdate(getInfoDdayChk(), getSectionInfoDdayChk());
}
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
// 행사 시간
function infoTimeUpdate(val, section) {
	$(section).text(val);
}
// 행사 장소
function infoPlaceUpdate(val, section) {
	$(section).text(val);
}
// 03-1 부가 정보
// 인사말
function addInfoWelcomeUpdate(val, section) {
	$(section).text(val);
}
// 발표자 이름
function addInfoImgNameUpdate(val, section) {
	$(section).text(val);
}
// 발표자 프로필
function addInfoImgProfileUpdate(val, section) {
	$(section).find("img").attr("src", val);
}
// 자리배치도
function addInfoImgSitUpdate(val, section) {
	$(section).find("img").attr("src", val);
}
// 주최자 이름
function addInfoCallNameUpdate(val, section) {
	$(section).text(val);
}
// 주최자 번호
function addInfoCallNumberUpdate(val, section) {
	$(section).text(val);
}
// 주최사 이름
function addInfoLogoHoldNameUpdate(val, section) {
	$(section).text(val);
}
// 주최사 로고
function addInfoHoldImgUpdate(val, section) {
	$(section).find("img").attr('src', val);
}
// 후원사 이름
function addInfoLogoHelpNameUpdate(val, section) {
	$(section).text(val);
}
// 후원사 로고
function addInfoHelpImgUpdate(val, section) {
	$(section).find("img").attr('src', val);
}
// 03-3 위치 정보
// 행사 장소 주소
function infoAddressUpdate(val, section) {
	// 수정 필요
	console.log(val);
	$(section).text(val);
	// 지도 연결
	mapUpdate("default");
}
function mapUpdate(a) {
	var section = $('#preview_iframe').contents().find('.skin-info-map');
	if(a == 'default') { // 스킨 처음 값일 경우
		let node = $('#skin-info-address-map');
		section.append(node);
	}else if(a == 'update') { // 스킨 업데이트의 경우
		let node = mapClone;
		section.append(node);
	}
}
// 네이버 지도 api
// map 전역 init
var map = new naver.maps.Map("info-address-map", {
    center: new naver.maps.LatLng(37.3595316, 127.1052133),
    zoom: 10,
    mapTypeControl: true
});
var map2 = new naver.maps.Map("skin-info-address-map", {
    center: new naver.maps.LatLng(37.3595316, 127.1052133),
    zoom: 10,
    mapTypeControl: true
});

var infoWindow = new naver.maps.InfoWindow({
    anchorSkew: true
});
var infoWindow2 = new naver.maps.InfoWindow({
    anchorSkew: true
});

map.setCursor('pointer');
map2.setCursor('pointer');

naver.maps.onJSContentLoaded = initGeocoder;

// search by tm128 coordinate [클릭으로 주소 출력하는 함수]
function searchCoordinateToAddress(latlng) {
    var tm128 = naver.maps.TransCoord.fromLatLngToTM128(latlng);

    infoWindow.close();

    naver.maps.Service.reverseGeocode({
        location: tm128,
        coordType: naver.maps.Service.CoordType.TM128
    }, function(status, response) {
        if (status === naver.maps.Service.Status.ERROR) {
            return alert('Something Wrong!');
        }

        var items = response.result.items,
            htmlAddresses = [];

        for (var i=0, ii=items.length, item, addrType; i<ii-1; i++) {
            item = items[i];
            addrType = item.isRoadAddress ? '[도로명 주소]' : '[지번 주소]';

            htmlAddresses.push((i+1) +'. '+ addrType +' '+ item.address);
        }

        infoWindow.setContent([
                '<div style="padding:7px;min-width:200px;line-height:150%; font-size:8pt">',
                '<h6 style="margin-top:2px; font-weight:bold">검색 좌표</h6>',
                htmlAddresses.join('<br />'),
                '</div>'
            ].join('\n'));

        infoWindow.open(map, latlng);
    });
}

// result by latlng coordinate [주소로 검색하는 함수]
function searchAddressToCoordinate(address) {
    naver.maps.Service.geocode({
        address: address
    }, function(status, response) {
        if (status === naver.maps.Service.Status.ERROR) {
            return alert('주소를 정확하게 입력하세요');
        }

        var item = response.result.items[0],
            addrType = item.isRoadAddress ? '[도로명 주소]' : '[지번 주소]',
            point = new naver.maps.Point(item.point.x, item.point.y);

        infoWindow.setContent([
                '<div style="padding:7px;min-width:200px;line-height:150%; font-size:8pt">',
                '<h6 style="margin-top:2px; font-weight:bold">검색 주소 : '+ response.result.userquery +'</h6><br />',
                addrType +' '+ item.address +'<br />',
                '</div>'
            ].join('\n'));
        infoWindow2.setContent([
            '<div style="padding:7px;min-width:200px;line-height:150%; font-size:8pt">',
            '<h6 style="margin-top:2px; font-weight:bold">검색 주소 : '+ response.result.userquery +'</h6><br />',
            addrType +' '+ item.address +'<br />',
            '</div>'
        ].join('\n'));



        map.setCenter(point);
        infoWindow.open(map, point);
        map2.setCenter(point);
        infoWindow2.open(map2, point);
    });
}

function initGeocoder() {
    map.addListener('click', function(e) {
        searchCoordinateToAddress(e.coord);
    });

    $('#info-address-text').on('keydown', function(e) {
        var keyCode = e.which;

        if (keyCode === 13) { // Enter Key
            searchAddressToCoordinate($('#info-address-text').val());
        }
    });

    $('#info-address-search').on('click', function(e) {
        e.preventDefault();

        searchAddressToCoordinate($('#info-address-text').val());
        
    });
    // init
	if($('#info-address-text').val() == '') { // 주소 값 비어있을 경우
		searchAddressToCoordinate('경기도 안양시 만안구 성결대학로 53');
	}else {
		searchAddressToCoordinate($('#info-address-text').val());
	}
}

// 네비 사용 여부
function infoNaviUpdate(val, section) {
	// 보이기,안보이기 설정
	hideShowFunc(val, section);
}
// 길 찾기 사용 여부
function infoFindUpdate(val, section) {
	// 보이기,안보이기 설정
	hideShowFunc(val, section);
}
// 약도 이미지 사용 여부
function infoLoadImgChkUpdate(val, section) {
	// 보이기,안보이기 설정
	hideShowFunc(val, section);
}
// 약도 이미지
function infoLoadImgUpdate(val, section) {
	console.log(val);
	$(section).find("img").attr('src', val);
	console.log($(section).find("img"));
}
// 버스 교통 안내
function infoBusUpdate(val, section) {
	$(section).text(val);
}
// 지하철 교통 안내
function infoSubwayUpdate(val, section) {
	$(section).text(val);
}
// 주차 안내
function infoParkingUpdate(val, section) {
	$(section).text(val);
}
// 04 멀티미디어
// 04-1 갤러리
function galleryChkUpdate(val, section) {
	console.log(val);
	console.log(section);
	// 보이기,안보이기 설정
	hideShowFunc(val, section);
}
// 갤러리 타입
function galleryTypeUpdate(val, section) {
	if(val == 'gallery-type-slide') {
		$('#preview_iframe').contents().find('.skin-gallery-type-slide').show();
		$('#preview_iframe').contents().find('.skin-gallery-type-row').hide();
		$('#preview_iframe').contents().find('.skin-gallery-type-col').hide();
	}else if(val == 'gallery-type-row') {
		$('#preview_iframe').contents().find('.skin-gallery-type-slide').hide();
		$('#preview_iframe').contents().find('.skin-gallery-type-row').show();
		$('#preview_iframe').contents().find('.skin-gallery-type-col').hide();
	}else if(val == 'gallery-type-col') {
		$('#preview_iframe').contents().find('.skin-gallery-type-slide').hide();
		$('#preview_iframe').contents().find('.skin-gallery-type-row').hide();
		$('#preview_iframe').contents().find('.skin-gallery-type-col').show();
	}
}
// 갤러리 업로드
function galleryUploadImgUpdate(val, section) {
	$(section).attr("src", val);
}
// 04-2 비디오
function videoChkUpdate(val, section) {
	// 보이기,안보이기 설정
	hideShowFunc(val, section);
}
// 비디오 링크 입력완료 버튼
function videoLinkBtnUpdate(val, section, index) {
		let youtubeUrl = 'https://www.youtube.com/embed/';
		let key = val.split('v=')[1];
		$(section).find("iframe[name='skin-video']:eq(" + index + ")").attr('src', youtubeUrl + key);
}
// 05 계좌 연동
// 계좌 사용 여부
function accountChkUpdate(val, section) {
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
function accountMoneyUpdate(val, section) {
	$(section).text(val);
}
// 06 추가 기능
// 06-1 참석 여부
function attendChkUpdate(val, section) {
	hideShowFunc(val, section);
}
// 06-1-2 참석 여부 - 설문 조사
function pollChkUpdate(val, section) {
	hideShowFunc(val, section);
}
// 06-2 방명록
function commentChkUpdate(val, section) {
	hideShowFunc(val, section);
}
// 06-3 sns 공유
function snsShareChkUpdate(val, section) {
	hideShowFunc(val, section);
}
// sns 복수 선택
function selectSnsUpdate(val, section) {
	$(section).empty();
	for(var i=0; i<val.length; i++) {
		$(section).append("<a href=''><img src='../../img/content/edit_img/page_img/shard_icon/" + val[i] + ".png' width='50' height='50' class='mx-1'></a>");
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

// 생성일 : 18.09.05
// 작성자 : 송유진
// 함수 기능 : 이미지 파일 선택 시 라벨 명 수정
function changeLabel(input){
	var name = $(input).attr('id');
	var fileName = $(input).val();
	var index = fileName.lastIndexOf("\\");
	fileName = fileName.substring(index+1);
	$("label[for=" + name + "]").html(fileName);
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
// gallery일 경우 사용
function imgList2(wrapName) {
	var str = "";
	var imgs = $(wrapName + " img");
	for(var i=0; i<imgs.length; i++) {
		if(i == imgs.length-1)
			str = str + $(imgs[i]).attr("alt");
		else
			str = str + $(imgs[i]).attr("alt") + ",";
	}
	console.log("str: " + str);
	$("input[name=gallery-upload-img-list").val(str);
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

