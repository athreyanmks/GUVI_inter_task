$(document).ready(function(){
  var cookieVal = getCookie("id")
  if(cookieVal != "")
  {
    window.location.href = "profile.html";
  }

});

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
  $("#subReg").click(function(){
    var fname,lname,uname,pwd,rpwd;
    fname = $("#fname").val();
    lname = $("#lname").val();
    uname = $("#uname").val();
    pwd = $("#pwd").val();
    rpwd = $("#rpwd").val();

    if(fname==""||lname==""||uname==""||pwd==""||rpwd=="")
    {
      alert("Please fill all fields")
    }
    else
    {
      var registerInfo = "fname="+fname+"&lname="+lname+"&uname="+uname+"&pwd="+pwd+"&rpwd="+rpwd;

      $.ajax({
        type: "POST",
        url: "register.php",
        data: registerInfo,
        cache: false,
        success: function(result){
        //alert(result);
      }
        });

        $("#registerDiv").slideUp("fast");
        $("#loginDiv").slideDown("fast");
    }


  });
});

$(document).ready(function(){
  $("#subLog").click(function(){
    var fname,lname,uname,pwd,rpwd;
    uname = $("#luname").val();
    pwd = $("#lpwd").val();

    var loginInfo = "uname="+uname+"&pwd="+pwd;

    $.ajax({
      type: "POST",
      url: "login.php",
      data: loginInfo,
      cache: false,
      dataType: "text",
      /*dataFilter: function(x,text){
        console.log(x);

      },*/
      success: function(result){
        result = Number(result);

        if(result)
        {
          setCookie("id",result,3);
          window.location.href = "profile.html";

        }
        else {
          console.log(result)
          alert("Login failed");
        }

    }
    });
      //var cookieVal = getCookie("id");

  });
});


$(document).ready(function(){
  $("#rpwd").on('input',function(){

    console.log("errorcheck");

      var pwd,rpwd
      pwd = $("#pwd").val();
      rpwd = $("#rpwd").val();

      if(pwd != rpwd)
      {
        $("#errchk").attr("class","glyphicon glyphicon-remove form-control-feedback");
        $("#subReg").prop('disabled',true);
      }
      else {
        $("#errchk").attr("class","glyphicon glyphicon-ok form-control-feedback");
        $("#subReg").prop('disabled',false);

      }

  });

  $("#uname").on('input',function(){

    var uname = $("#uname").val();
    dataObj = "uname="+uname;

    $.ajax({

      type: "POST",
      url: "uname_check.php",
      data: dataObj,
      cache: false,
      success: function(result){
      result = Number(result);

      if(result)
      {
        $("#unameCheck").attr("class","text-danger");
        $("#unameCheck").html("Username already exists");
        $("#subReg").prop('disabled',true);
        //$("#subReg").html("Don't");
      }
      else if(!result)
      {
        $("#unameCheck").attr("class","text-success");
        $("#unameCheck").html("Valid Username");
        $("#subReg").prop('disabled',false);
        //$("#subReg").html("Go Ahead");
      }

      if($("#uname").val()=="")
      {
        $("#unameCheck").attr("class","text-danger");
        $("#unameCheck").html("Username can't be empty");
        $("#subReg").prop('disabled',true);
      }

    }

    });
  });
});
