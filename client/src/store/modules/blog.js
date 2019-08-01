import { createAction, handleActions } from 'redux-actions'

import { Map, List, fromJS } from 'immutable'
import { pender } from 'redux-pender'

import * as api from 'lib/api'

const INITIALIZE = 'blogINITIALIZE'
const CHANGE_INPUT = 'blog/CHANGE_INPUT'
const CHANGE_OPTION = 'blog/CHANGE_OPTION'
const REGISTRATION_BLOG = 'blog/REGISTRATION_BLOG'
const GET_BLOG_LIST = 'blog/GET_BLOG_LIST'

export const initialize = createAction(INITIALIZE)
export const changeInput = createAction(CHANGE_INPUT)
export const changeOption = createAction(CHANGE_OPTION)
export const updateBlog = createAction(REGISTRATION_BLOG, api.updateBlog)
export const getBlogList = createAction(GET_BLOG_LIST, api.getBlogList)

const initialState = Map({
  blogInfo: Map({
    keyword: '',
    url: '',
    isBlog: false,
    isView: false
  }),
  blogs: List([])
})

export default handleActions({
  [INITIALIZE]: () => initialState,
  [CHANGE_INPUT]: (state, action) => {
    let { name, value } = action.payload

    if (name === 'url') {
      value = value.replace(/m.blog/gi, 'blog')
      value = value.replace(/\?Redirect=Log&logNo=/gi, '/')
    }

    return state.setIn(['blogInfo', name], value)
  },
  [CHANGE_OPTION]: (state, action) => {
    const name = action.payload
    return state.updateIn(['blogInfo', name], status => !status)
  },
  ...pender({
    type: REGISTRATION_BLOG
  }),
  ...pender({
    type: GET_BLOG_LIST,
    onSuccess: (state, action) => {
      const { data } = action.payload

      const blogs = data.map((blog) => ({
        ...blog,
        createdAt: new Date(blog.createdAt),
        updatedAt: new Date(blog.updatedAt)
      }))

      return state.set('blogs', fromJS(blogs))
    }
  })
}, initialState)