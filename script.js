/**typing aniation */
var typed = new Typed(".typing",{
    strings:["","Web Designer","Web Developer","Graphic Designer","YouTuber"],
    typeSpeed: 100,
    BackSpeed: 60,
    loop:true
})

/**See More button */

document.getElementById('see-more-btn').addEventListener('click', function() {
  var moreContent = document.querySelector('.more-content');
  if (moreContent.style.display === 'none' || moreContent.style.display === '') 
  {
    moreContent.style.display = 'block';
    document.getElementById('see-more-btn').innerText = 'See less';
  } else {
    moreContent.style.display = 'none';
    document.getElementById('see-more-btn').innerText = 'See more';
  }
});
