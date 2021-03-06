// line
const lines = document.querySelectorAll(".line");
const div = document.querySelectorAll(".header-link > div");

div.forEach((item) => {
  item.addEventListener("click", function (e) {
    e.preventDefault();
    // console.log([e.target]);
    lines.forEach((line) => {
      line.classList.remove("active");
    });
    // console.log(e.target.childNodes[1]);
    e.target.childNodes[1].classList.add("active");
  });
});
// hotel-fixed
const hotelFixed = document.querySelector(".hotel-fixed-content");
window.addEventListener("scroll", function (e) {
  // console.log(e.scrollTop);
  if (
    document.body.scrollTop > 150 ||
    document.documentElement.scrollTop > 150
  ) {
    // enter code here
    hotelFixed.classList.add("show");
  } else {
    hotelFixed.classList.remove("show");
  }
});

// Modal images
const hotelImages = document.querySelectorAll(".hotel-images-item img");
hotelImages.forEach((img) => {
  img.addEventListener("click", (e) => {
    const src = img.getAttribute("src");
    // console.log(src);
    const template = `<div class="modal">
            <div class="modal-content">
                <i class="fa fa-times modal-close"></i>
                <i class="fas fa-chevron-left modal-left"></i>
                <img src="${src}" alt="" class="modal-img">
                <i class="fas fa-chevron-right modal-right"></i>
            </div>
        </div>`;
    document.body.insertAdjacentHTML("beforeend", template);
  });
});
let index = 0;
document.body.addEventListener("click", (e) => {
  const modalImg = document.querySelector(".modal-img");
  // console.log(modalImg);
  let imgSrc = "";
  if (e.target.matches(".modal")) {
    e.target.parentNode.removeChild(e.target);
  } else if (e.target.matches(".modal-left")) {
    imgSrc = modalImg.getAttribute("src");
    // console.log(imgSrc);
    index = [...hotelImages].findIndex(
      (item) => item.getAttribute("src") === imgSrc
    );
    // console.log(index);
    index -= 1;
    if (index < 0) {
      index = hotelImages.length - 1;
    }
    const newImgSrc = [...hotelImages][index].getAttribute("src");
    modalImg.setAttribute("src", newImgSrc);
  } else if (e.target.matches(".modal-right")) {
    imgSrc = modalImg.getAttribute("src"); // l???y src c???a ???nh hi???n t???i
    index = [...hotelImages].findIndex(
      (item) => item.getAttribute("src") === imgSrc
    ); // l???y index c???a ???nh hi???n t???i
    index += 1; // t??ng index l??n 1
    if (index > hotelImages.length - 1) {
      index = 0;
    }
    const newImgSrc = [...hotelImages][index].getAttribute("src");
    modalImg.setAttribute("src", newImgSrc);
  } else if (e.target.matches(".modal-close")) {
    // e.target.parentNode.removeChild(e.target);
    e.target.parentNode.parentNode.parentNode.removeChild(
      e.target.parentNode.parentNode
    );
  }
});

// Convenient Modal
const modalConvenient = document.querySelector(".hotel-convenient-span");
const modalConvenientShow = document.querySelector(".convenient");
const modalConvenientContent = document.querySelector(".convenient-content");
const modalConvenientRemove = document.querySelector(".convenient-times");
modalConvenient.addEventListener("click", function () {
  modalConvenientShow.classList.add("show");
  const scrollY = document.documentElement.style.getPropertyValue("--scroll-y");
  // console.log(a);
  // console.log(scrollY);
  const body = document.body;
  body.style.position = "fixed";
  body.style.top = `-${scrollY}`;
});
modalConvenientRemove.addEventListener("click", function () {
  modalConvenientShow.classList.remove("show");
  const body = document.body;
  const scrollY = body.style.top;
  body.style.position = "";
  body.style.top = "";
  window.scrollTo(0, parseInt(scrollY || "0") * -1);
});
window.addEventListener("scroll", () => {
  document.documentElement.style.setProperty(
    "--scroll-y",
    `${window.scrollY}px`
  );
});
// window.addEventListener('click', function(e) {
//     // console.log(e.target);
//     if(!modalConvenientContent.contains(e.target) && !e.target.matches('.hotel-convenient-span')) {
//         modalConvenientShow.classList.remove('show');
//     }
// })

