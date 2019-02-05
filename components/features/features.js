class Feature {
    constructor(feature) {
        this.feature = feature;
        this.feature.addEventListener('click', () => this.read());
    }
    read() {
        TweenMax.to(this.feature, 1, { x:-100 , opacity:0 , ease:Power1.easeInOut ,repeat:0, onComplete: () => this.feature.style.display = 'none'  });
    }
}


let features = Array.from(document.querySelectorAll(".feature")).map(l => new Feature(l));