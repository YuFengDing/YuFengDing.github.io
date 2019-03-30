const fs  = require('fs');
const path = require('path');

const catalogConfigPath = {
    config:'./docs/library/catalog.json',
    target:'./docs/library'
}
const cwd = process.cwd();
//生成json信息
const renderJson = (files)=>{
    const mainCata =  files.map(file=>{
        return path.resolve(catalogConfigPath.target,file)
    })
    let obj = {};
    for(let i in mainCata){
        const basename = path.basename(mainCata[i])
        if(mainCata[i].indexOf('catalog.json') === -1) {
            obj[basename] = fs.readdirSync(mainCata[i])
            .map(item=>{return item.replace('.md','')})
            .filter(item=>item !== "README")
        }
    }
    return JSON.stringify(obj)
}
fs.readdir(path.resolve(cwd,catalogConfigPath.target),(err,files)=>{
    if(err) throw err;
    const configData = renderJson(files);
    fs.writeFile(catalogConfigPath.config,configData,(err)=>{
        if(err) throw err
    })
})