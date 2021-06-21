const mongoose=require("mongoose")
const  Uri=""//write mongo uri
const connect=async()=>{
    try{
        await mongoose.connect(Uri,{useNewUrlParser:true,useUnifiedTopology: true,useFindAndModify: false })
        console.log('connect')
    }
    catch(e){
        console.log(e.message)
    }
}
export default connect