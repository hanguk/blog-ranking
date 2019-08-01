import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import BlogList from 'components/blog/BlogList'
import * as blogActions from 'store/modules/blog'

class BlogListContainer extends Component {
  componentDidMount () {
    const { BlogActions } = this.props
    BlogActions.initialize()
    BlogActions.getBlogList()
  }

  render () {
    const { blogs } = this.props

    return (
      <BlogList
        blogs={blogs}
      />
    )
  }
}

export default connect(
  (state) => ({
    blogs: state.blog.get('blogs').toJS()
  }),
  (dispatch) => ({
    BlogActions: bindActionCreators(blogActions, dispatch)
  })
)(BlogListContainer)