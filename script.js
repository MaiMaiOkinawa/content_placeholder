const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profile_img = document.getElementById('profile_img');
const name = document.getElementById('name');
const date = document.getElementById('date');

const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_bg_texts = document.querySelectorAll('.animated-bg-text');

// Call getData func after 2.5s
setTimeout(getData, 2000);

function getData() {
  header.innerHTML = '<img src="https://images.unsplash.com/photo-1610296669228-602fa827fc1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1075&q=80" alt="universe"/>'
  title.innerHTML = 'Lorem ipsum dolor sit amet.'
  excerpt.innerHTML = ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim, suscipit.'
  profile_img.innerHTML = '<img src="https://randomuser.me/api/portraits/women/45.jpg" alt="woman portrait" />'
  name.innerHTML = 'Maï Uchida'
  date.innerHTML = 'May 10, 2023'

  // Remove all the bg gradients and texts
  animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'))
  animated_bg_texts.forEach((text) => text.classList.remove('animated-bg-text'))
}
/* 
<<--- Random portrait API --->>
https://randomuser.me/
*/

