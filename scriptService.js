$(document).ready(function () {
  $("#myInput").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $(".card-deck  .PA").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });
});

// var cards = [
//   {
//     name: "In sync application",
//     text: "Lorem Ipsun san sit ame sit ame san ipsun.Lorem sit ame",
//     img: "images/Rectangle 42 (5).png",
//   },
//   {
//     name: "Sky Website",
//     text: "Lorem Ipsun san sit ame sit ame san ipsun.Lorem sit ame",
//     img: "images/Rectangle 43 (3).png",
//   },
//   {
//     name: "Bootstrap App theme",
//     text: "Lorem Ipsun san sit ame sit ame san ipsun.Lorem sit ame",
//     img: "images/Rectangle 43 (5).png",
//   },
//   {
//     name: "Javascript & JQuery",
//     text: "Lorem Ipsun san sit ame sit ame san ipsun.Lorem sit ame",
//     img: "images/Rectangle 43 (5).png",
//   },
//   {
//     name: "React & Bootstrap",
//     text: "Lorem Ipsun san sit ame sit ame san ipsun.Lorem sit ame",
//     img: "images/Rectangle 42 (5).png",
//   },
//   {
//     name: "Html Css Project",
//     text: "Lorem Ipsun san sit ame sit ame san ipsun.Lorem sit ame",
//     img: "images/Rectangle 42 (3).png",
//   },
// ];

$(document).ready(function () {
  var cardlist = $("#cardList");

  $.ajax({
    url: "https://mocki.io/v1/e2f231db-8f15-48f9-8088-65db2a37da76",
    type: "GET",
    success: function (response) {
      response.data.forEach(function (card) {
        cardlist.append(`
                    <div class="col-lg-4 col-md-4 col-sm-12 PA">
                        <div class="card bgSearch ">
                            <div class="card-body overflowScroll">
                                <div class="imgCover">
                                    <img class="imgService" src="${card.img}">
                                    <div class="cardServiceText">
                                        <span class="cardServiceInnerText">${card.name}</span>
                                    </div>
                                    <div>
                                        <span class="cardServiceParagraph">${card.text}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
        `);
      });
    },
  });
});

$("#cardList").innerText = data.sort();
