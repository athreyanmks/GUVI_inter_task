function delCookie(name) {
    document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

function retVal(dataReq)
{
  $.ajax({
    type: "POST",
    url: "profile.php",
    data: dataReq,
    cache: false,
    success: function(result){
      //alert(result);
      result = JSON.parse(result);

      //console.log(result.fname);
      var name = result.fname+" "+result.lname;
      $("#name").html(name);
      var uname  = result.uname;
      $("#uname").html(uname);

      var dob,age,cont;
      dob = result.dob;
      $("#dob").html(dob);
      $("#dobEdit").val(dob)
      age = result.age;
      $("#age").html(age);
      $("#ageEdit").val(age);
      cont = result.cont;
      $("#contact").html(cont);
      $("#contactEdit").val(cont);
    }
    });
}

$(document).ready(function(){
  $("#logout").click(function(){

    delCookie("id");

    $.ajax({
      type: "POST",
      url: "logout.php",
      cache: false,
      success: function(result){
        //alert(result);
      }
    });

    window.location.href="index.html";

  });
});
$(document).ready(function(){
  var cookieVal = getCookie("id");

  dataReq = "id="+cookieVal;

  //console.log(dataReq);
    retVal(dataReq);


});

$(document).ready(function(){

  $("#edit").click(function(){
    //console.log("clicked");

    //$("#profileDiv").attr("style","display:none;");
    $("#profileEdit").attr("style","display:block;");

  });

});

$(document).ready(function(){

  $("#back").click(function(){
    //console.log("clicked");

    $("#profileEdit").attr("style","display:none;");
    //$("#profileDiv").attr("style","display:block;");

  });

});

$(document).ready(function(){
  $("#submitEdit").click(function(){
    //console.log("clicked");
    var dob,age,cont

    dob = $("#dobEdit").val();
    age = $("#ageEdit").val();
    cont = $("#contactEdit").val();

    var dataPost = "dob="+dob+"&age="+age+"&cont="+cont;

    //console.log(dataPost);

    $.ajax({
      type: "POST",
      url: "profileedit.php",
      data: dataPost,
      cache: false,
      success: function(result){
        //alert(result);
      }
    });

    var cookieVal = getCookie("id");

    dataReq = "id="+cookieVal;
      retVal(dataReq);

      $("#profileEdit").attr("style","display:none;");
      //$("#profileDiv").attr("style","display:block;");

  });
});

$(document).ready(function(){
  $(".FORM").on('input',function(){

    var dob,age,cont

    dob = $("#dobEdit").val();
    age = $("#ageEdit").val();
    cont = $("#contactEdit").val();

    var dataPost = "dob="+dob+"&age="+age+"&cont="+cont;

    //console.log(dataPost);

    $.ajax({
      type: "POST",
      url: "profileedit.php",
      data: dataPost,
      cache: false,
      success: function(result){
        //alert(result);
      }
    });

    var cookieVal = getCookie("id");

    dataReq = "id="+cookieVal;
      retVal(dataReq);

  });
});

$(document).ready(function(){
  $("#overlay").mouseenter(function(){

    var pic = $("#overlay")

    pic.animate({opacity:'0.2'},"fast");

  });

  $("#overlay").mouseleave(function(){

    var pic = $("#overlay")

    pic.animate({opacity:'0'},"fast");

  });
});

$(document).ready(function(){

  $('#overlay').click(function(){

    console.log("clicked");

    $('#prof_pic').trigger('click');

  });

  $("#prof_pic").on('input',function(){

    console.log("changetime");

  });
});
