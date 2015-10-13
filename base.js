console.log("Sanity Check: JS is working!");

$(document).ready(function(){

 // console.log("DEBUG: App starting...");

 	var app = new MyBlog();



});

function MyBlog(){
	this.entries = [];

	this.$pushMeButton = $('.btn');
	this.$entry = $('#myText');

	var blog = this;

	this.$pushMeButton.on('click', function(event){
		event.preventDefault();
		blog.createItem(blog.$entry.val());
	});

}

MyBlog.prototype.createItem = function(text){

	this.entries.push(text);

	console.log("DEBUG: added entry: "+text);

}

MyBlog.prototype.removeItem = function(text){

	var idx = this.entries.indexOf(text);
	if (idx != -1){
		this.entries.splice(idx, 1);
	}

}

MyBlog.prototype.printEntries = function(){

	console.log(this.entries.toString());

}

