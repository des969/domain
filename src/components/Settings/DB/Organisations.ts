class Organisations {

    constructor(){}

    getAll(cb){
        window.electron.ipcRenderer.sendMessage("mongodb-settings",[{
            host:localStorage.getItem("host"),
            user:localStorage.getItem("user"),
            password:localStorage.getItem("password")
        },{
            page:'organisations',
            query:'',
            func:'getAll'
        }])

        window.electron.ipcRenderer.once("mongodb-settings-organisations",(...result)=>{
            console.log('args', args);
           cb(result)
        })
    }
}


export default Organisations