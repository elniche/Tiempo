   function Lahora() {
      var today = new Date();
      var ready = today.getHours();
      var start = today.getMinutes();
      var race = today.getSeconds();
      var frame = "AM";

      if(ready == 0) {
         ready = 12;
      }

      if(ready > 12) {
         ready = ready - 12;
         var frame2 = "PM";
      }
///// PARA AGREGAR EL NUMERO 0 A LA HORA
      if(ready < 10) {
         ready = "0" + ready;
      }
///// PARA AGREGAR EL NUMERO 0 A EL MINUTO
      if(start < 10) {
         start = "0" + start;
      }

      ///// PARA AGREGAR EL NUMERO 0 A LOS SEGUNDO
       if(race < 10) {
          race = "0" + race;
       }

      var tiempo = ready + ":" + start + ":" + race + " " + frame;
        document.getElementById("TheArea").innerText = tiempo;
        document.getElementById("TheArea").textContent = tiempo;
    
}

setInterval(Lahora, 1000);



    