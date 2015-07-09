var _config = {
    blog_name       : '牛牛誌',         // 博客名称
    owner           : 'jackbull',           // github 用户名
    repo            : 'Issues',// github 中对应项目名
    duoshuo_id      : 'jackbullclouds',            // 在第三方评论插件多说申请站点的子域名
    // access_token : 'eb624e68280904899d5f64ed4722c94bc46a749c',                     // 请求量大时需要在 github 后台单独设置一个读取公开库的 token
    per_page        : '10'                    // 默认一页显示几篇文章
}

var duoshuoQuery = {short_name:_config['duoshuo_id']};
