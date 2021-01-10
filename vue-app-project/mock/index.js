const http=require('http')
var Mock=require('mockjs')

http.createServer((req,res)=>{
    var data=Mock.mock({
        "msg": "success",
        "code":"1",
        "data":{
            "filterData|10":[
                {
                    "gap_price|0-2000": 0,
                    "price|1000-8000": 0,
                    "ds_price": "到手价¥4420",
                    "model_name": "一加 8T 赛博朋克2077 限定版",
                    "main_pic": "https:\/\/cdn.huodao.hk\/\/pd_img\/9F2\/277\/9F2277DD39D40E89497C93B79E272B86_1000x1000.jpg?proportion=1&x-oss-process=image\/auto-orient,0\/resize,h_350",
                    "degree_name": "95新",
                    "degree_desc": "国行",
                    "certified_icon_url_arr": [
                      {
                        "img_url": "http:\/\/cdn.huodao.hk\/upload_img\/20210104\/d4208ec1ada56e2c51e5274106d1da7d.png",
                      }
                    ],
                    "money_icon_url": "http:\/\/cdn.huodao.hk\/upload_img\/20200319\/f22a16f7ca53ce2f791de96eece59e2d.png?proportion=1",
                    "combination_param": [
                      {
                        "param_name": "全网通"
                      }
                    ],
                    "product_name_ab": "一加 8T 赛博朋克2077 限定版 12G+256G 赛博朋克",
                    "feature_tag": [
                      {
                        "tag_name": "领券2999减108",
                        "font_color": "FF191A",
                      },
                      {
                        "tag_name": "已降110",
                        "font_color": "FF191A",
                      }
                    ],
                    "difference_info_tag": [
                        {
                          "font_color": "2A6EC2",
                          "tag_name": "全新电池"
                        }
                      ],
                }
            ]
        }
    })
    res.end(JSON.stringify(data))
}).listen(9000,()=>{
    console.log('Mock服务开启')
})
