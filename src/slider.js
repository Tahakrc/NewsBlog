const updateSlider = (item) => {
    const sliderImage = document.querySelector('.img-slider');
    const sliderCaption = document.querySelector('.slider-text');

    sliderImage.src = item.image;
    sliderCaption.textContent = item.header;
};


export default updateSlider;