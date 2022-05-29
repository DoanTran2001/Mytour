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
    imgSrc = modalImg.getAttribute("src"); // lấy src của ảnh hiện tại
    index = [...hotelImages].findIndex(
      (item) => item.getAttribute("src") === imgSrc
    ); // lấy index của ảnh hiện tại
    index += 1; // tăng index lên 1
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
  // readMoreBtn.textContent = 'Rút gọn';
  // readMoreBtn.querySelector('i').classList.remove = 'fa-chevron-down';
  readMoreBtn.querySelector("i").classList.toggle("fa-chevron-up");
  // console.log(readMoreBtn.querySelector('i'));
  // if(choose % 2 == 0) {
  //     readMoreBtn.querySelector('span').textContent = 'Rút gọn';
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
//     name: "Hà",
//     date: "21/4/2021",
//     calendar: "1 đêm . Tháng 04/2021",
//     number: "Cặp đôi",
//     title: "Dịch vụ rất xuất sắc",
//     content:
//       "Nhân viên thân thiện, nhẹ nhàng và chuyên nghiệp. Từ cách nói chuyện đến cách dọn dẹp bàn ăn, thực sự khiến mình ấn tượng bởi sự thanh lịch và giản dị. Rất thích không khí ở đây. Đề cử nên trải nghiệm",
//     scores: "9.4",
//     evaluate: "Tuyệt vời",
//   },
//   {
//     id: 2,
//     idTab: 1,
//     avatarSrc:
//       "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
//     name: "Nhật Đặng",
//     date: "15/4/2021",
//     calendar: "1 đêm . Tháng 04/2021",
//     number: "Nhóm",
//     title: "Một ngày trải nghiệm tuyệt vời",
//     content:
//       "Khách sạn nằm ngay trung tâm của Q1, dễ dàng di chuyển đến các địa điểm khác. Dịch vụ tốt, nhân viên thân thiện và niềm nở. Đặc biệt, bữa sáng tuyệt vời với sự phục chu đáo của nhân viên.Bể bơi trên tầng thượng mang lại cảm giác rất dễ chịu với, nhìn cảnh toàn thành phố. Nếu có dịp, nhất định sẽ chọn Sofitel lần nữa.",
//     scores: "9.4",
//     evaluate: "Tuyệt vời",
//   },
//   {
//     id: 3,
//     idTab: 1,
//     avatarSrc:
//       "https://images.unsplash.com/photo-1569173112611-52a7cd38bea9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
//     name: "Vân Hà",
//     date: "14/4/2021",
//     calendar: "1 đêm . Tháng 04/2021",
//     number: "Cặp đôi",
//     title: "Vị trí tốt, gần trung tâm thành phố",
//     content:
//       "Chúng mình được tận hưởng dịch vụ tuyệt vời. Do phía ban đầu là trường đại học khá ồn ào nên phía khách sạn chuyển chúng mình về phía còn lại, rất ưng. Tuy nhiên tủ lạnh không lạnh lắm, nhân viên hay gọi mình bằng tên chồng mình. Cảm ơn các bạn rất nhiều",
//     scores: "9.2",
//     evaluate: "Tuyệt vời",
//   },
//   {
//     id: 4,
//     idTab: 1,
//     avatarSrc:
//       "https://images.unsplash.com/photo-1634913333441-b3147a9ae64c?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1Mnx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
//     name: "Anh Tú",
//     date: "13/4/2021",
//     calendar: "1 đêm . Tháng 04/2021",
//     number: "Gia đình có em bé",
//     title: "Khách sạn tốt nhất với mình từ trước đến nay",
//     content:
//       "Một trong những điểm sáng nhất trong chuyến đi của gia đình mình. Khách sạn Sofitel đã có từ lâu rồi, mình đã có dịp ở trước đây, nay mới có dịp quay lại và có điều bất ngờ. Các nhân viên cực kỳ thân thiện và chuyên nghiệp. Họ luôn đảm bảo rằng gia đình mình luôn đầy đủ đồ ăn, rất chu đáo và tận tình. Điều mang mình quay trở lại chính là các bạn nhân viên, cảm ơn các bạn đã mang cho chúng mình một bữa sáng tuyệt vời",
//     scores: "9.4",
//     evaluate: "Tuyệt vời",
//   },
//   {
//     id: 5,
//     idTab: 2,
//     avatarSrc:
//       "https://images.unsplash.com/photo-1635053578099-446b9de20c28?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
//     name: "Hang",
//     date: "23/5/2010",
//     calendar: "1 đêm . Tháng 05/2010",
//     number: "Khác",
//     title: "Nhận xét về khách sạn",
//     content:
//       "Nhìn chung theo đánh giá của cá nhân tôi, ngoại trừ về mặt diện tích khách sạn hơi nhỏ so với tiêu chuẩn, các dịch vụ còn lại của khách sạn đều khá tốt. Tuy nhiên, nhân viên đứng cửa khi chào khách rất hay dùng tiếng Anh hoặc tiếng Pháp, điều này là không nên đối với khách sạn tại Việt Nam. Về mặt nguyên tắc, các bạn sẽ phải chào khách bằng tiếng Việt trước sau đó bằng tiếng Anh hoặc Pháp. Đeiìu này rất gây phản cảm với khách người Việt. Chúng tôi sẽ cho rằng các bạn chưa biết cách bảo tồn văn hóa VIêt. Nếu các bạn co dịp ra nước ngoài các bạn sẽ thấy bao giò nhân viên cũng chào bạn bằng tiếng địa phương trước sau đó là tiếng Anh.",
//     scores: "7.4",
//     evaluate: "Tốt",
//   },
//   {
//     id: 6,
//     idTab: 2,
//     avatarSrc:
//       "https://images.unsplash.com/photo-1635040091030-a9c00fbf85bc?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
//     name: "Quang",
//     date: "30/9/2010",
//     calendar: "1 đêm . Tháng 05/2010",
//     number: "Khác",
//     title: "Sofitel",
//     content:
//       "I stay in Sofitel quite regularly actually all the time I travel to HCMC I will stay in this hotel because of the location and price. The staff there also very good and friendly. There is only one thing they need to improve is the food.",
//     scores: "7.4",
//     evaluate: "Tốt",
//   },
//   {
//     id: 7,
//     idTab: 3,
//     avatarSrc:
//       "https://images.unsplash.com/photo-1634987955249-692b0656f3ae?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMnx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
//     name: "Anonymous",
//     date: "7/10/2019",
//     calendar: "1 đêm . Tháng 10/2019",
//     number: "Khác",
//     title: "Sofitel",
//     content: "Would not stay again. EVER. Zero chance ill stay at ANY sofitel.",
//     scores: "1",
//     evaluate: "Kém",
//   },
//   {
//     id: 8,
//     idTab: 3,
//     avatarSrc:
//       "https://images.unsplash.com/photo-1634938965082-e26fdf89adf8?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5Mnx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
//     name: "Khách lưu trú",
//     date: "30/9/2010",
//     calendar: "1 đêm . Tháng 05/2010",
//     number: "Khác",
//     title: "Bad room, bad food, bad service, over-priced",
//     content:
//       "We chose this hotel because some friends were staying here already and the rooms looked so nice online. The room was very disappointing in-person; basically had a little makeup to make it look swanky, but had a lot of old fixtures, etc. Also, it was quite small and had one small window. I like firm mattresses, but this was actually too hard. The room was clean and nothing necessarily wrong with it, however. We booked through Hotels.com for a decent rate, but still about 3x the price of a very nice boutique hotel in a better location. Once we got there we asked for late checkout because we had an 11pm plane departure. They upsold us on a package for late checkout plus their breakfast buffet, which we were told was unbeatable. Apparently the breakfast buffet usually costs $25/person, which is a huge sum considering the price of most food in HCMC. We did eat at some nice restaurants in the city that cost much more than that, but they were actually worthy of the cost. This buffet consisted of westernized versions of Vietnamese food (which made them bad), and poor attempts at western food. My wife and I each got two plates and never had more than one bite of any item. We left our plates and got breakfast elsewhere After walking around, we came back, cleaned up and then checked out at 4pm, leaving our bags with the bellhop until we headed to the airport around 8. During the day we had bought some local craft beer in souvenir resealable bottles. We asked the front desk if they could wrap the tops of the bottles in saran wrap (they were the type with the swing cage that can pop off easily) before we put them in our luggage. They said they would take it to the kitchen to do it and leave it with the rest of our luggage. When we came back to get our bags, the manager came over to say that the beer must have been shaken up from walking so much with it and it had blown up in the back room. I actually felt bad, but asked for the bottles back, since surely the top had just popped off - if we couldn't bring the beer back, I wanted the bottles at least. They had saved the bottles and tote bag in a plastic trash bag to show us. BOTH bottles were shattered and the tote also had a big tear in it. I can't see how the pressure in a beer could build up so high that it would explode a bottle (before blowing the cap off) - and do it to both bottles simultaneously. It was pretty obvious that the bag was dropped, but the manager wouldn't own up to it, in fact he kind of blamed us. The only blame we should have had was not waiting around to put them in our luggage right away, but that was their idea. Anyway, nothing about this experience lived up to the expectation with a Sofitel brand.",
//     scores: "2.0",
//     evaluate: "Kém",
//   },
//   {
//     id: 9,
//     idTab: 4,
//     avatarSrc:
//       "https://images.unsplash.com/photo-1635035989061-8c10b8c9e73a?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMDZ8fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
//     name: "Thanh Lam",
//     date: "30/5/2019",
//     calendar: "1 đêm . Tháng 05/2019",
//     number: "Du lịch 1 mình",
//     title: "Tôi yêu Sofitel",
//     content:
//       "Lần đầu tiên của tôi ở tại khách sạn Sofitel và nó tuyệtquá. Các phòng lớn và rất đẹp, đáng yêu. Trang trí giản dị mà thanh lịch, tôi thích mùi hương ở đây cũng như khung cảnh ở đây, Giường nệm sạch sẽ và rất thoải mái, mềm mại. Vị trí tuyệt vời , là “tâm điểm” của thành phố , nó nằm gần nhà thờ và viện bảo tàng và các nhà hàng. bữa ăn sáng có rất rất nhiều lựa chọn và rất ngon. Điểm nổi bật đối với tôi là Phở bò vào bữa trưa. Tôi đặc biệt thích sử dụng hoa Jasmine quanh khách sạn cho một mùi hương .Nhìn chung, đây là một nơi rất tốt đẹp để ở.",
//     scores: "10",
//     evaluate: "Tuyệt vời",
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

