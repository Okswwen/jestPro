import {fetchData} from './fetchData'

// test('fetchData函数，请求数据结果', () => {
//   fetchData((data) => {
//     expect(data).toEqual({success: true})
//   })
// })

/** 
 * 异步函数中的test
 * 上述中的执行，无论如何都会测试通过
 * 因为没有等到异步函数执行完
 * 
*/

test('fetchData函数，请求数据结果', (done) => {
  fetchData((data) => {
    expect(data).toEqual({
      "code": 0,
      "message": "ok",
      "data": {
        "id": 532,
        "user_id": 0,
        "tag_type": 5,
        "tag_contents": "剪辑达人",
        "file_path": "http://image.ishouru.com/iquestimage/0580393567cf8109b725d0bda5a99574.png",
        "created_at": 1569227156,
        "updated_at": 1569395063,
        "tag_status": 1,
        "tag_text_id": 0,
        "guide_image": "http://image.ishouru.com/iquestimage/eaa68cc216a5a9a8e7ae0609d9fc8169.png",
        "guide_image_gray": "http://image.ishouru.com/iquestimage/26434dc8bfa0bb4c55efb1bcce592b0f.png",
        "h5_bg": "http://image.ishouru.com/iquestimage/af242767953f4570205e501d115fb688.png",
        "h5_title": "剪辑师",
        "h5_description": "注意：请上传您的剪辑作品示例图，我们将会根据您的作品质量进行审核。"
      }
    })
    done()
  })
})