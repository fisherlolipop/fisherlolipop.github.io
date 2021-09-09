const app = {
    data() {
        return {
            off: true,
            urlAddpicInput: '',
            titleAddpicInput: '',
            data: [],
            imgg: []
        }
        // {
        //     "id":0, 
        //     "src":"https://sun9-37.userapi.com/impg/Miti4OJIrGsDgak_GTD2gFUbPIQmblq4UQ_rVw/_wKB33nl85A.jpg?size=823x1200&quality=96&sign=2c822962313ebfbf16356f37af97600f&type=album", 
        //     "title":"they among us"
        // },
        // {
        //     "id":1, 
        //     "src":"https://sun9-64.userapi.com/impg/QfhwXUOjuJGl5SRBsBJZBr0hBNBeZmQUYAjyHw/_l5_wxnFAPI.jpg?size=1400x1225&quality=96&sign=ae49ef23d35650ace09f366c74ea0fde&type=album", 
        //     "title":"OhUh"
        // },
        // {
        //     "id":2, 
        //     "src":"https://sun9-44.userapi.com/impg/8Pv0oSf3w9X9uo9Tq3WExXiTLwaxscfOSKGxdQ/gV2hhZZdllM.jpg?size=1527x2160&quality=96&sign=e8c1f6752100a6ab6974f8e16ea6b4fb&type=album", 
        //     "title":"UWU"
        // }
    },
    methods: {
        async fetchData(even) {
            fetch('https://612a08cd068adf001789ba11.mockapi.io/api/v1/furrypost', {
                headers: { 'Content-type': 'application/json' },
            })
            .then(res=>res.json())
            .then((response) => {
                response.map((v, idx)=>{
                    this.imgg.push({"id":this.imgg.length, "src": v.src, "title":v.title})
                })
            })
            .catch((error) => {
                console.log('Looks like there was a problem: \n', error);
            });
            this.off = true
            // console.log('Target : ' + even.target.className)
            even.target.className = 'btn-danger border-0 card-img btn-fetch disabled'
        },
        async fetchDataForMount(){
            fetch('https://612a08cd068adf001789ba11.mockapi.io/api/v1/furrypost', {
                headers: { 'Content-type': 'application/json' },
            })
            .then(res=>res.json())
            .then((response) => {
                response.map((v, idx)=>{
                    this.imgg.push({"id":this.imgg.length, "src": v.src, "title":v.title})
                })
            })
            .catch((error) => {
                console.log('Looks like there was a problem: \n', error);
            });
        },
        addNewImg(even){
            this.imgg.unshift({
                "id":this.imgg.length, 
                "src":this.urlAddpicInput, 
                "title":this.titleAddpicInput
            })
            this.urlAddpicInput = ''
            this.titleAddpicInput = ''
            console.log('Хрень создана ' + this.imgg.length)
        },
        InputHandleUrlAddpicInput(even){
            this.urlAddpicInput = even.target.value
        },
        InputHandleTitleAddpicInput(even){
            this.titleAddpicInput = even.target.value
        }
    },
    mounted() {
        this.fetchDataForMount()
    }   
}
Vue.createApp(app).mount('#app')
