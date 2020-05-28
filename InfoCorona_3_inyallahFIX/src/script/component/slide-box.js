class SlideBox extends HTMLElement{
    
    connectedCallback(){
        this.render();
    }

    set confirm({confirm:[]}){
        this._confirm = {confirm:[]};
        this.render();
    }
    set recover(recover) {
        this._recover = recover;
        this.render();
    }
    set death(death){
        this._death = death;
        this.render();
    }
    set indo(indo){
        this._indo = indo;
        this.render();
    }

    renderError(message) {
        this.innerHTML = "";
        this.innerHTML += `<h2 class="placeholder">${message}</h2>`;
    }

    render(){
        this.innerHTML =`
        <div class="slides">
            <div class="bd-example">
                <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                        <li data-target="#carouselEcampleCaptions" data-slide-to="3"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active" id="positif">
                            <h3>${this._confirm.name}</h3>
                            <p>${this._confirm.value}</p>
                        </div>
                        <div class="carousel-item" id="sembuh">
                            <h3>${this._recover.name}</h3>
                            <p>${this._recover.value}</p>
                        </div>
                        <div class="carousel-item" id="meninggal">
                            <h3>${this._death.name}</h3>
                            <p>${this._death.value}<p>
                        </div>
                        <div class="carousel-item" id="indonesia">
                            <h3>${this._indo.name}</h3>
                            <p>Positif : ${this._indo.positif}</p>
                            <p>Sembuh : ${this._indo.sembuh}</p>
                            <p>Meninggal : ${this._indo.meninggal}</p>
                        </div>
                    </div>
                        <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                            <span class="carousel-contro l-prev-icon" aria-hidden="true"></span> 
                            <span class="sr-only">Previous</span> 
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span> 
                            <span class="sr-only">Next</span>
                        </a>
                </div>
            </div>
        </div>
        `;
    }
}
customElements.define("slide-box", SlideBox);