let oInt =document.querySelector('#introduce');
let oRes =document.querySelector('#resume');
let opho =document.querySelector('#Photo');
let oPro =document.querySelector('#project');
let oSki =document.querySelector('#Skill');

function show (obj){
    $(obj).addClass('animated bounceInDown').show();
    $('#mask').show();
}
function hides(obj){
    $(obj).removeClass('animated bounceInDown').hide(400);
    $('#mask').hide();
}

// 自我介绍
$('#li1').click(()=>{
   show(oInt);
});
$('#mask').click(()=>{
   hides(oInt);
});
//个人简历
$('#li2').click(()=>{
    show(oRes);
});
$('#mask').click(()=>{
    hides(oRes);
});
//照片
$('#li3').click(()=>{
    show(opho);
});
$('#mask').click(()=>{
    hides(opho);
});
//项目
$('#li4').click(()=>{
    show(oPro);
});
$('#mask').click(()=>{
    hides(oPro);
});
//技能
$('#li5').click(()=>{
    show(oSki);
});
$('#mask').click(()=>{
    hides(oSki);
});

