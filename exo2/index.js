
            let app = new Vue({
                el:'#app',
                data:{
                    titre:"Créer une to-do-list",
                    liste:"Liste des choses à faire",
                    fait:true,
                    seen:true,
                    suppr: "X",
                    newObjet:"",
                    lignes:[
                        {
                             objet: "laver la vaisselle",
                             done: true
                            }
                    ]
                },
                methods:{
                    ajouter:function(){
                        this.lignes.push({
                         objet:this.newObjet   
                        });
                    },
                    effacer:function(){
                        this.seen = !this.seen;
                    }
                }
                })
   