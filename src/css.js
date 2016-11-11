
const css = `
* { box-sizing: border-box }
body {
  font-family: 'Roboto Mono', Menlo, monospace;
  line-height: 1.5;
  margin: 0;
  transition:
    color .2s ease-out,
    background-color .4s ease-out;
  color: var(--color);
  background-color: var(--bg);
}
.sf { font-family: -apple-system, BlinkMacSystemFont, sans-serif }
.NavItem:hover,
.ProjectLink[href]:hover {
  color: #07c !important;
  color: var(--hover) !important;
}
`

export default css

