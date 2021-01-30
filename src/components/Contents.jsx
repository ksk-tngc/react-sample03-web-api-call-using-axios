/*
  Component (Contents)
  - コンテンツエリア
*/

// React
import React from 'react'
// Component
import { Article } from './Article'

// コンポーネント定義
export const Contents = (props) => {
  // Props
  const { qiitaPosts } = props

  // JSXをリターン
  return (
    // コンテンツエリア
    <section className="list-group">
      {/* 記事 */}
      {qiitaPosts.map((qiitaPost, index) => (
        <Article key={index} qiitaPost={qiitaPost} />
      ))}
    </section>
  )
}
