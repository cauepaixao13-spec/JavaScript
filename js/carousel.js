class Carousel {

    constructor(image, title, url){
        this.image = image;
        this.title = title;
        this.url = url;
    }

    static Start(arr){
        if(arr){

            if(arr.length > 0){
                Carousel._sequence = 0;
                Carousel._size = arr.length;
                carouselArr = arr;

                Carousel.Next();
                Carousel._interval = setInterval(function(){ Carousel.Next(); },2000);
            }

        } else {
            throw "Method Start need a Array Variable.";
        }
    }

    static Next(){

        let carousel = document.getElementById("carousel");
        let title = document.getElementById("carousel-title");

        let item = carouselArr[Carousel._sequence];

        carousel.style.backgroundImage = "url('" + item.image + "')";
        title.innerHTML = '<a href="' + item.url + '">' + item.title + '</a>';

        Carousel._sequence++;

        if(Carousel._sequence >= Carousel._size){
            Carousel._sequence = 0;
        }

    }
}