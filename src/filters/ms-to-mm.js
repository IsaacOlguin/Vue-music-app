const msToMm = {}

function convertMsToMm(ms){
    const min = Math.floor(ms/60000);
    const sec = (( ms % 60000 /1000 ).toFixed(0) );//Permite redondear el numero

    return `${min}:${(sec < 10 ? '0' + sec : sec)}`;
}

msToMm.install = function(Vue) {
    /* Funcion que permite crear un filtro nuevo */
    Vue.filter('ms-to-mm', (valor) => {
        return convertMsToMm(valor);
    });
}

export default msToMm;