class AppBar extends HTMLElement {
    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `
        <div id="app-bar">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">
                    <img src="images/EXIV.png" width="50" height="50" alt="Exivtion">
                    <h1 class="display-4">Info Corona</h1>
                    <p class="h2">Indonesia</p>
                </a>
            </nav>
        </div>
            `;
    }
}
customElements.define("app-bar", AppBar);