export class CountryHandling{
    constructor(){

    }
    async returnRequest(request){
        return new Promise((resolve, reject) =>{
        fetch(request)
        .then(res =>{
            return res.json();
        })
        .then(data =>{
            const result = [];            
            data.forEach(element => {
                result.push(element);
            });
            resolve(result);
        })
    });
}
}