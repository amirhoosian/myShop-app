const fs = require('fs');
const path = require('path');

const rootDir = require('../util/path');

class product{
    constructor(title) {
        this.title = title
    }

    save(){
        const p = path.join(rootDir, 'Data', 'products.json')
        fs.readFile(p, (err, data) => {
            let product = []
            if(!err){
                try {
                    product = JSON.parse(data)
                } catch (error) {
                    product = []
                }
              
            }
            product.push(this)
            fs.writeFile(p, JSON.stringify(product), (err) => {console.log(err)})
        })
    }

    static fetchAll(cb){
        const p = path.join(rootDir, 'Data', 'products.json')
        fs.readFile(p, (err, data) => {
            if(err){
                cb([])
            }else{
                let jsonData = []
                try {
                    jsonData = JSON.parse(data)
                }catch(e){
                    jsonData = []

                }
                cb(JSON.parse(data))
            }
        })
    }
}

 
module.exports = product