console.time('build')
const fs = require('fs')
const { renderToStaticMarkup } = require('react-dom/server')
const h = require('react').createElement
const root = require('./dist').default
const cxs = require('cxs')

const body = renderToStaticMarkup(h(root))
const css = cxs.css()

const template = props => `<!DOCTYPE html>
<meta charset='utf-8'>
<title>Jxnblk</title>
<meta name='viewport' content='width=device-width,initial-scale=1'>
<link rel='icon' href='http://jxnblk.com/favicon.png'>
<link rel='apple-touch-icon' href='http://jxnblk.com/avatar/avatar-640.png'>
<style>*{box-sizing:border-box}body{margin:0}</style>
<style>${props.css}</style>
${props.body}
<script>
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-4603832-6', 'auto');
ga('send', 'pageview');
</script>`

const html = template({ body, css })

fs.writeFileSync('index.html', html)

console.log(body.length + ' bytes HTML')
console.log(css.length + ' bytes CSS')
console.log(html.length + ' bytes total')

console.timeEnd('build')
