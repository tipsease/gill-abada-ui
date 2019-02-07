class Team {
    constructor(member) {
        this.member = member;
        this.member.addEventListener('click', () => this.read());
    }
    read() {
        TweenMax.to(this.member, 1, { x:100 , opacity:0 , ease:Power1.easeInOut ,repeat:0, onComplete: () => this.member.style.display = 'none'  });
    }
}


let members = Array.from(document.querySelectorAll(".member")).map(l => new Team(l));