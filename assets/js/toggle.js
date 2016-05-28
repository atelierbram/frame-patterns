$(function(){
        "use strict";
  $('#btnToggle').click(function () {
    $('body').each(function(){
      var classes = ['dv-01','dv-02','dv-03','dv-04','dv-05','dv-06','dv-07','dv-08'];

      this.className = classes[($.inArray(this.className, classes)+1)%classes.length];
    });

  });

});

