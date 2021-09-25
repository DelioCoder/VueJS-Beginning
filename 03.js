const app = new Vue({
    el: "#app",
    data: {
        title: 'GYM with VueJS',
        tareas: [],
        nuevaTarea: ''
    },
    methods: {
        agregarTarea() {
            this.tareas.push({
                nombre: this.nuevaTarea,
                estado: false
            });
            this.nuevaTarea = '';
            console.log('Tarea agregada');
            localStorage.setItem('gym-vue', JSON.stringify(this.tareas));
        },
        editarTarea(index) {
            this.tareas[index].estado = true;
            localStorage.setItem('gym-vue', JSON.stringify(this.tareas));
        },
        eliminarTarea(index) {
            this.tareas.splice(index, 1);
            localStorage.setItem('gym-vue', JSON.stringify(this.tareas));
        }
    },
    created() {
        let datosDB = JSON.parse(localStorage.getItem('gym-vue'));
        if(datosDB === null) {
            this.tareas = [];
        } else {
            this.tareas = datosDB;
        }
    }
});