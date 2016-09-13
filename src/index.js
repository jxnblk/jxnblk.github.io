
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import cxs from 'cxs'
import Root from './components/Root'
import Body from './components/Body'

const render = (locals, callback) => {
  const body = ReactDOMServer.renderToStaticMarkup(<Body {...locals} />)
  const css = cxs.css
  const html = ReactDOMServer.renderToStaticMarkup(<Root {...locals} css={css} body={body} />)
  callback(null, '<!DOCTYPE html>' + html)
}

export default render

