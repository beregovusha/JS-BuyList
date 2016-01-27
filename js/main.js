/**
 * Created by Angelina on 20.01.2016.
 */
$(function(){
  var title;
    var LIST = $('.mainPanel');
    var I_T = $('.one_item').html();
    var L_L = $('.leftS');
    var L_I = $('.one_product').html();
    var B_L = $('.boughtS');
    var B_I = $('.one_product').html();

    $('#articleTitle').click(function(){
        $('#articleTitle').val("");
    })
    $('#add').click(function() {
        title = $('#articleTitle').val();
        var node = $(I_T);
        var leftNode = $(L_I);
        node.find(".products").val(title);
        leftNode.text(title);
        LIST.append(node);
        L_L.append(leftNode);
        var AMOUNT = $('.num').html();
        leftNode.append(AMOUNT);
        $('#articleTitle').val("");
        $('#articleTitle').focus();
    })
    $('.cancel').click(function(){
        $(this).parent().hide();
        var txt = $(this).parent().find('.products').val();
        $('.products:contains("' + txt + '")').hide();
        })
    $('.bought').click(function () {
        $(this).parent().find('.products').addClass("crossedOut");
        $(this).parent().find('.button').hide();
        $(this).parent().find('.counter').addClass("boughtArticleAmount");
        $(this).parent().find('.bought').addClass("notBought");
        $(this).parent().find('.bought').removeClass("bought");
        $(this).parent().find('.notBought').text("Не куплено");
        $(this).parent().find('.cancel').hide();
        var txt = $(this).parent().find('.products').val();
        $('.products:contains("' + txt + '")').hide();
        var boughtNode = $(B_I);
        boughtNode.text(txt);
        B_L.append(boughtNode);
        var AMOUNT = $('.num').html();
        boughtNode.append(AMOUNT);
        boughtNode.addClass('crossedOut');

    $('.notBought').click(function () {
        $(this).parent().find('.products').removeClass("crossedOut")
        var LIST_C = $('.title');
        var I_T_C = $('.centre').html();
        var nodeC = $(I_T_C);
        LIST_C.append(nodeC);
        $(this).parent().find('.counter').removeClass("boughtArticleAmount");
        $(this).parent().find('.notBought').removeClass("bought");
        $(this).parent().find('.bought').removeClass("notBought");
        $(this).parent().find('.bought').text("Куплено");
        $(this).parent().find('.cancel').append();
    })
    })
    $('.plus').click(function () {
                var text = $(this).parent().find('.counter').text();
                text = parseInt(text) + 1;
                $(this).parent().find('.counter').text(text);
                $(this).parent().find('.minus').addClass('minusActive');
               })
    $('.minus').click(function () {
           var text = $(this).parent().find('.counter').text();
           text = parseInt(text) - 1;
           if(text < 1){
               text= 1;
           }
           $(this).parent().find('.counter').text(text);
           if(text == 1){
               $(this).parent().find('.minus').removeClass('minusActive');
           }
    })

});
