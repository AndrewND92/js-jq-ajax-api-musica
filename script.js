

function mainAjax() {

        $.ajax (
          {
            url: "https://flynn.boolean.careers/exercises/api/array/music",
            method: "GET",

            success: function (data,stato) {
              console.log(data);

              var albums = data.response;
              // console.log(albums);

              for (var album in album) {
                if (object.hasOwnProperty(variable)) {

                }
              }
            },

            error: function (error) {
              alert("E' avvenuto un errore. " + error);
            }
          }
        );
      }


  $(document).ready(function(mainAjax) {
    console.log(mainAjax);
  });












function init(){


}
