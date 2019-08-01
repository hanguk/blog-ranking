import React, { Component } from 'react'
import styles from './Blog.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

class Blog extends Component {
  render () {
    const { blog } = this.props

    return (
      <div className={cx('blog')}>
        <div className={cx('keyword')}>{blog.keyword}</div>
        <div className={cx('url')}>{blog.url}</div>
        <div className={cx('option-btn', 'blog-btn')}>
          <div className={cx('move-btn', { 'selected': blog.isView})}>
            {blog.isView ? 'On' : 'Off'}
          </div>
        </div>
        <div className={cx('option-btn', 'view-btn')}>
          <div className={cx('move-btn', { 'selected': blog.isView})}>
            {blog.isView ? 'On' : 'Off'}
          </div>
        </div>
      </div>
    )
  }
}
export default Blog