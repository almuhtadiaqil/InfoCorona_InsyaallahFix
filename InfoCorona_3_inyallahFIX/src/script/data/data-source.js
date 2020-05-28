class DataSource {

    static  showCountry() {
        return fetch(`https://api.kawalcorona.com/`)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                if(responseJson){
                    console.log(responseJson);
                    return Promise.resolve(responseJson);
                }
                else{
                    return Promise.reject(`Something went wrong`);
                }
            })
    };

    static  showProvince(){
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.kawalcorona.com/indonesia/provinsi`)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                if(responseJson){
                    console.log(responseJson);
                    return Promise.resolve(responseJson);
                }
                else{
                    return Promise.reject(`Something went Wrong`);
                }
            })
    };

    static  showIndo(){
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.kawalcorona.com/indonesia`)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                if(responseJson){
                    console.log(responseJson);
                    return Promise.resolve(responseJson);
                }
                else{
                    return Promise.reject(`Something went Wrong`);
                }
            })
    };

    static  showConfirmed(){
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.kawalcorona.com/positif`)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                if(responseJson){
                    console.log(responseJson);
                    return Promise.resolve(responseJson);
                }
                else{
                    return Promise.reject(`Something went Wrong`);
                }
            })
    };

    static  showRecovered(){
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.kawalcorona.com/sembuh`)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                if(responseJson){
                    console.log(responseJson);
                    return Promise.resolve(responseJson);
                }
                else{
                    return Promise.reject(`Something went Wrong`);
                }
            })
    };

    static  showDeaths(){
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.kawalcorona.com/meninggal`)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                if(responseJson){
                    console.log(responseJson);
                    return Promise.resolve(responseJson);
                }
                else{
                    return Promise.reject(`Something went Wrong`);
                }
            })
    };

}
export default DataSource;