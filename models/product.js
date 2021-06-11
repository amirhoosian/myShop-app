const fs = require('fs');
const path = require('path');

const rootDir = require('../util/path');

const p = path.join(rootDir, 'Data', 'products.json')

const getProductFromFIle = cb => {
   
        fs.readFile(p, 'utf-8', (err, data) => {
           let myData = data === '' ? [] : JSON.parse(data)
           cb(myData)
            
        })
}
class product{
    constructor(title) {
        this.title = title
    }

    save(){
        getProductFromFIle(product => {
            product.push(this)
            fs.writeFile(p, JSON.stringify(product), (err) => {
                if(err != null){
                console.log(err)}
            })
        })
       
    }

    static fetchAll(cb){
        getProductFromFIle(cb)
    }
}

 
module.exports = product