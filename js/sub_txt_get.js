	/* 책소개 텍스트 가져오기 */
	
	$(function(){
		$.get("./sub_txt/txt1.txt", function(data) {
			$(".introduction").html(data);
		})     
	});


	/* 출판사 서평 텍스트 가져오기 */

	$(function(){
		$.get("./sub_txt/txt2.txt", function(data) {
			$(".publisher").html(data);
		})     
	});


	/* 추천사 텍스트 가져오기 */

	$(function(){
		$.get("./sub_txt/txt3.txt", function(data) {
			$(".recommendation").html(data);
		})     
	});


	/* 목차 텍스트 가져오기 */

	$(function(){
		$.get("./sub_txt/txt4.txt", function(data) {
			$(".index").html(data);
		})     
	});


	/* 본문중에서 텍스트 가져오기 */

	$(function(){
		$.get("./sub_txt/txt5.txt", function(data) {
			$(".maintext").html(data);
		})     
	});


	/* 저자소개(프레드릭 배크만) 텍스트 가져오기 */

	$(function(){
		$.get("./sub_txt/txt6.txt", function(data) {
			$(".author_intro1").html(data);
		})     
	});


	/* 저자소개(이은선) 텍스트 가져오기 */

	$(function(){
		$.get("./sub_txt/txt7.txt", function(data) {
			$(".author_intro2").html(data);
		})     
	});