// ============ room ================
// console.log(document.querySelectorAll('.room1 .hotel-room-img'));
function room(a) {
  const hotelRoomImgs = document.querySelectorAll(`${a} .hotel-room-img`);
  // console.log(`${a} .hotel-room-img`);
  // console.log(hotelRoomImgs);
  const hotelRoomOverlay = document.querySelector(`${a} .hotel-room-overlay`);
  const hotelRoomOverlaySrc = document.querySelector(
    `${a} .hotel-room-overlay img`
  );

  hotelRoomImgs.forEach((item) => {
    item.addEventListener("mouseover", function (e) {
      // console.log(e.target);
      hotelRoomOverlay.style.display = "block";
      hotelRoomOverlaySrc.setAttribute("src", e.target.getAttribute("src"));
    }),
      item.addEventListener("mouseout", function () {
        hotelRoomOverlay.style.display = "none";
      });
  });
}

room(".room1");
room(".room2");
// console.log(room('.room1'));
// const hotelRoomImgs = document.querySelectorAll('.hotel-room-img');
// const hotelRoomOverlay = document.querySelector('.hotel-room-overlay');
// const hotelRoomOverlaySrc = document.querySelector('.hotel-room-overlay img')

// hotelRoomImgs.forEach(item => {
//     item.addEventListener('mouseover', function(e) {
//         // console.log(e.target);
//         hotelRoomOverlay.style.display = 'block';
//         hotelRoomOverlaySrc.setAttribute('src',e.target.getAttribute('src'));
//     }),
//     item.addEventListener('mouseout', function() {
//         hotelRoomOverlay.style.display = 'none';
//     })
// })

