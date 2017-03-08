$(document).ready(function(){
	//Adiciona scrolling em todos os links em navbar + footer
    $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      
      event.preventDefault();

      
      var hash = this.hash;
      //Usa o método animate() para adicionar o smooth scroll
      //900 é o padrão em milisegundos do smooth scroll se move para as áreas especificas
     $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){
   		
   		// Adiciona uma hash(#) na URLS quando o scrolling estiver pronto (comportamento padrão do click)
      	window.location.hash = hash;
      });
    } // Fim se
  });
  
  $(window).scroll(function() {
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("slide");
        }
    });
  });
})
