function Masonry(object){
	this.images=object.images;
	this.xsColNumber=object.xsColNumber;
	this.sColNumber=object.sColNumber;
	this.mdColNumber=object.mdColNumber;
	this.lgColNumber=object.lgColNumber;


	this.create=function(){
		$('#masonry').empty();

		if($(document).width()>=992){
			cols=createCols(this.lgColNumber);
			placeImages(cols,this.lgColNumber)

		}
		else if ($(document).width()>=720 && $(document).width()<=992){
			cols=createCols(this.mdColNumber);
			placeImages(cols,this.mdColNumber)
		}
		else if($(document).width()>=576 && $(document).width()<=720){
			cols=createCols(this.sColNumber);
			placeImages(cols,this.sColNumber)
		}
		else{
			cols=createCols(this.xsColNumber);
			placeImages(cols,this.xsColNumber)
		}
	}


	function createCols(colNumber)
	{
		for(i=0;i<colNumber;i++){
			var col=$('<div></div',{
				class: "masonry-col",
				style: "width:"+100/colNumber+"%",
			})
			.appendTo($('#masonry'))
		}
		return $('#masonry .masonry-col');
	}

	
	function placeImages(cols,colNumber){
		for(var i=0;i<images.length;i++){
			var img = $('<img />',
             { src: "img/"+images[i], 
             })
             .appendTo(cols[i%colNumber]);
		}
	}



	this.openImage=(function(){
		$('#masonry').on('click','img',function(){
		var img = $('<img />',
             { src: $(this).attr('src'), 
             	class:'img-responsive'
             })
              .appendTo($("#fullscreen-image"));
        $("#fullscreen-image").show()
        $("#overlay").show()
		})
	})()

	

	this.closeImage=(function(){
		$('body').on('click','#fullscreen-image',function(e){
			if(e.target.tagName!="IMG"){
				$("#fullscreen-image").empty();
				$('#fullscreen-image').hide()
				$('#overlay').hide()
			}
		})
	})()


}
images=["c3d83a9fc71ccc18b1a23e3921aa6b67.jpg","5d6bdf2e17ea429f197829f8568895b3.jpg","2bf8b2afef0252b5025a9fd2b8888c59.jpg","3c3667b2f103b069329c658f4e543d1e.jpg","0541a9c431f31fdea9688e477355d333.jpg","2541a1cffd5b800849e18b0343da6c62.jpg","2c4725bbb5e8f396fde430aff0c62a47.jpg","393c4b5fecd9c8393a99e5fdbb72fea1.jpg","038fb8b9e0ff07bd431701ff3c3585a8.jpg","44efcf99d6ad2c420ebc80f8ee76dc07.jpg","835aef579b593b8006e9e04db1aba2f3.jpg","85604e4f5927afbd749e95becd38bf64.jpg","94d1109220c83fdff8142223b66dd90d.jpg","9640378eb985a3b46fc8e7c5ede1fc47.jpg","a6ef8ba06edd36ad3701513261463ab2.jpg","bbd45332cbdad70ad1d231ca7b73f8fb.jpg","bc27bf3073d1ff9c184575f3d72cd3c5.jpg","bc6d8c9e89bb4b0f6cf9f175d10bd19f.jpg","bda3afe639ba2fb97c7f996c03dd590c.jpg","bec364be8736fae83f5055c02dd09662.jpg","blossom-by-isabelle-alexis-9-570x380.jpg","e15f0a193fc00ee128e3a91367d4bb14.jpg","ee1f2bc61262f262763e46885c8f8210.jpg","tumblr_m2ywoocm8I1qgcnpjo1_500.jpg"]
masonry=new Masonry({
		imgs:images,
		xsColNumber:3,
		sColNumber:5,
		mdColNumber:7,
		lgColNumber:9,
})
$(document).ready(function(){
	masonry.create()
})
$( window ).resize(function() {
  	masonry.create()
});