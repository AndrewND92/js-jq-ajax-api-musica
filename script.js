
$.ajax(
  {
    url: "https://flynn.boolean.careers/exercises/api/array/music",
    method: "GET",
    success: function (data) {

    $("").html(data);
    },

    error: function (error) {
    alert("E' avvenuto un errore. " + error);
    }
  }
);















function init(){


}
