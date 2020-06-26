const m = require("mithril")
const User = require("../models/User")

module.exports={
    oninit:(vnode)=>{
        User.load(vnode.attrs.id)
    },
    view:()=>{
        return m("form",{
            onsubmit:(e)=>{
                e.preventDefault();
                User.save();
            }
        }, [
            m("label.label", "First name"),
            m("input.input[type=text][placeholder=First name]",{
                oninput:(e)=>{
                    User.current.firstName = e.target.value
                },
                value: User.current.firstName
            }),
            m("label.label", "Last name"),
            m("input.input[placeholder=Last name]", {
                oninput:(e)=>{
                    User.current.lastName = e.target.value
                },
                value: User.current.lastName}),
            m("button.button[type=submit]", "Save"),
        ])
    }
}