jQuery(document).ready(function ($) {
  // let interacted = false;
  // let minTime = 5000; // 5 seconds threshold

  // function isIncognito(callback) {
  //   let fs = window.RequestFileSystem || window.webkitRequestFileSystem;
  //   if (!fs) {
  //     callback(false);
  //   } else {
  //     fs(
  //       window.TEMPORARY,
  //       100,
  //       function () {
  //         callback(false);
  //       },
  //       function () {
  //         callback(true);
  //       }
  //     );
  //   }
  // }

  // $(window).on("scroll click keypress", function () {
  //   interacted = true;
  //   console.log("User interacted, no bounce recorded");
  // });

  // isIncognito(function (incognito) {
  //   if (!incognito) {
  //     setTimeout(function () {
  //       if (!interacted) {
  //         $.post(ajax_object.ajaxurl, {
  //           action: "record_bounce",
  //           post_id: ajax_object.post_id,
  //         });
  //       }
  //     }, minTime);
  //   } else {
  //     console.log("Incognito mode detected, bounce not recorded");
  //   }
  // });

  $(".btn-modal").on("click", function () {
    $(".custom-modal").addClass("modal-show");
  });

  var today = new Date().toISOString().split("T")[0];
  $('#post_date, input[name="post_date"]').attr("max", today);
});