// Readmone
const readMoreBtn = document.querySelector(".read-more-btn");
const readMore = document.querySelector(".read-more");
let choose = 1;
readMoreBtn.addEventListener("click", function () {
  choose++;
  readMore.classList.toggle("show");
  // readMoreBtn.textContent = 'R??t g???n';
  // readMoreBtn.querySelector('i').classList.remove = 'fa-chevron-down';
  readMoreBtn.querySelector("i").classList.toggle("fa-chevron-up");
  // console.log(readMoreBtn.querySelector('i'));
  // if(choose % 2 == 0) {
  //     readMoreBtn.querySelector('span').textContent = 'R??t g???n';
  //     // return;
  // }
});
// evaluate click button
const evaluateBtn = document.querySelectorAll(
  ".evaluate-header-container > button"
);
const evaluateLine = document.querySelector(".btn-line");
const evaluateSelect = document.querySelectorAll(".evaluate-body-select");
const evaluateContainer = document.querySelector(".evaluate-body-container");
// console.log(evaluateSelect);
// console.log(evaluateBtn);
// console.log(evaluateSelect[0].id);
evaluateBtn.forEach((item) => {
  item.addEventListener("click", function (e) {
    // console.log(e.currentTarget.id);
    const select = [...evaluateSelect].filter((item) => {
      return item.id === e.currentTarget.id;
    });

    // console.log(select[0]);
    if (select[0].id === evaluateSelect[0].id) {
      evaluateContainer.style.left = `0px`;
    } else {
      evaluateContainer.style.left = `${-select[0].clientWidth}px`;
    }
    const width = e.currentTarget.offsetWidth;
    const left = e.currentTarget.offsetLeft;
    evaluateLine.style.left = `${left}px`;
    evaluateLine.style.width = `${width}px`;
    evaluateBtn.forEach((item) => {
      item.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  });
});

// ========================= COMMENT REVIEW =====================================

            // Su dung mang object
// const comment = [
//   {
//     id: 1,
//     idTab: 1,
//     avatarSrc:
//       "https://images.unsplash.com/photo-1634901784657-582d0f8252cd?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
//     name: "H??",
//     date: "21/4/2021",
//     calendar: "1 ????m . Th??ng 04/2021",
//     number: "C???p ????i",
//     title: "D???ch v??? r???t xu???t s???c",
//     content:
//       "Nh??n vi??n th??n thi???n, nh??? nh??ng v?? chuy??n nghi???p. T??? c??ch n??i chuy???n ?????n c??ch d???n d???p b??n ??n, th???c s??? khi???n m??nh ???n t?????ng b???i s??? thanh l???ch v?? gi???n d???. R???t th??ch kh??ng kh?? ??? ????y. ????? c??? n??n tr???i nghi???m",
//     scores: "9.4",
//     evaluate: "Tuy???t v???i",
//   },
//   {
//     id: 2,
//     idTab: 1,
//     avatarSrc:
//       "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
//     name: "Nh???t ?????ng",
//     date: "15/4/2021",
//     calendar: "1 ????m . Th??ng 04/2021",
//     number: "Nh??m",
//     title: "M???t ng??y tr???i nghi???m tuy???t v???i",
//     content:
//       "Kh??ch s???n n???m ngay trung t??m c???a Q1, d??? d??ng di chuy???n ?????n c??c ?????a ??i???m kh??c. D???ch v??? t???t, nh??n vi??n th??n thi???n v?? ni???m n???. ?????c bi???t, b???a s??ng tuy???t v???i v???i s??? ph???c chu ????o c???a nh??n vi??n.B??? b??i tr??n t???ng th?????ng mang l???i c???m gi??c r???t d??? ch???u v???i, nh??n c???nh to??n th??nh ph???. N???u c?? d???p, nh???t ?????nh s??? ch???n Sofitel l???n n???a.",
//     scores: "9.4",
//     evaluate: "Tuy???t v???i",
//   },
//   {
//     id: 3,
//     idTab: 1,
//     avatarSrc:
//       "https://images.unsplash.com/photo-1569173112611-52a7cd38bea9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
//     name: "V??n H??",
//     date: "14/4/2021",
//     calendar: "1 ????m . Th??ng 04/2021",
//     number: "C???p ????i",
//     title: "V??? tr?? t???t, g???n trung t??m th??nh ph???",
//     content:
//       "Ch??ng m??nh ???????c t???n h?????ng d???ch v??? tuy???t v???i. Do ph??a ban ?????u l?? tr?????ng ?????i h???c kh?? ???n ??o n??n ph??a kh??ch s???n chuy???n ch??ng m??nh v??? ph??a c??n l???i, r???t ??ng. Tuy nhi??n t??? l???nh kh??ng l???nh l???m, nh??n vi??n hay g???i m??nh b???ng t??n ch???ng m??nh. C???m ??n c??c b???n r???t nhi???u",
//     scores: "9.2",
//     evaluate: "Tuy???t v???i",
//   },
//   {
//     id: 4,
//     idTab: 1,
//     avatarSrc:
//       "https://images.unsplash.com/photo-1634913333441-b3147a9ae64c?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1Mnx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
//     name: "Anh T??",
//     date: "13/4/2021",
//     calendar: "1 ????m . Th??ng 04/2021",
//     number: "Gia ????nh c?? em b??",
//     title: "Kh??ch s???n t???t nh???t v???i m??nh t??? tr?????c ?????n nay",
//     content:
//       "M???t trong nh???ng ??i???m s??ng nh???t trong chuy???n ??i c???a gia ????nh m??nh. Kh??ch s???n Sofitel ???? c?? t??? l??u r???i, m??nh ???? c?? d???p ??? tr?????c ????y, nay m???i c?? d???p quay l???i v?? c?? ??i???u b???t ng???. C??c nh??n vi??n c???c k??? th??n thi???n v?? chuy??n nghi???p. H??? lu??n ?????m b???o r???ng gia ????nh m??nh lu??n ?????y ????? ????? ??n, r???t chu ????o v?? t???n t??nh. ??i???u mang m??nh quay tr??? l???i ch??nh l?? c??c b???n nh??n vi??n, c???m ??n c??c b???n ???? mang cho ch??ng m??nh m???t b???a s??ng tuy???t v???i",
//     scores: "9.4",
//     evaluate: "Tuy???t v???i",
//   },
//   {
//     id: 5,
//     idTab: 2,
//     avatarSrc:
//       "https://images.unsplash.com/photo-1635053578099-446b9de20c28?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
//     name: "Hang",
//     date: "23/5/2010",
//     calendar: "1 ????m . Th??ng 05/2010",
//     number: "Kh??c",
//     title: "Nh???n x??t v??? kh??ch s???n",
//     content:
//       "Nh??n chung theo ????nh gi?? c???a c?? nh??n t??i, ngo???i tr??? v??? m???t di???n t??ch kh??ch s???n h??i nh??? so v???i ti??u chu???n, c??c d???ch v??? c??n l???i c???a kh??ch s???n ?????u kh?? t???t. Tuy nhi??n, nh??n vi??n ?????ng c???a khi ch??o kh??ch r???t hay d??ng ti???ng Anh ho???c ti???ng Ph??p, ??i???u n??y l?? kh??ng n??n ?????i v???i kh??ch s???n t???i Vi???t Nam. V??? m???t nguy??n t???c, c??c b???n s??? ph???i ch??o kh??ch b???ng ti???ng Vi???t tr?????c sau ???? b???ng ti???ng Anh ho???c Ph??p. ??ei??u n??y r???t g??y ph???n c???m v???i kh??ch ng?????i Vi???t. Ch??ng t??i s??? cho r???ng c??c b???n ch??a bi???t c??ch b???o t???n v??n h??a VI??t. N???u c??c b???n co d???p ra n?????c ngo??i c??c b???n s??? th???y bao gi?? nh??n vi??n c??ng ch??o b???n b???ng ti???ng ?????a ph????ng tr?????c sau ???? l?? ti???ng Anh.",
//     scores: "7.4",
//     evaluate: "T???t",
//   },
//   {
//     id: 6,
//     idTab: 2,
//     avatarSrc:
//       "https://images.unsplash.com/photo-1635040091030-a9c00fbf85bc?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
//     name: "Quang",
//     date: "30/9/2010",
//     calendar: "1 ????m . Th??ng 05/2010",
//     number: "Kh??c",
//     title: "Sofitel",
//     content:
//       "I stay in Sofitel quite regularly actually all the time I travel to HCMC I will stay in this hotel because of the location and price. The staff there also very good and friendly. There is only one thing they need to improve is the food.",
//     scores: "7.4",
//     evaluate: "T???t",
//   },
//   {
//     id: 7,
//     idTab: 3,
//     avatarSrc:
//       "https://images.unsplash.com/photo-1634987955249-692b0656f3ae?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMnx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
//     name: "Anonymous",
//     date: "7/10/2019",
//     calendar: "1 ????m . Th??ng 10/2019",
//     number: "Kh??c",
//     title: "Sofitel",
//     content: "Would not stay again. EVER. Zero chance ill stay at ANY sofitel.",
//     scores: "1",
//     evaluate: "K??m",
//   },
//   {
//     id: 8,
//     idTab: 3,
//     avatarSrc:
//       "https://images.unsplash.com/photo-1634938965082-e26fdf89adf8?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5Mnx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
//     name: "Kh??ch l??u tr??",
//     date: "30/9/2010",
//     calendar: "1 ????m . Th??ng 05/2010",
//     number: "Kh??c",
//     title: "Bad room, bad food, bad service, over-priced",
//     content:
//       "We chose this hotel because some friends were staying here already and the rooms looked so nice online. The room was very disappointing in-person; basically had a little makeup to make it look swanky, but had a lot of old fixtures, etc. Also, it was quite small and had one small window. I like firm mattresses, but this was actually too hard. The room was clean and nothing necessarily wrong with it, however. We booked through Hotels.com for a decent rate, but still about 3x the price of a very nice boutique hotel in a better location. Once we got there we asked for late checkout because we had an 11pm plane departure. They upsold us on a package for late checkout plus their breakfast buffet, which we were told was unbeatable. Apparently the breakfast buffet usually costs $25/person, which is a huge sum considering the price of most food in HCMC. We did eat at some nice restaurants in the city that cost much more than that, but they were actually worthy of the cost. This buffet consisted of westernized versions of Vietnamese food (which made them bad), and poor attempts at western food. My wife and I each got two plates and never had more than one bite of any item. We left our plates and got breakfast elsewhere After walking around, we came back, cleaned up and then checked out at 4pm, leaving our bags with the bellhop until we headed to the airport around 8. During the day we had bought some local craft beer in souvenir resealable bottles. We asked the front desk if they could wrap the tops of the bottles in saran wrap (they were the type with the swing cage that can pop off easily) before we put them in our luggage. They said they would take it to the kitchen to do it and leave it with the rest of our luggage. When we came back to get our bags, the manager came over to say that the beer must have been shaken up from walking so much with it and it had blown up in the back room. I actually felt bad, but asked for the bottles back, since surely the top had just popped off - if we couldn't bring the beer back, I wanted the bottles at least. They had saved the bottles and tote bag in a plastic trash bag to show us. BOTH bottles were shattered and the tote also had a big tear in it. I can't see how the pressure in a beer could build up so high that it would explode a bottle (before blowing the cap off) - and do it to both bottles simultaneously. It was pretty obvious that the bag was dropped, but the manager wouldn't own up to it, in fact he kind of blamed us. The only blame we should have had was not waiting around to put them in our luggage right away, but that was their idea. Anyway, nothing about this experience lived up to the expectation with a Sofitel brand.",
//     scores: "2.0",
//     evaluate: "K??m",
//   },
//   {
//     id: 9,
//     idTab: 4,
//     avatarSrc:
//       "https://images.unsplash.com/photo-1635035989061-8c10b8c9e73a?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMDZ8fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
//     name: "Thanh Lam",
//     date: "30/5/2019",
//     calendar: "1 ????m . Th??ng 05/2019",
//     number: "Du l???ch 1 m??nh",
//     title: "T??i y??u Sofitel",
//     content:
//       "L???n ?????u ti??n c???a t??i ??? t???i kh??ch s???n Sofitel v?? n?? tuy???tqu??. C??c ph??ng l???n v?? r???t ?????p, ????ng y??u. Trang tr?? gi???n d??? m?? thanh l???ch, t??i th??ch m??i h????ng ??? ????y c??ng nh?? khung c???nh ??? ????y, Gi?????ng n???m s???ch s??? v?? r???t tho???i m??i, m???m m???i. V??? tr?? tuy???t v???i , l?? ???t??m ??i???m??? c???a th??nh ph??? , n?? n???m g???n nh?? th??? v?? vi???n b???o t??ng v?? c??c nh?? h??ng. b???a ??n s??ng c?? r???t r???t nhi???u l???a ch???n v?? r???t ngon. ??i???m n???i b???t ?????i v???i t??i l?? Ph??? b?? v??o b???a tr??a. T??i ?????c bi???t th??ch s??? d???ng hoa Jasmine quanh kh??ch s???n cho m???t m??i h????ng .Nh??n chung, ????y l?? m???t n??i r???t t???t ?????p ????? ???.",
//     scores: "10",
//     evaluate: "Tuy???t v???i",
//   },
// ];

// const a = comment.filter(element => element.idTab === 1);
// console.log(a);
// const buttontabs = document.querySelectorAll(".evaluate-body-tabButton");
// const evaluateBottom = document.querySelector(".evaluate-body-bottom");
// buttontabs.forEach((item) => {
//   item.addEventListener("click", function (e) {
//     const filterIdTab = comment.filter(
//       (element) => element.idTab === parseInt(e.target.dataset.id)
//     );
//     buttontabs.forEach((item) => {
//       item.classList.remove("active");
//     });
//     e.target.classList.add("active");
//     evaluateBottom.innerHTML = "";
//     filterIdTab.forEach((item) => {
//       render(item.avatarSrc,item.name,item.date,item.calendar,item.number,item.title,item.content,item.scores,item.evaluate);
//     });
//   });
// });
// window.addEventListener("load", function () {
//   const filterIdTab = comment.filter((element) => element.idTab === 1);
//   // console.log(filterIdTab);
//   filterIdTab.forEach((item) => {
//     render(item.avatarSrc, item.name, item.date, item.calendar, item.number, item.title, item.content, item.scores,item.evaluate
//     );
//   });
// });
                // Su dung fetch api
var url = "https://617a0a2bcb1efe001700fc38.mockapi.io/api/comments";
const buttontabs = document.querySelectorAll(".evaluate-body-tabButton");
const evaluateBottom = document.querySelector(".evaluate-body-bottom");
function doGetJSON(url)  {
  var aPromise = fetch(url);
  aPromise
    .then(function(response) {
        if(!response.ok) {
            throw new Error("HTTP error, status = " + response.status);
        }
        return response.json(); // JSON -> Javascript
    })
    .then(function(myJSON) {
        buttontabs.forEach((item) => {
          item.addEventListener("click", function (e) {
            const filterIdTab = myJSON.filter(
              (element) => element.idTab === (e.target.dataset.id)
            );
            buttontabs.forEach((item) => {
              item.classList.remove("active");
            });
            e.target.classList.add("active");
            evaluateBottom.innerHTML = "";
            filterIdTab.forEach((item) => {
              render(item.avatarSrc,item.name,item.date,item.calendar,item.number,item.title,item.content,item.scores,item.evaluate);
            });
          });
        });
    })
    .catch(function(error)  {
        // console.log("Noooooo! Something error:");
        // console.log(error);
        alert('Noooooo! Something error:', error)
    });
}
doGetJSON(url);

function render(avatarSrc, name, date, calendar, number, title, content, scores, evaluate) {
  const evaluadeItem = document.createElement("div");
  evaluadeItem.className = "evaluade-item";
  evaluadeItem.innerHTML = `
    <div class="evaluade-infor">
    <div class="evaluade-infor-img">
      <img src=${avatarSrc} alt="">
    </div>
    <div class="evaluade-infor-detail">
      <h3>${name}</h3>
      <div class="evaluade-infor-detail-item">
        <i class="fas fa-pen"></i>
        <span>${date}</span>
      </div>
      <div class="evaluade-infor-detail-item">
        <i class="fas fa-calendar-week"></i>
        <span>${calendar}</span>
      </div>
      <div class="evaluade-infor-detail-item">
        <i class="fas fa-briefcase"></i>
        <span>${number}</span>
      </div>
    </div>
  </div>
  <div class="evaluade-comment">
    <div class="evaluade-comment-word">
      <h3>${title}</h3>
      <p>${content}</p>
    </div>
    <div class="evaluade-comment-scores">
      <h2>${scores}</h2>
      <span>${evaluate}</span>
    </div>
  </div>
    `;
  //     const template =
  //     `
  //      <div class="evaluade-item">
  //     <div class="evaluade-infor">
  //       <div class="evaluade-infor-img">
  //         <img src=${avatarSrc} alt="">
  //       </div>
  //       <div class="evaluade-infor-detail">
  //         <h3>${name}</h3>
  //         <div class="evaluade-infor-detail-item">
  //           <i class="fas fa-pen"></i>
  //           <span>${date}</span>
  //         </div>
  //         <div class="evaluade-infor-detail-item">
  //           <i class="fas fa-calendar-week"></i>
  //           <span>${calendar}</span>
  //         </div>
  //         <div class="evaluade-infor-detail-item">
  //           <i class="fas fa-briefcase"></i>
  //           <span>${number}</span>
  //         </div>
  //       </div>
  //     </div>
  //     <div class="evaluade-comment">
  //       <div class="evaluade-comment-word">
  //         <h3>${title}</h3>
  //         <p>${content}</p>
  //       </div>
  //       <div class="evaluade-comment-scores">
  //         <h2>${scores}</h2>
  //         <span>${evaluate}</span>
  //       </div>
  //     </div>
  //   </div>
  //     `
  // evaluateBottom.insertAdjacentHTML('beforeend', template);
  evaluateBottom.appendChild(evaluadeItem);
}
//       ================================== IMAGES REVIEW ==================================
const dataImage = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1455587734955-081b22074882?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdGVsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1576675784201-0e142b423952?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGhvdGVsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWx8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGhvdGVsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1519449556851-5720b33024e7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvdGVsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1498503182468-3b51cbb6cb24?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGhvdGVsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1529290130-4ca3753253ae?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGhvdGVsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'
  }
]
const imagesReview = document.querySelectorAll('.evaluate-body-imgItem');
const modalImage = document.querySelector('.image-modal img');
const imageAll = document.querySelector('.images-all');
const imageAllimg = document.querySelectorAll('.image-item img');

