// React
import React, { useState } from 'react'
// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
// Component
import { Header } from './Header'
import { Search } from './Search'
import { Contents } from './Contents'

// コンポーネント定義
export const App = () => {
  // state
  const [qiitaPosts, setQiitaPosts] = useState([])

  // JSXをリターン
  return (
    <>
      <div className="container col-7 my-5">
        <Header />
        <main>
          <Search setQiitaPosts={setQiitaPosts} />
          <Contents qiitaPosts={qiitaPosts} />
        </main>
      </div>
    </>
  )
}
