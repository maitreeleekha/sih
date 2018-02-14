window.addEventListener('load',init2);
var blogCounter=0;
 
function init2(){

    document.querySelector('.editPost').addEventListener('click',function(){
        editBlog();
    //TODO
    //post http request 
    
    });

    document.querySelector('#profileSection').style.display='grid';
    document.querySelector('#blogSection').style.display='none';

    document.querySelector('#profile').addEventListener('click',function(){

    document.querySelector('#profileSection').style.display='grid';
    document.querySelector('#blogSection').style.display='none';
});

    document.querySelector('#blog').addEventListener('click',function(){

    //http request to load all blogs.
    //TODO
    document.querySelector('#profileSection').style.display='none';
    document.querySelector('#blogSection').style.display='block';

});

$(".blogImageUpload").click(function(e) {

    document.querySelector("#blogPicture").click();
    document.querySelector("#blogPicture").addEventListener('change',(function(){
        fasterPreview(this);
    }));

});

    document.querySelector('#addBlog').addEventListener('click',function(){
        addNewBlog();   
});

document.querySelector('#cancelBlog').addEventListener('click',function(){
    cancelBlog();
});

document.querySelector('#saveBlog').addEventListener('click',function(){
    saveBlog();
    //TODO
    //post http request 
});

document.querySelector('.deletePost').addEventListener('click',function(){
    //TODO
    //post http request
    deleteBlog();
})

var likeButtons = document.querySelectorAll('.toggleLike');

likeButtons.forEach(function(i){
    i.addEventListener('click',likeToggle);
    //http request to incr likes
});
}

function deleteBlog(){
    //http requests.
    var blog  = event.target.parentElement;
    blog.parentElement.removeChild(blog);
}

function addNewBlog(){
   var form = document.querySelector('.blogger');
   form.style.display='block';
   form.blogTitle.value='';
   form.blogDesc.value='';
}
function editBlog(){
     
    console.log('edit');
    var bloggerForm = document.querySelector('.blogger');
    var form = bloggerForm.cloneNode(true);
    console.log(form);
    var target = event.target;
    var blog = target.parentElement;
    console.log(blog);
    var time = blog.querySelector('.blogTime').innerHTML;
    var likes = blog.querySelector('.blogLikes').innerHTML;
    form.blogTitle.value=blog.querySelector('.titleBlog').innerHTML;
  
    
    form.blogDesc.value=blog.querySelector('.descBlog').innerHTML;
    while(blog.firstChild){
        console.log(blog.firstChild.classList);
        blog.removeChild(blog.firstChild);
        console.log('child remove');
    }
    blog.appendChild(form);
    form.saveBlog.addEventListener('click',function(){
        saveEditedBlog(time,likes);
        //TODO
        //save edited post.
    });

    form.cancelBlog.style.display='none';
    form.style.display='block';
}

function saveEditedBlog(time,likes){
    var form = event.target.parentElement;
    var blogDiv= form.parentElement;

    var blogTemplate =  document.querySelector('#blogSection').querySelector('#blogsMain').querySelector('#blogTemplate');
    blogTemplate.childNodes.forEach(function(i){
        var tempi=i.cloneNode(true);
        blogDiv.appendChild(tempi);
    });
blogDiv.querySelector('.titleBlog').innerHTML=form.blogTitle.value;
blogDiv.querySelector('.descBlog').innerHTML=form.blogDesc.value;

//add for blog image.


blogDiv.querySelector('.editPost').addEventListener('click',function(){
    editBlog();
});


blogDiv.querySelector('.deletePost').addEventListener('click',function(){
  deleteBlog();
});
blogDiv.querySelector('.toggleLike').addEventListener('click',function(){
  likeToggle()
});

blogDiv.querySelector('.blogTime').innerHTML=time;
blogDiv.querySelector('.blogLikes').innerHTML=likes;

    blogDiv.removeChild(form);
}
function postBlog(){
    console.log('post');
}

function likeToggle(){

console.log('like');
if(event.target.classList.contains('like')){
    //decrement likes 
    //http request
    event.target.classList.remove('like');
    event.target.classList.add('dislike');
    

}
else{
    event.target.classList.add('like');
}
}


function saveBlog(){

  var form = event.target.parentElement;
  console.log(form.blogDesc.value);
  var blogTemplate =  document.querySelector('#blogSection').querySelector('#blogsMain').querySelector('#blogTemplate');
  var newBlog = blogTemplate.cloneNode(true);
  blogCounter++;
  newBlog.id='blog'+blogCounter;
  newBlog.style.display='block';
  document.querySelector('#blogSection').querySelector('#blogsMain').appendChild(newBlog);

console.log(newBlog);
  newBlog.querySelector('.descBlog').innerHTML=form.blogDesc.value;
  newBlog.querySelector('.titleBlog').innerHTML=form.blogTitle.value; 

  //blog image post

  if(form.querySelector('#blogImg').getAttribute('src')!='images/blogDefault.jpg') 

  {newBlog.querySelector('.imageBlog').setAttribute('src',form.querySelector('#blogImg').getAttribute('src'));}

  newBlog.querySelector('.editPost').addEventListener('click',function(){
      editBlog();
  });
  newBlog.querySelector('.deletePost').addEventListener('click',function(){
    deleteBlog();
});
newBlog.querySelector('.toggleLike').addEventListener('click',function(){
    likeToggle()
});
var d = new Date();
/*var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
newBlog.querySelector('.blogTime').innerHTML = days[d.getDay()];*/

var time = d.getDate();
var months=['Jan','Feb','Mar','April','May','June','July','Aug','Sept','Oct','Nov','Dec'];
time+=' '+months[d.getMonth()];
time+="'"+d.getFullYear();
time+=', '+d.getHours()+':';
var miniutes=['00','01','02','03','04','05','06','07','08','09'];
if(miniutes[d.getMinutes()]){
    time+=miniutes[d.getMinutes()];
}
else{
    time+=d.getMinutes();
}



newBlog.querySelector('.blogTime').innerHTML=time;
newBlog.querySelector('.blogLikes').innerHTML='--likes--';
  //newBlog.style.display='block';
  form.style.display='none';
  
}

function cancelBlog(){

    document.querySelector('.blogger').blogTitle.value='';
    document.querySelector('.blogger').blogPicture.value='';
    document.querySelector('.blogger').blogDesc.value='';
    document.querySelector('.blogger').querySelector('#blogImg').setAttribute('src','images/blogDefault.jpg');
    document.querySelector('.blogger').style.display='none';

}

function fasterPreview( uploader ) {
    if ( uploader.files && uploader.files[0] ){
          document.querySelector('#blogImg').setAttribute('src', window.URL.createObjectURL(uploader.files[0]));
    }

  /*  propic= $('#blogImg').attr('src');
    //changeProfilePicSrc();
    console.log(propic);
    profileImage = document.getElementById('imageProfile');
    imgData = getBase64Image(profileImage);
    localStorage.setItem("imgData", imgData);
    console.log(imgData);*/
}