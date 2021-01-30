/*
  Component (Search)
  - 検索エリア
*/

// React
import React, { useState, useEffect } from 'react'
// axios
import axios from 'axios'

// QiitaAPIエンドポイントURL
const QIITA_API_ENDPOINT_URL = 'https://qiita.com/api/v2/items'
// 取得する記事の件数
const PER_PAGE = '20'
// 表示するページ番号
const PAGE_NUMBER = '1'

/**
 * コンポーネント定義
 * @param {Object} props
 */
export const Search = (props) => {
  // props
  const { setQiitaPosts } = props

  // state
  const [searchKeyword, setSearchKeyword] = useState('')

  /**
   * 検索ボタンのイベントハンドラ
   */
  const onClickSearchButton = () => {
    // チェック
    if (searchKeyword === '') {
      alert('キーワードを入力してください。')
      return
    }
    getQiitaPosts()
  }

  /**
   * QiitaAPIを呼び出し、記事データを取得
   */
  const getQiitaPosts = () => {
    axios
      .get(QIITA_API_ENDPOINT_URL, {
        params: {
          page: PAGE_NUMBER, // ページ番号（1〜100）
          per_page: PER_PAGE, // 取得する記事の件数（1〜100）
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

  /**
   * 日時文字列をフォーマットする
   * @param {String} dateString 日付文字列
   */
  const getFormattedDateString = (dateString) => {
    const date = new Date(dateString)
    const yearStr = date.getFullYear()
    const monthStr = ('0' + date.getMonth() + 1).slice(-2)
    const dayStr = ('0' + date.getDate()).slice(-2)
    // フォーマット
    return `${yearStr}年${monthStr}月${dayStr}日`
  }

  // 検索キーワードを空白にしたら記事一覧も消す
  useEffect(() => {
    if (searchKeyword === '') {
      setQiitaPosts([])
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchKeyword])

  // JSXをリターン
  return (
    // 検索エリア
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
          <button className="btn rounded-circle" onClick={onClickSearchButton}>
            🔍
          </button>
        </div>
      </div>
    </section>
  )
}
