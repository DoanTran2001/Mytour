$('.youlike-content').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    arrows: true,
    dots: false,
    nextArrow: `<button type="button" class="slick-next">
    <svg width="16" height="17" fill="none" class="svgFillAll jss139"><path d="M3.333 8.5h9.334M10 11.167L12.667 8.5M10 5.833L12.667 8.5" stroke="#1A202C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
    </button>`,
    prevArrow: `<button type="button" class="slick-prev">
    <svg width="16" height="17" fill="none" class="svgFillAll jss139" style="transform: rotate(180deg);"><path d="M3.333 8.5h9.334M10 11.167L12.667 8.5M10 5.833L12.667 8.5" stroke="#1A202C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
    </button>`
  });