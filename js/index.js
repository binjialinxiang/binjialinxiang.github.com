// 自我介绍
$('#li1').click(()=>{
    $('#introduce').addClass('animated bounceInDown').show();
    $('#mask').show();
});
$('#mask').click(()=>{
    $('#introduce').removeClass('animated bounceInDown').hide(400);
    $('#mask').hide();
});
//个人简历
$('#li2').click(()=>{
    $('#resume').addClass('animated bounceInDown').show();
    $('#mask').show();
});
$('#mask').click(()=>{
    $('#resume').removeClass('animated bounceInDown').hide(400);
    $('#mask').hide();
});
//照片
$('#li3').click(()=>{
    $('#Photo').addClass('animated bounceInDown').show();
    $('#mask').show();
});
$('#mask').click(()=>{
    $('#Photo').removeClass('animated bounceInDown').hide(400);
    $('#mask').hide();
});
//项目
$('#li4').click(()=>{
    $('#project').addClass('animated bounceInDown').show();
    $('#mask').show();
});
$('#mask').click(()=>{
    $('#project').removeClass('animated bounceInDown').hide(400);
    $('#mask').hide();
});
//技能
$('#li5').click(()=>{
    $('#Skill').addClass('animated bounceInDown').show();
    $('#mask').show();
});
$('#mask').click(()=>{
    $('#Skill').removeClass('animated bounceInDown').hide(400);
    $('#mask').hide();
});