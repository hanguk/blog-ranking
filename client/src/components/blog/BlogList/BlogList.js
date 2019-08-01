import React from 'react'
import styles from './BlogList.module.scss'
import classNames from 'classnames/bind'
import Blog from 'components/blog/Blog'

const cx = classNames.bind(styles)

const BlogList = ({blogs}) => {
  const blogList = blogs.map((blog, index) => (
    <Blog key={`blog${index}`} blog={blog} />
  ))
  return (
    <div className={cx('blog-list-container')}>
      <div className={cx('blog-top-bar')}>
        <div className={cx('keyword')}>키워드</div>
        <div className={cx('url')}>URL</div>
        <div className={cx('blog')}>BLOG</div>
        <div className={cx('view')}>VIEW</div>
      </div>
      <div className={cx('blog-list')}>
        {blogList}
      </div>
    </div>
  )
}

export default BlogList