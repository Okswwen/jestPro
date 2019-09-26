import axios from 'axios'

const url="http://iquest-test94.aiyuangong.com/api/tag/getTagById?tag_id=532"
export const fetchData = (fn) => {
  axios.get(url)
    .then((res) => {
      fn(res.data)
    })
}