//menu slide hover effect
let drop = document.querySelectorAll('.drop');
let menu = document.getElementById('clinica');
let menu2 = document.getElementById('loja');

drop[0].addEventListener('mouseover',()=>{

//Efeito toggle	
	menu.classList.add('show');
	menu.classList.remove('hide');	

	if(menu2.classList.contains('show2')){
		menu2.classList.add('hide');
		menu2.classList.remove('show2');
	}else{return;}
})

menu.addEventListener('mouseleave',()=>{
	menu.classList.add('hide');
	menu.classList.remove('show');
})

drop[1].addEventListener('mouseover',()=>{	
		menu2.classList.add('show2');
		menu2.classList.remove('hide');

		if(menu.classList.contains('show')){
			menu.classList.add('hide');
			menu.classList.remove('show');
		}else{return;}
})

menu2.addEventListener('mouseleave',()=>{
	menu2.classList.add('hide');
	menu2.classList.remove('show2');
})

//google maps
function initMap() {
  let map;
  map = new google.maps.Map(document.getElementById("map"), {
  center: { lat: -29.687215, lng: -53.814359 },
  zoom: 16
  });
}

//select updade content
let imgs = document.querySelector('.staff').children;
imgs = Array.from(imgs);
let nomes = document.getElementById('nomes');
let bio = document.getElementById('bio');

imgs.forEach(select);

function select(foto){
	foto.addEventListener('click',(e)=>{
		e.currentTarget.classList.add('selected');
		if(e.currentTarget == imgs[0]){
			imgs[1].classList.remove('selected');
			imgs[2].classList.remove('selected');
			nomes.textContent = "Pedro"
			bio.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lobortis convallis tellus quis malesuada. Aliquam mattis quam sed arcu vulputate, sed ultrices mi posuere. Nullam dapibus justo magna, eget fringilla magna maximus a. <br><br>Fusce mattis sem rutrum dignissim aliquam. Nulla condimentum, risus a fringilla dapibus, sapien nisi egestas mi, ut pharetra odio magna vel risus. Cras dignissim, sapien ut dapibus vehicula, diam elit facilisis neque, eu tempor justo ligula a magna. Quisque auctor ligula et nunc rutrum consequat. Ut elementum in erat sagittis malesuada. Sed ultrices diam ac efficitur ultricies. Morbi blandit varius nibh, in fringilla dui blandit eget. Vivamus pellentesque odio sit amet fringilla iaculis. Quisque at nibh eleifend, molestie est ac, cursus elit. Mauris finibus sem nec hendrerit iaculis."
		}else if(e.currentTarget == imgs[1]){
			imgs[0].classList.remove('selected');
			imgs[2].classList.remove('selected');
			nomes.textContent = "Maria"
			bio.innerHTML = "In hac habitasse platea dictumst. Nulla viverra lacinia laoreet. Fusce sollicitudin condimentum neque at ornare. Duis porta facilisis ligula id interdum. Suspendisse ac dolor libero. Cras volutpat venenatis turpis non volutpat. Aliquam interdum scelerisque tellus a lacinia. Duis non elementum enim. Phasellus sagittis nulla sit amet nibh vehicula hendrerit. <br><br>Quisque posuere vulputate ligula, ut vestibulum enim. In pulvinar lobortis nibh, vitae faucibus quam finibus eget. Curabitur lacinia a odio et consectetur. Praesent laoreet cursus nisl. Interdum et malesuada fames ac ante ipsum primis in faucibus."
		}else{
			imgs[0].classList.remove('selected');
			imgs[1].classList.remove('selected');
			nomes.textContent = "João"
			bio.innerHTML = "Vestibulum ante augue, pellentesque vel feugiat non, gravida et ligula. In hac habitasse platea dictumst. Maecenas mollis facilisis urna id tincidunt. Integer at mauris sit amet sem tempus lobortis sed non dolor. Sed vehicula eget lorem facilisis faucibus. Ut scelerisque ullamcorper dictum. Sed quam neque, egestas quis lectus et, cursus sollicitudin nisl."
		}
		
	})
}





