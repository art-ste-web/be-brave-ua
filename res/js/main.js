//filters
const vidBtn = document.getElementById('vid_btn');
const txtBtn = document.getElementById('txt_btn');
const vidCheckBox = document.getElementById('vid_ch');
const txtCheckBox = document.getElementById('text_ch');
const vidIndicator = document.querySelector('.type-vid');
const txtIndicator = document.querySelector('.type-txt');

const vidPosts = document.querySelectorAll('.video-post');
const txtPosts = document.querySelectorAll('.text-post');

if(vidBtn && txtBtn) {
    vidBtn.addEventListener('click', ()=>{
        if(!vidCheckBox.checked){
            vidCheckBox.checked = true;
            vidBtn.classList.add('primary-btn');
            vidBtn.style.opacity = '1';
            vidPosts.forEach(post => {
                post.style.display = 'flex';
            });
            vidIndicator.style.display = 'inline';
            //console.log('1');
        }
        else{
            vidCheckBox.checked = false;
            vidBtn.classList.remove('primary-btn');
            vidBtn.style.opacity = '.4';
            vidPosts.forEach(post => {
                post.style.display = 'none';
            });
            vidIndicator.style.display = 'none';
            //console.log('2');
        }
    })
    
    txtBtn.addEventListener('click', ()=>{
        if(!txtCheckBox.checked){
            txtCheckBox.checked = true;
            txtBtn.classList.add('primary-btn');
            txtBtn.style.opacity = '1';
            txtPosts.forEach(post => {
                post.style.display = 'flex';
            });
            txtIndicator.style.display = 'inline';
            //console.log('1');
        }
        else{
            txtCheckBox.checked = false;
            txtBtn.classList.remove('primary-btn');
            txtBtn.style.opacity = '.4';
            txtPosts.forEach(post => {
                post.style.display = 'none';
            });
            txtIndicator.style.display = 'none';
            //console.log('2');
        }
    })
}



//dark mode
const darkBtn = document.querySelector('.dark-btn');
const lightBtn = document.querySelector('.light-btn');
const mainBg = document.querySelector('.p-ui');
darkBtn.addEventListener('click', dark);

function switchDark() {
    mainBg.style.backgroundColor = '#202022';
    mainBg.style.color = '#eee';
    darkBtn.style.display = 'none';
    lightBtn.style.display = 'block';
    lightBtn.addEventListener('click', ()=>{
        darkBtn.style.display = 'block';
        lightBtn.style.display = 'none';
        mainBg.style.backgroundColor = '';
        mainBg.style.color = '';
    })
}

function dark() {
    if(document.getElementById("dark")) {
        document.getElementById("dark").disabled = false;
    }
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '../res/css/dark.css';
    link.id = 'dark';
    document.head.appendChild(link);
    console.log("dark");

    darkBtn.style.display = 'none';
    lightBtn.style.display = 'block';
    lightBtn.addEventListener('click', ()=>{
        darkBtn.style.display = 'block';
        lightBtn.style.display = 'none';
        mainBg.style.backgroundColor = '';
        mainBg.style.color = '';
        document.getElementById("dark").remove();
    })
}

// if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
//     // dark mode
//     console.log('dark')
//     mainBg.style.backgroundColor = 'red';
//     console.log(window.matchMedia);
// }

// if (window.matchMedia('(prefers-color-scheme)').media !== 'not all') {
//     console.log('🎉 Тёмный режим поддерживается');
//   }


  const prefersDarkMode = window.matchMedia("(prefers-color-scheme:dark)").matches; // true
  if(prefersDarkMode) {
      console.log('dark active');
  }
  else {
    console.log('light active');
  }

    
    