
import React from 'react'
import ReactDOM from 'react-dom'
import ReactDOMServer from 'react-dom/server'
import Root from './components/Root'

// if (typeof document !== 'undefined') {
//   const initialProps = JSON.parse(document.getElementById('initial-props').innerHTML)
//   ReactDOM.render(<Root {...initialProps} />, document)
// }

const render = (locals, callback) => {
  const html = ReactDOMServer.renderToStaticMarkup(<Root {...locals} />)
  callback(null, '<!DOCTYPE html>' + html)
}

export default render

