

document.addEventListener("DOMContentLoaded", function(){
	const baseURL = 'https://render.githubusercontent.com/view/3d?url=';
	const iframe = document.querySelector('iframe');
	let gitURL = document.getElementById('git-src');
	const button = document.querySelector('#copy');


	gitURL.addEventListener("change", watchTextEntry, false);
	gitURL.addEventListener("update", watchTextEntry, false);
	gitURL.addEventListener("input", watchTextEntry, false);
    button.addEventListener("click", copyEmbed, false);


	function watchTextEntry(event) {
	  let preview = document.querySelector('.demo')
	  let embedCode = document.querySelector('#embed-code')
	  if (event.target.value){
	  	let dirtyURL = event.target.value;
	  	let cleanURL = dirtyURL.replace('https://github.com','');
	  	cleanURL = cleanURL.replace('blob/','');
	  	cleanURL = 'https://raw.githubusercontent.com' + cleanURL;
	  	console.log(cleanURL)
	  		  iframe.src = baseURL +  cleanURL;
	  } else {
		 iframe.src = baseURL + 'https://raw.githubusercontent.com/woodwardtw/passenger_pigeon/master/1364_pp_skull2_edited_small.stl'
	  }
	  embedCode.value = preview.innerHTML
	}
    
    function copyEmbed(event){
    	let embed = document.querySelector('#embed-code');
     	embed.select();
	 	embed.setSelectionRange(0, 99999); /*For mobile devices*/
		  /* Copy the text inside the text field */
		  document.execCommand("copy"); 
    }


});

