$(document).ready(function () {
  var playlistData = [];
  var videoPlaySectionData = [];
  let vidReady = false;
  let listReady = false;
  const postListPromise = new Promise((resolve, reject) => {
    $.get(
      "https://5fc0748dfd14be0016749cfe.mockapi.io/karthik/videodata",
      (data) => {
        resolve(data);
      }
    ).fail((err) => {
      reject(
        new Error(
          `Call failed for GET POST List Request with status ${err.status}`
        )
      );
    });
  });
  postListPromise
    .then((data) => {
      playlistData = data;
      listReady = true;
      infoReady();
    })
    .catch((error) => {
      console.log(`call Failed`);
      console.log(`Catch Error => `, error);
    });
  const postListPromise2 = new Promise((resolve, reject) => {
    $.get(
      "https://5fc0748dfd14be0016749cfe.mockapi.io/karthik/videoplaydata",
      (data) => {
        resolve(data);
      }
    ).fail((err) => {
      reject(
        new Error(
          `Call failed for GET POST List Request with status ${err.status}`
        )
      );
    });
  });
  postListPromise2
    .then((data) => {
      videoPlaySectionData = data;
      vidReady = true;
      infoReady();
    })
    .catch((error) => {
      console.log(`call Failed`);
      console.log(`Catch Error => `, error);
    });
  infoReady = () => {
    if (vidReady == true && listReady == true) {
      const updateVideoData = (videoId) => {
        var data = videoPlaySectionData[videoId - 1];
        $("iframe").attr(
          "src",
          `https://player.vimeo.com/video/${data.vimeoId}`
        );
        $("#video-title").html(data.title);
        $("#video-description").html(data.description);
        $("#views-count").html(data.views);
        $(window).scrollTop(50);
      };
      function createPlaylistCard(obj, pos) {
        $mainDiv = $("<div>")
          .attr({
            id: `card${obj.id}`,
            class: "playlist-card",
          })
          .append(
            $("<img>").attr({
              src: obj.thumbnail,
              class: "thumbnail",
            }),
            $("<h3>").attr("class", "video-card-title").html(obj.title)
          );

        if (pos === 0) {
          $mainDiv.addClass("active-card");
          updateVideoData(obj.id);
        }
        $mainDiv.click(function () {
          updateVideoData(obj.id);
          $(".playlist-card").removeClass("active-card");
          $(`card${obj.id}`).toggleClass("active-card");
        });
        return $mainDiv;
      }
      for (var i = 0; i < playlistData.length; i++) {
        $returnDiv = createPlaylistCard(playlistData[i], i);
        $("#playlist-wrapper").append($returnDiv);
      }
    }
  };
  // $("body").append(
  //   $("<p>").attr({
  //     id: "nowId",
  //     class: "now",
  //   })
  // );
  // $(".now").text("haii darling!!");

  // $("#playlist-wrapper").append(
  //   $("<div>")
  //     .attr({
  //       id: `card1`,
  //       class: "playlist-card",
  //     })
  //     .append(
  //       $("<img>").attr({
  //         src: "https://i.vimeocdn.com/video/600595198_390x220.webp",
  //         id: "img",
  //       })
  //     )
  // );
});
