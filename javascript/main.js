document.addEventListener('DOMContentLoaded' , 
    function(){
        var visitorsNumber= document.getElementById('visitorsNumber')
        let countVisit = localStorage.getItem('pageViews')
        if(countVisit){
            countVisit = Number(countVisit) + 1
        }
        else{
            countVisit = 1
        }
        localStorage.setItem('pageViews' , countVisit)
        visitorsNumber.innerHTML = countVisit
    }
)
let topBtn = document.getElementById('topBtn');
window.onscroll = function(){
    if(document.documentElement.scrollTop > 300){
        topBtn.style.display = 'block'
    }
    else{
        topBtn.style.display = 'none'
    }
}
topBtn.addEventListener('click' , function(){
    window.scroll({
        top:0 , 
        behavior:"smooth",
    })
})
function form(){
    let name = document.getElementById('name').value;
    let enail = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let subject = document.getElementById('subject').value;
    if (name === '' || email === '' || password === '' || subject === ''){
        alert('please input all feilds');
        return false
    }
    if(email.indexOf('@') === -1 || email.indexOf('.') === -1){
        alert('please input valid email');
        return false
    }
    return true
}