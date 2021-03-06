let m = require("mithril")

let User = {
    list:[],
    loadList:function(){
        return m.request({
            method:"GET",
            url: "https://rem-rest-api.herokuapp.com/api/users",
            withCredentials: true,
        }).then((results)=>{
            //console.log(results)
            User.list = results.data;
        })
    },
    current: {},
    load: function(id) {
        return m.request({
            method: "GET",
            url: "https://rem-rest-api.herokuapp.com/api/users/" + id,
            withCredentials: true,
        })
        .then(function(result) {
            User.current = result
        })
    },
    save:()=>{
        return m.request({
            method:"PUT",
            url:"https://rem-rest-api.herokuapp.com/api/users/" + User.current.id,
            body:User.current,
            withCredentials: true,
        })
        .then(()=>{
            m.route.set("/list")
        })
    }
}

module.exports = User;