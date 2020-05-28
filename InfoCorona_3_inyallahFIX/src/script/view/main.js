import '../component/prov-list.js';
import '../component/country-list.js';
import '../component/slide-box.js';
import DataSource from '../data/data-source.js';
const main = () => {
    const slideBoxElement = document.querySelector("slide-box");
    const confirmedViewElement = document.querySelector("#positif");
    const recoveredViewElement = document.querySelector("#sembuh");
    const deathsViewElement = document.querySelector("#meninggal");
    const indoViewElement = document.querySelector("#indonesia");
    const provinceViewElement = document.querySelector("#ProvinceView");
    const globalViewElement = document.querySelector("#GlobalView");
    const provinceListElement = document.querySelector("prov-list");
    const countryListElement = document.querySelector("country-list");
    
    const slideView = async () =>{
        try {
            const resultPos = await DataSource.showConfirmed(confirmedViewElement);
            const resultSem = await DataSource.showRecovered(recoveredViewElement);
            const resultDeaths = await DataSource.showDeaths(deathsViewElement);
            const resultInd = await DataSource.showIndo(indoViewElement);
            renderSlide(resultPos,resultSem, resultDeaths, resultInd);
        }
        catch (message){
            fallbackSlide(message)
        }
    }
    const onProvinceViewClicked = async () => {
        try{
            const result = await DataSource.showProvince(provinceViewElement);
            renderProvince(result);
        }
        catch(message){
            fallbackProvince(message)
        }
    }
    const onGlobalViewClicked = async () => {
        try {
            const result = await DataSource.showCountry(globalViewElement);
            renderGlobal(result);
        }
        catch(message){
            fallbackGlobal(message)
        }
    };

    const renderSlide = results => {
        confirmedViewElement.slides = results;
        recoveredViewElement.slides = results;
        deathsViewElement.slides = results;
        indoViewElement.slids = results;
    }
    const fallbackSlide = message => {
        slideBoxElement.renderError(message);
    }
    const renderProvince = results => {
        provinceListElement.provinces = results;
    }
    const fallbackProvince = message => {
        provinceListElement.renderError(message);
    }

    const renderGlobal = results => {
        countryListElement.countrys = results;
    }

    const fallbackGlobal = message => {
        countryListElement.renderError(message);
    }
    slideView();
    provinceViewElement.addEventListener("click", onProvinceViewClicked);
    globalViewElement.addEventListener("click", onGlobalViewClicked);
}
export default main;