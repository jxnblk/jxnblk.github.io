
console.log('hello')

const hello = require('hello-color').default
const cv = require('css-var')
const chroma = require('chroma-js')

const dark = c => chroma(c).luminance() < .5

const getColors = () => {
  const base = chroma.random().hex()
  const result = hello(base)

  const color = dark(base) ? base : result.color
  const bg = dark(base) ? result.color : base
  const hover = chroma(color).darken()

  cv({ color, bg, hover })
}

document.body.addEventListener('click', getColors)

