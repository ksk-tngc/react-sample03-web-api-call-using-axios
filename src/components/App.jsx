// React
import React, { useState } from 'react'
// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
// axios
import axios from 'axios'

// QiitaAPIエンドポイントURL
const QIITA_API_ENDPOINT_URL = 'https://qiita.com/api/v2/items'

// コンポーネント定義
export const App = () => {
  // state
  const [searchKeyword, setSearchKeyword] = useState('')
  const [qiitaPosts, setQiitaPosts] = useState([])

  // 検索ボタンのイベントハンドラ
  const onClickSearchButton = () => {
    // チェック
    if (searchKeyword === '') {
      alert('キーワードを入力してください。')
      return
    }
    getQiitaPosts()
  }

  // QiitaAPIを呼び出し、記事データを取得
  const getQiitaPosts = () => {
    axios
      .get(QIITA_API_ENDPOINT_URL, {
        params: {
          page: '1', // ページ番号（1〜100）
          per_page: '20', // 取得する記事の件数（1〜100）
          query: searchKeyword,
        },
      })
      .then((res) => {
        // レスポンスデータから必要なプロパティを抽出
        const _qiitaPosts = res.data.map((resData) => ({
          userId: resData.user.id,
          createdAt: resData.created_at,
          createdAtFormattedString: getFormattedDateString(resData.created_at),
          title: resData.title,
          url: resData.url,
          tags: resData.tags.map((tag) => tag.name),
          likesCount: resData.likes_count,
        }))
        // stateに格納
        setQiitaPosts(_qiitaPosts)
      })
      .catch((error) => {
        console.error(error)
      })
  }

  // 日時文字列をフォーマットする
  const getFormattedDateString = (dateString) => {
    const date = new Date(dateString)
    const yearStr = date.getFullYear()
    const monthStr = ('0' + date.getMonth() + 1).slice(-2)
    const dayStr = ('0' + date.getDate()).slice(-2)
    // フォーマット
    return `${yearStr}年${monthStr}月${dayStr}日`
  }

  // レンダリングするJSXをreturn
  return (
    <>
      <div className="container col-7 my-5">
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
              {/* 検索キーワード */}
              <input
                className="form-control rounded-pill mr-1"
                placeholder="キーワードを入力"
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value)}
              />
              {/* 検索ボタン */}
              <div className="input-group-append">
                <button
                  className="btn rounded-circle"
                  onClick={onClickSearchButton}
                >
                  🔍
                </button>
              </div>
            </div>
          </section>
          {/* コンテンツエリア */}
          <section className="list-group">
            {/* 記事 */}
            {qiitaPosts.map((post, index) => {
              return (
                <article className="list-group-item py-3" key={index}>
                  <p className="small mb-2">
                    {post.userId + ' '}
                    <span className="text-muted">
                      が{post.createdAtFormattedString}に投稿
                    </span>
                  </p>
                  <h6 className="lead">
                    <a target="__blank" href={post.url} className="text-dark">
                      {post.title}
                    </a>
                  </h6>
                  <p className="small mb-1">
                    {/* <span className="mr-2">🏷️</span>[タグA, タグB, タグC] */}
                    <span className="mr-2">🏷️</span>
                    {post.tags.join(', ')}
                  </p>
                  <p className="small mb-0">
                    <span className="mr-2">👍</span>
                    {post.likesCount}
                  </p>
                </article>
              )
            })}
          </section>
        </main>
      </div>
    </>
  )
}
