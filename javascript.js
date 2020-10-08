$(document).ready(function() {

    var page=1;

    $('body').keydown(function(e){
        if(e.keyCode == 40 && page ==1){
            $('#center').animate({scrollTop:$("#test2").offset().top}, 900, 'swing');
            page=2;
        }
        else if (e.keyCode == 38 && page ==2){
            $('#center').animate({scrollTop:$("#test").offset().top}, 2000, 'swing');
            page=1;
        }
    });

    $('a').click(function(e){
        var target= $(this).attr("href");
        $target=$(target);
        if($(this).attr("href")!="#test2" && $(this).attr("href")!="#test"){
            e.run();
        }

        e.preventDefault();

        
        $('#center').scroll();
        if($(this).attr("href")=="#test2"){
            console.log($target.offset());
            $('#center').animate({scrollTop:$target.offset().top}, 900, 'swing');
        }
        else if ($(this).attr("href")=="#test"){
            $('#center').animate({scrollTop:$target.offset().top}, 2000, 'swing');
        }
    });
});

    $(window).on("mousewheel", function(e){
        e.preventDefault();
    });