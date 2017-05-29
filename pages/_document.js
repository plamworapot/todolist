import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage()
    const styles = flush()
    return { html, head, errorHtml, chunks, styles }
  }

  render () {
    return (
      <html lang='en'>
        <Head>
          <link rel='shortcut icon' type='image/png' href='/todolist/static/favicon.ico' sizes='32x32' />
          <style jsx>{`
            html {
              width:100%;
              background:gray;
            }
            body{
              width:500px;
              background:white;
              margin:10px auto;
              border-radius: 10px;
            }
          `}</style>
          <script defer src='/todolist/static/service-worker-registration.js' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
