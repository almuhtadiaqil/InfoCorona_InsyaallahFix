class ProvItem extends HTMLElement{

    set province (province){
        this._province = province;
        this.render();
    }

    render(){
        this.innerHTML = `
        <table id="provinsi" class="showTabel">
            <thead class="table-dark">
                <tr>
                    <th>Provinsi</th>
                    <th>Positif</th>
                    <th>Sembuh</th>
                    <th>Meninggal</th>
                </tr>
            </thead>
            <tbody class="table-dark">
                <tr>
                    <td>${this._province.attributes.Provinsi}</td>
                    <td>${this._province.attributes.Kasus_Posi}</td>
                    <td>${this._province.attributes.Kasus_Semb}</td>
                    <td>${this._province.attributes.Kasus_Meni}</td>
                </tr>
            </tbody>
        </table>
        `;
    }
}
customElements.define("prov-item", ProvItem);