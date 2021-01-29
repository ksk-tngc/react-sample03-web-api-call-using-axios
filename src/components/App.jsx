// React
import React from 'react'

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'

// コンポーネント定義
export const App = () => {
  return (
    <>
      <div className="container col-6 mt-5">
        {/* 見出し */}
        <header className="mb-4">
          <h4 className="text-center p-2 bg-success text-white rounded">
            Qiita新着記事サーチ
          </h4>
        </header>
        {/* メイン */}
        <main>
          {/* 検索エリア */}
          <section className="mb-4">
            <div className="input-group">
              <input
                className="form-control rounded-pill mr-1"
                placeholder="キーワードを入力"
              />
              <div className="input-group-append">
                <button className="btn rounded-circle">🔍</button>
              </div>
            </div>
          </section>
          {/* コンテンツエリア */}
          <section className="list-group">
            {/* 記事 */}
            <article className="list-group-item py-3">
              <p className="small mb-2">
                @[ユーザーID]
                <span className="text-muted">が[2021年01月25日]に投稿</span>
              </p>
              <h6 className="lead">
                <a href="#" className="text-dark">
                  [記事タイトル]
                </a>
              </h6>
              <p className="small mb-1">
                <span className="mr-2">🏷️</span>[タグA, タグB, タグC]
              </p>
              <p className="small mb-0">
                <span className="mr-2">👍</span>[193]
              </p>
            </article>
            {/* 記事 */}
            <article className="list-group-item py-3">
              <p className="small mb-2">
                @[ユーザーID]
                <span className="text-muted">が[2021年01月25日]に投稿</span>
              </p>
              <h6 className="lead">
                <a href="#" className="text-dark">
                  [記事タイトル]
                </a>
              </h6>
              <p className="small mb-1">
                <span className="mr-2">🏷️</span>[タグA, タグB, タグC]
              </p>
              <p className="small mb-0">
                <span className="mr-2">👍</span>[193]
              </p>
            </article>
            {/* 記事 */}
            <article className="list-group-item py-3">
              <p className="small mb-2">
                @[ユーザーID]
                <span className="text-muted">が[2021年01月25日]に投稿</span>
              </p>
              <h6 className="lead">
                <a href="#" className="text-dark">
                  [記事タイトル]
                </a>
              </h6>
              <p className="small mb-1">
                <span className="mr-2">🏷️</span>[タグA, タグB, タグC]
              </p>
              <p className="small mb-0">
                <span className="mr-2">👍</span>[193]
              </p>
            </article>
          </section>
        </main>
      </div>
    </>
  )
}
