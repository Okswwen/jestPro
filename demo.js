import Axios from "axios"

export const runCallBack = (callback) => {
  callback('abd')
}

const url="http://iquest-test94.aiyuangong.com/api/tag/getTagById?tag_id=523"
export const getData = () => {
  return Axios.get(url).then(res => res.data)
}