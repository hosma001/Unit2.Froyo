function getFlavors(){
    let flavors = window.prompt('Enter a list of comma-separated froyo flavors');
    return flavors.split(',');
}

let flavors = getFlavors();

const froyoOrder = {

};

function getOrder(flavors){
    for(let i = 0; i < flavors.length; i++){
        const froyo = flavors[i];
        if(froyoOrder[froyo] === undefined){
            froyoOrder[froyo] = 0;
        }
    froyoOrder[froyo]++;
    }
    return froyoOrder;
}

console.log(getOrder(flavors));


