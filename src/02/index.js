const fs = require('node:fs')

// const stream = fs.createReadStream('text.txt', {
//     highWaterMark: 7,
//     encoding: 'utf-8'
// })
// // console.log(fs.statSync('text.txt'));

// let str = '';
// stream.on('data', (chunk)=>{
//     // console.log('chunk', chunk.toString());
//     str += chunk.toString()
// })
// stream.on('end', ()=>{
//     console.log('end', str);
// })

// const stream = fs.createReadStream('ipsum.txt')
// const zlib = require('node:zlib')

// stream
//     .pipe(zlib.createGzip())
//     .pipe(fs.createWriteStream('ipsum.txt.gz'))

const stream = require('node:stream')
class ReplaceStream extends stream.Transform {
    constructor(options){
        super();

        this.from = options.from;
        this.to = options.to;
    }
    _transform(chunk, encoding, cb){
        const chunkStr = chunk.toString()
        cb(null, chunkStr.replaceAll(this.from, this.to))
    }
}

const replacer = new ReplaceStream({
    from: 'apple',
    to: 'myAPPLE'
});

replacer.write('banana');
replacer.write('tomato apple wine');
replacer.write('grape');

replacer.on('data', (chunk)=>{
    console.log(chunk.toString());
}
)

module.exports = ReplaceStream;