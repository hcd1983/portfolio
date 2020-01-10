"use starict";

window.onload = init;
// window.onhashchange = navigate
var listings;
var _navigate;


function init(){
	
	var sheet_key = "1C1egmUIO3plZTWOCfQKhLoNvYbPRFlGtriAZRG5YE80";
	Tabletop.init( { key: sheet_key,
	                callback: processData,
	                simpleSheet: true } )

	$(document).click(function(event) {
		if($(".content.show .show").length > 0){

		    if (!$(event.target).closest(".dummy-des, .icon.close-content").length) {
		        $(".icon.close-content").click();
		    }
		
		}
	   
	});
}


function nl2br( str ) {
	return str.replace(/([^>])\n/g, '$1<br/>\n');
} 


function MainGrid(data){
	var html = "";
	var main_content = "";
	for (var i = 0; i < data.length; i++) {
		var _data = data[i];
		var title = _data.title;
		var img = _data.image;
		var des = nl2br( _data.description );
		var delay = i *150;
		html += `<a href="#${_data.id}"><figure><img src="images/${img}" alt="${title}" class="animated animatedFadeInUp fadeInUp" style="animation-delay:${delay}ms;"/><h3>${title}</h3></figure></a>`;
		// html += `<figure><img src="images/${img}" alt="${title}"/></figure>`;
		
	}

	main_content += `
		<div>
			<div class="dummy-des">
				<div></div>
				<span class="icon close-content"></span>
			</div>	
		</div>`;

	main_content += `<span class="loading"></span>`;
	// main_content += `<span class="icon close-content"></span>`;

	$("#main_grid").html(html);
	$("#main_content").html(main_content);
}

function processData (data) {
  
  const updatedListings = {}
  data.forEach(function (item) {
    
    const id = item["id"]

    if (!updatedListings[id]) {
      updatedListings[id] = item;
    }

  })

  console.log('Data updated.');

  listings = updatedListings
  
  MainGrid(data);

  MyGrid3D = new grid3D( document.getElementById( 'grid3d' ) );

  _navigate();
}




// content ===================
function RenderbyItemid (id) {
  

  const _id = id;
  const _data = listings[id];
  const des = nl2br(_data.description);
  var html = `<img  class="dummy-img" src="images/${_data.image_dummy}" alt="${_data.title}"/>`;
  if(_data.url){
  	 html += `<div class="dummy-text"><a class="link_button" href="${_data.url}" target="_blank" rel="nofollow noopener">前往頁面</a></div>`;
  }
  html += `<h3 class="dummy-text">${_data.title}</h3>`+`<p class="dummy-text">${des}</p>`;
  $(".dummy-des > div").html(html);


}


_navigate = function(){
			

	if (!location.hash || location.hash === '#'){

		if($("#main_content").hasClass("show")){
		  	$(".icon.close-content").click();
		  	location.hash = "";
		}

		// history.pushState(null, null, window.location.href.split('#')[0]);
		gtag ('config', ga_id);
		return false;
	
	}else if(location.hash === "#about"){
		alert("OK");
	}else{
		MyGrid3D.render();
	}

	

}

