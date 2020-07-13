/* Blur: desenfocar una imagen, objeto o elemento HTML para que se haga borroso */

const blur = {}

//function setBlur(elemento, binding, newNode, oldNode) {
function setBlur(elemento, binding) {
    elemento.style.filter = !binding.value ? 'blur(3px)' : 'none';
    elemento.style.cursor = !binding.value ? 'not-allowed' : 'inherited';

    elemento.querySelectorAll('button').forEach(appLink => {
        if(!binding.value) {
            appLink.setAttribute('disabled', true);
        } else {
            appLink.removeAttribute('disabled');
        }
    });
}

blur.install = function(Vue){
    Vue.directive('blur-directive', {
        bind(el, binding) {
            setBlur(el, binding);
        }
    })
}

export default blur;