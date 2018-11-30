import fs from 'fs';
import path from 'path'
const dir = path.join(__dirname, "../")

const sortList = fs.readdirSync(dir).filter((value) => {
    return value.endsWith("Sort.js"); //过滤
})

export default sortList;