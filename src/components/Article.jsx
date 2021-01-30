/*
  Component (Article)
  - Qiita投稿記事
*/

// React
import React from 'react'

// コンポーネント定義
export const Article = (props) => {
  // Props
  const { qiitaPost } = props

  // JSXをリターン
  return (
    // Qiita投稿記事
    <article className="list-group-item py-3">
      {/* ユーザーID、投稿日 */}
      <p className="small mb-2">
        {qiitaPost.userId + ' '}
        <span className="text-muted">
          が{qiitaPost.createdAtFormattedString}に投稿
        </span>
      </p>
      {/* 記事タイトル */}
      <h6 className="lead">
        <a target="__blank" href={qiitaPost.url} className="text-dark">
          {qiitaPost.title}
        </a>
      </h6>
      {/* タグ */}
      <p className="small mb-1">
        <span className="mr-2">🏷️</span>
        {qiitaPost.tags.join(', ')}
      </p>
      {/* いいね数 */}
      <p className="small mb-0">
        <span className="mr-2">👍</span>
        {qiitaPost.likesCount}
      </p>
    </article>
  )
}
