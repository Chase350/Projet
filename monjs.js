$(document).ready(function(){
  //$('h1').hide('5000');
  for (var i = 0; i <5; i++){
    $( '<div class="col-1">' ).appendTo('#effets');
  }
    $( "#effets div" ).click(function(){
        $( this ).hide( 2000,function(){
          //$( this ).remove();
        });
      });
    $("#show").click(function(){
        $("#effets div").show();
        $("#tests div").show();
      });
    $('#box1').click(function(){
      $(this).css('background-color','blue').hide(4000);
    });
    $('#box2').click(function(){
      $(this).css('background-color','purple').fadeOut(2000);
    });
    $('#box3').click(function(){
      $(this).css('background-color','black').slideUp(4000);
    });
    $('#animate div').click(function(){
        $(this).animate({
          "left":"300px"
        }, 3000);
        $(this).animate({
          "top":"100px"
        }, 4000).css ('background-color','silver');
    });
    $('li:nth-child(4)').addClass('alerte');
    $('#no-alerte').click(function(){
      $('li').removeClass();
    });
    $('li a').click(function(){
        $(this).parent('li').removeClass();

    });
    var i = $('li').length + 1;
    //alert(i);
    $('#plus').click(function(){
      $('<li>ligne ' + i + '</li>').appendTo('ul');
      i++;
      if (i>1){
        $('#moins').show();
      }
      console.log(i);
    });
    $('#moins').click(function(){
      if(i>1){
        $('li:last').remove();
        i--;
        if(i==1){
          $(this).hide();
        }
      }
      console.log(i);
    });
    //toggle effects
    $('#theToggle').click(function(){
     // $('#maBoite').toggle(2000);
     $('#maBoite').toggleClass('bordure');

    });
    $('#toggle p').hover(function(){
        $(this).toggleClass('highlight')//.css('background-color','red');
    });
    $('#toggle p').hover(function(){
      $('#maBoite').toggleClass('vert');
    });
    //agrandir ou diminuer la taille de police
    $('button.taille').click(function(){
      var os = $('#toggle p').css('font-size');
      var number = parseFloat(os);
      var uom = os.slice(-2);
        if(this.id=='plusPetit'){
          number /=1.4;
        } else {
          number *=1.4;
        }
        console.log(number);
        $('#toggle p').css('font-size', number + uom);
    });

    $('#photos nav li').click(function(){
      var numeroLigne = $(this).index();
      console.log(numeroLigne);
      $('#photos div img').hide(2000);
      $('#photos div img').eq(numeroLigne).show(2000);
    });



// annuaire

  $('.annuaire article[data-sexe=h]').children('img').attr('src','images de cahtons/homme-150.jpg');
  $('.annuaire article[data-sexe=f]').children('img').attr('src','images de cahtons/femme-150.jpg');

  $('.annuaire option').click(function(){
    var cat = $(this).attr('value');
    console.log(cat);
  });
  $('.annuaire li').click(function(){
    var alpha =$(this).html();
    console.log(alpha);
    if(alpha != 'tous'){
      $('.annuaire article').hide();
      $('p.nolist').hide();
      $('.annuaire article[data-name='+alpha+']').show();
    } else {
      $('.annuaire article').show();
      $('p.nolist').hide();
    }
    if(!$('.annuaire article').is(':visible')){
      $('<p class="nolist"> Personne ne correspond au critère</p>').appendTo('#liste > div');
    }

  });
  $('select').on('change', function(){
    //alert( this.value );
    var cat = this.value;
    if(cat !='all'){
        $('.annuaire article').hide();
        $('.annuaire article[data-cat~='+cat+']').show();
    }else{
      $('annuaire article').show();
    }
  });



});
//https://github.com/erwantanguy/B1MDSDevFront
