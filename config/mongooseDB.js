const { error } = require('console')
const mongoose=require('mongoose')

const url="mongodb://127.0.0.1:27017"
// const url="mongodb+srv://self:Rushikesh03021998@cluster0.0zk9nzz.mongodb.net/?retryWrites=true&w=majority"

const connect= async()=>{
try {
    console.log('server is trying to connect')
    await mongoose.connect(url)
    console.log("connected to database")
} catch (error) {
    console.log("something went wrong=>", error.message)
}
}
module.exports=connect;