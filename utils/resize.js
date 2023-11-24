
const fs = require('fs/promises')
const sharp = require('sharp')


// this will create 2 images
// one with 1200 width and one with 600 width
// it will place them in the current directory

// note that the original image(s) will be expected to be png
async function start( dirname ){

  const images = await fs.readdir(dirname)
  const pngs = images.filter(v => v.match(/\.png/))
  
  await pngs.reduce((a,b) => {
  
    // @ts-ignore
    a = a.then(async v => {
      console.log(b)
      return Promise.all([

        sharp(dirname + '/' + b)
          .resize({
            width: 1200
          })
          .webp({
            quality: 80,
            nearLossless: true,
            smartSubsample: true
          })
          .toFile(
            __dirname + '/' + b.replace(/\.png/,'.webp')
          ),
        
        sharp(dirname + '/' + b)
          .resize({
            width: 600
          })
          .webp({
            quality: 80,
            nearLossless: true,
            smartSubsample: true
          })
          .toFile(
            __dirname + '/' + b.replace(/\.png/,'-600.webp')
          ),


      ])
      
    })
  
    return a
  
  },Promise.resolve(1))
}

const dirname = '../public'
start( dirname )