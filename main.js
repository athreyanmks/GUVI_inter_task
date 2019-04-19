$(document).ready(function(){
  $("#lform").click(function(){
    $("#registerDiv").slideUp("fast");
    $("#loginDiv").slideDown("fast");
  });
});

$(document).ready(function(){
  $("#rform").click(function(){
    $("#loginDiv").slideUp("fast");
    $("#registerDiv").slideDown("fast");
  });
});

$(document).ready(function(){
  $("subReg").click(function(){
    var fname,lname,uname,pwd,rpwd;
    fname = $("#fname").text();
    lname = $("#lname").text();
    uname = $("#uname").text();
    pwd = $("#pwd").text();
    rpwd = $("#rpwd").text();

    console.log(fname);
  });
});
