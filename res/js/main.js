//render taktics page
const postsContainer = document.querySelector('.posts-container');
if(postsContainer) {
    const pageHead = document.querySelector('.main-header').textContent;
    console.log(pageHead);
    switch (pageHead) {
        case 'Основи тактики та вогневої підготовки':
        renderPostCard(takticsPostsData);
        break;
        case 'Основи надання допомоги при пораненнях':
            renderPostCard(taktMedPostsData);
        break;
        // case 5:
        //   alert( 'Перебор' );
        //   break;
        // default:
        //   alert( "Нет таких значений" );
    }
}



function renderPostCard(postData) {
    
    postData.forEach(element => {
        
        const cardMarkup = `<a href=${element.link}>
            <section class="post ${element.postType}">
                <img src=${element.icon} alt="">
                <div class="post-meta">
                    <h4 class="post-title">${element.title}</h4>
                    <p class="post-desc">${element.description}</p>
                    <p class="post-type">${element.type}<span class="vid-duration">${element.duration}</span></p>
                </div>                        
            </section>
        </a>`
        postsContainer.innerHTML += cardMarkup;
        
    });
    
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

    
    