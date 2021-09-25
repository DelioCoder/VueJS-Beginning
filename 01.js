const app = new Vue({

    el: '#app',
    data: {
        titulo: 'Hola mundo con Vue',
        frutas: [
            {nombre: 'Pera', cantidad: 10},
            {nombre: 'Manzana', cantidad: 0},
            {nombre: 'Platano', cantidad: 11},
        ],
        inputFruta: {
            nuevaFruta: '',
            cantidadFruta: 0
        },
        total: 0
    },
    methods: {
        agregarFruta () {

            this.frutas.push({
                nombre: this.inputFruta.nuevaFruta, cantidad: this.inputFruta.cantidadFruta
            });
            this.inputFruta = {
                nuevaFruta: '',
                cantidadFruta: ''
            }

        },
        otroMetodo() {

        }
    },
    computed: {
        sumarFrutas() {
            this.total = 0;
            for(fruta of this.frutas) {
                this.total = this.total + fruta.cantidad;
            }
            return this.total;
        }
    }

});