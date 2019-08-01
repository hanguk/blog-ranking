import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import BlogRegistration from 'components/blog/BlogRegistration'
import * as blogActions from 'store/modules/blog'

class BlogRegistrationContainer extends Component {
  handleChangeInput = (name, value) => {
    const { BlogActions } = this.props
    BlogActions.changeInput({name, value})
  }

  handleChangeOption = (name) => {
    const { BlogActions } = this.props
    BlogActions.changeOption(name)
  }

  handleSubmit = ({keyword, url, isBlog, isView}) => {
    const { BlogActions } = this.props
    
    BlogActions.updateBlog({keyword, url, isBlog, isView})
      .then(() => {
        BlogActions.getBlogList()
      })
  }

  render () {
    const { keyword, url, isBlog, isView } = this.props
    const { handleChangeInput, handleChangeOption, handleSubmit } = this

    return (
      <BlogRegistration
        keyword={keyword}
        url={url}
        isBlog={isBlog}
        isView={isView}
        handleChangeInput={handleChangeInput}
        handleChangeOption={handleChangeOption}
        handleSubmit={handleSubmit}
      />
    )
  }
}

export default connect(
  (state) => ({
    keyword: state.blog.getIn(['blogInfo', 'keyword']),
    url: state.blog.getIn(['blogInfo', 'url']),
    isBlog: state.blog.getIn(['blogInfo', 'isBlog']),
    isView: state.blog.getIn(['blogInfo', 'isView'])
  }),
  (dispatch) => ({
    BlogActions: bindActionCreators(blogActions, dispatch)
  })
)(BlogRegistrationContainer)