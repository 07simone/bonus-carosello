const app = new Vue(
    {
        el: "#app",
        data:{

            imgCorrente: 0,
            imgRandom:[
                {
                    url: "https://i.ytimg.com/vi/InAilI9b6DA/maxresdefault.jpg",
                    descrizione: "harry e lupin"
                },
                {
                    url: "https://images.ctfassets.net/usf1vwtuqyxm/ypOla0yIwHuIoLPC7KGbq/0e4d7ce5ad7ef3219eb4a05063e5f279/WB-HP-F8-deathly-hallows-tonks-weasleys-lupin.jpg",
                    descrizione: "membri dell'ordine"
                },
                {
                    url: "https://images.fandango.com/ImageRenderer/400/0/redesign/static/img/default_poster.png/0/images/masterrepository/fandango/98261/hpop65.jpg",
                    descrizione: "harry e luna"
                },
                {
                    url: "https://www.thewrap.com/wp-content/uploads/2017/06/hp1.png",
                    descrizione: "il bacio"
                },
                {
                    url: "https://cdn.concreteplayground.com/content/uploads/2018/09/HarryPotterOrderPhoenix-still2-1920x1080.jpg",
                    descrizione: "membri giovani dell'ordine"
                },
            ]

        },

        methods:{
            attivazioneImg(indice){
                this.imgCorrente = indice
                console.log(indice)
            },

            previous(){
                if(this.imgCorrente === 0){
                    this.imgCorrente = this.imgRandom.length - 1
                } else{
                    this.imgCorrente --;
                }
            },

            next(){
                if(this.imgCorrente === this.imgRandom.length -1){
                    this.imgCorrente = 0
                } else{
                    this.imgCorrente ++
                }
            }

        }
    },


)