import './country-item.js';
class CountryList extends HTMLElement {

    set countrys(countrys){
        this._countrys = countrys;
        this.render();
    }

    renderError(message){
        this.innerHTML = "";
        this.innerHTML += `<h2 class="placeholder">${message}</h2>`;
    }

    render(){
        this.innerHTML = "";
        this._countrys.forEach(country => {
            const countryItemElement = document.createElement("country-item");
            countryItemElement.country = country
            this.appendChild(countryItemElement);
        })
    }

}
customElements.define("country-list", CountryList);