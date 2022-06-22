//render taktics page
//console.log(takticsPostsData[0].description); 


{/* <a href="https://www.youtube.com/watch?v=Svs-EaDZUWk">
                        <section class="post video-post">
                            <img src="../res/img/icon/youtube-svgrepo-com.svg" alt="">
                            <div class="post-meta">
                                <h4 class="post-title">Базові позиції готовності до стрільби</h4>
                                <p class="post-desc">Навчальне відео по основним позиціям готовності до стрільби</p>
                                <p class="post-type">Тип: посилання на YouTube <span class="vid-duration">Час: ~15 хв.</span></p>
                            </div>                        
                        </section>
                    </a> */}
function renderPostCard(postData) {

}

//posts filters
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

function dark() {
    document.getElementById("dark_css").disabled = false;
    console.log("dark");
    darkBtn.style.display = 'none';
    lightBtn.style.display = 'block';
    lightBtn.addEventListener('click', ()=>{
        darkBtn.style.display = 'block';
        lightBtn.style.display = 'none';
        mainBg.style.backgroundColor = '';
        mainBg.style.color = '';
        document.getElementById("dark_css").disabled = true;
    })
}

//check system theme

  const prefersDarkMode = window.matchMedia("(prefers-color-scheme:dark)").matches; // true
  if(prefersDarkMode) {
    dark();
      console.log('dark active');
  }
  else {
    console.log('light active');
  }

    
    