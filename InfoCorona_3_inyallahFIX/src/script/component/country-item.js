class CountryItem extends HTMLElement{
    
    set country(country){
        this._country = country;
        this.render();
    }

    render(){
        this.innerHTML = `
        <table id="global">
            <thead class="table-dark">
                <tr>
                    <th>Negara</th>
                    <th>Positif</th>
                    <th>Sembuh</th>
                    <th>Meninggal</th>
                </tr>
            </thead>
            <tbody class="table-dark">
                <tr>
                    <td>${this._country.attributes.Country_Region}</td>
                    <td>${this._country.attributes.Confirmed}</td>
                    <td>${this._country.attributes.Recovered}</td>
                    <td>${this._country.attributes.Deaths}</td>
                </tr>
            </tbody >
        </table>`;
    }
}
customElements.define("country-item", CountryItem);