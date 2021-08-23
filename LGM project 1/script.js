function signUp(){
   let input=document.getElementById('input1').value;
   
   if(input===null || input===''){
         alert("Please Enter a valid Email ID");
   }
   else{
         alert("Login successful!!");
   }            
}

function playVideo(){
    let vid=document.getElementById('video');
    vid.remove();
    let iframe=document.createElement('iframe');
    let con=document.getElementById('con6');
    iframe.width='800px';
    iframe.height='538px';
    iframe.style.marginLeft='22%';
    iframe.style.marginTop='50px';
    iframe.src="https://player.vimeo.com/video/275412279";
    iframe.title="video player";
    iframe.frameBorder=0;
    iframe.allow="accelerometer";
    con.appendChild(iframe);
    console.log(iframe);
}