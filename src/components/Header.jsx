/*
  Component (Header)
  - 見出し
*/

// React
import React from 'react'

// コンポーネント定義
export const Header = () => {
  // JSXをリターン
  return (
    // 見出し
    <header className="mb-4">
      <h4 className="text-center p-2 bg-success text-white rounded">
        Qiita新着記事サーチ
      </h4>
    </header>
  )
}