document.querySelector('.close').addEventListener('click', function() {
  document.querySelector('.image-review').classList.remove('show');
})
imagesReview.forEach(item => {
  item.addEventListener('click', (e) => {
    document.querySelector('.image-review').classList.add('show');
    modalImage.src = e.target.src;
  })
})
dataImage.forEach(item => {
  let div = document.createElement('div');
  div.className = 'image-item';
  let img = document.createElement('img');
  img.src = item.src;
  div.appendChild(img)
  // console.log(img);
  imageAll.appendChild(div);
})
imageAll.addEventListener('click', (e) => {
  if(e.target.tagName === 'IMG') {
    modalImage.src = e.target.src;
    const imageItem = document.querySelectorAll('.image-item');
    [...imageItem].forEach(item => {
      item.classList.remove('active')
    })
    e.target.parentNode.classList.add('active');
  }
})






const section = document.querySelectorAll(".section");
const hotelFixedItem = document.querySelectorAll(".hotel-fixed-item");
const hotelFixedLine = document.querySelectorAll(".hotel-fixed-line");
hotelFixedItem.forEach((item) => {
  item.addEventListener("click", function (e) {
    hotelFixedItem.forEach((ele) => {
      ele.classList.remove("active");
    });
    hotelFixedLine.forEach((ele) => {
      ele.classList.remove("active");
    });
    e.currentTarget.childNodes[3].classList.add("active");
    // console.log(e.currentTarget.childNodes[3]);
    e.currentTarget.classList.add("active");
  });
});
// console.log(section);
window.addEventListener("scroll", function () {
  let scrollPos = document.querySelector("html").scrollTop;
  // console.log(scrollPos);
  section.forEach((item, index) => {
    // if(scrollPos > item.offsetTop)
  });
});

