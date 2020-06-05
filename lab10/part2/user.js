$(function(){
$("#info").click(userInfo);
$("#post").click(userPosts);
$("#comment").click(postComments);
    });

    function userInfo(){
        var baseurl = 'http://jsonplaceholder.typicode.com/users/1';
        // alert($('#hi').val);
        $.get(baseurl) 
        .done(display)
        .fail(ajaxFailure)     
    }

    function display(data) {
        $("#output").val(data.name + "  " + data.email + "  " + data.address.city);
    }

    function ajaxFailure() {
        $("#output").val("ajax failure.");
    }

    function userPosts(){
        var baseurl = 'http://jsonplaceholder.typicode.com/posts';
        $.get(baseurl, {data: { "userId" : 1 }}) 
        .done(display2)
        .fail(ajaxFailure2)
    }

    function display2(data) {
        // $("#comment").appendTo("#output");
        $.each(data,function(index, val){
            $("#output").val($("#output").val() + val.body ).append("#comment");
        });
    }

    function ajaxFailure2() {
        $("#output").val("ajax failure.");
    }


    function postComments(){
        var baseurl = 'http://jsonplaceholder.typicode.com/comments';
        $.get(baseurl, {data: { "postId" : 1 }}) 
        .done(display3)
        .fail(ajaxFailure3)
    }

    function display3(data) {
       $.each(data,function(index, val){
            $("#output").val($("#output").val() + val.body);
        });
    }

    function ajaxFailure3() {
        $("#output").val("ajax failure.");
    }