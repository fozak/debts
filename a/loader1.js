	var url;
	var id;
	var j=1;
	
$(document).ready(function () {
	$('div[data-loader]').each(function() {
		url=$(this).attr("data-loader");
		id=$(this).attr("id");
    		var tmp_j = j++;
    		 $.get(url, function(data){
			 //$('#'+tmp_j).html(data);
 			$('#'+tmp_j).append(data);  //!!!! NEW
			 //$(data).insertAfter($('#'+tmp_j)); //WAS

			 });
	});
});
//DECORATIONS GOES HERE

function clickfunction(){

	$('.b-submenu-item:contains("Реестры")').html("Исполнительные производства"); 
	$( ".b-panel-menu-item--logo" ).html( '<img src="../a/logo.jpg" href="/" width="34px">' );
	
		$('.b-cell-possibly_disabled:contains("руб.")').each(function() {
		$(this).after('<a data-key="Multistat" class="details b-card-year b-card-year--active g-unselectable js-card--founder_type" href="http://yandex.ru">Подробнее</a>');
		});
	
	$('.b-cell-possibly_disabled:contains("руб.")').each(function() {

		sumwithoutspaces = this.textContent.replace(/ /g, ''); //remove spaces
		sum = sumwithoutspaces.replace("руб.", '');   //remove ruble
			if(parseInt(sum) <= 1000000 && parseInt(sum) >=200000){
			 	$(this).css("color","red");
				
				$(this).closest(".b-table-row").find('a[href*="#side/info"]');     //!!!! CONTIN - find child a.href
				
			        console.log("RAW = ", $(this).closest(".b-table-row").find('a[href*="#side/info"]:first').html());
			}

		});

	
	$('.b-submenu-item:contains("Арбитражные дела")').click(function() {
	//$(".b-submenu-item").click(function() {
	   console.log("Арбитражные дела CLICKED");
	   $("#1").hide();
	   $("#2").show();
	   $("#3").hide();
	});
	
	$('.b-submenu-item:contains("Информация")').click(function() {
	//$(".b-submenu-item").click(function() {
	   console.log("Информация CLICKED");
	   $("#1").show();
	   $("#2").hide();
	   $("#3").hide();
	});
	
	$('.b-submenu-item:contains("Исполнительные производства")').click(function() {
	//$(".b-submenu-item").click(function() {
	   console.log("ИСПОЛНИТЕЛЬНЫЕ CLICKED");
	   $("#1").hide();
	   $("#2").hide();
	   $("#3").show();
	});
	
	$('.b-submenu-subitem-title:contains("Бухгалтерская отчетность")').click(function() {

	   console.log("БУХГАЛТЕРСКАЯ CLICKED");
	   $("#1").hide();
	   $("#2").hide();
	   $("#3").hide();
	   $("#4").show();
	});
	
	$('.g-print-hidden').click(function() {         //печать

	   console.log("ПЕЧАТЬ CLICKED");
	   $("#1").show();
	   $("#2").show();
	   $("#3").show();
	   $("#4").show();
	});
		
}
//------------------------------
//
