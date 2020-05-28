class SideBar extends HTMLElement{
    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `
        <div class="col-3" id="Side-Bar">
            <div class="nav flex-column nav-pills sidebar" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <div id="ProvinceView">
                    <a class="nav-link active" id="v-pills-provinsi-tab " data-toggle="pill" role="tab" aria-controls="v-pills-provinsi" aria-selected="true" href="#" >Data Provinsi</a>
                </div>
                <div id="GlobalView">
                    <a class="nav-link " id="v-pills-global-tab" data-toggle="pill" role="tab" aria-controls="v-pills-global" aria-selected="false" href="#">Info Global</a>
                </div>

            </div>
        </div>
        `;
    }
}

customElements.define("side-bar", SideBar);