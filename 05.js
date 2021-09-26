const app = new Vue({

    el: '#app',
    data: {
        saludo: 'Soy ciclo de vida de Vue'
    },
    beforeCreate() {
        console.log('before create')
    },
    created() {
        //Al crear los métodos, observadores y eventos, pero aún no accede al DOM.
        //Aún no se puede acceder a 'el'
        console.log('Created');
    },
    beforeMount() {
        //Se ejecuta antes de insertar el DOM
        console.log('BeforeMount');
    },
    mounted() {
        //Se ejecuta al insertar el DOM
        console.log('mounted');
    },
    beforeUpdated() {
        //Al detecta un cambio
        console.log('beforeUpdated');
    },
    updated() {
        //Al realizar los cambios
        console.log('updated');
    },
    beforeDestroy() {
        //Antes de destruir la instancia
        console.log('beforeDestroy');
    },
    destroyed() {
        //Se destruye toda la instancia :C
        console.log('Destroyed');
    },
    methods: {
        destruir() {
            this.$destroy();
        }
    }
});