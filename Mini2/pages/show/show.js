// pages/show/show.js
Component({
	/**
	 * 组件的属性列表
	 */
	properties: {

	},

	/**
	 * 组件的初始数据
	 */
	data: {
		cityList:[
			{id:1, city:"上海场"},
			{id:2, city:"长沙场"},
			{id:3, city:"南京场"}
		],
		curCity:1,
		datalist:[
			{id:1, image:'https://i.328888.xyz/2023/04/24/iSaQ5Z.png'},
			{id:2, image:'https://i.328888.xyz/2023/04/24/iSa1r8.png'},
			{id:3, image:'https://i.328888.xyz/2023/04/24/iSaqZF.png'},
			{id:4, image:'https://i.328888.xyz/2023/04/24/iSauOH.png'}
		],// 获取数据
		index:0,// 轮播图
		current:0,// 轮播图
		//视频列表
		//南京
		videoListNJ: [
			//微博链接总是报错，目前是把视频存在微信云
			{id:1, url:'cloud://caroseraph-7gt45mmc733d3ff5.6361-caroseraph-7gt45mmc733d3ff5-1308800083/video/林渝植工作室santamonica230409.mp4'},
			{id:2, url:'cloud://caroseraph-7gt45mmc733d3ff5.6361-caroseraph-7gt45mmc733d3ff5-1308800083/video/润润和杉杉的麻麻南京站《听》.mp4'},
			{id:3, url:'cloud://caroseraph-7gt45mmc733d3ff5.6361-caroseraph-7gt45mmc733d3ff5-1308800083/video/realllllx_zone的微博视频.mp4'}
		],
		videoListCS:[
			{id:1, url:'https://fb.video.weibocdn.com/o8/oT6lYl7wlx084G8izdmo0104120chAHY0E058.mp4?label=mp4_2160p&template=3840x2160.25.0&media_id=4890706872041545&tp=8x8A3El:YTkl0eM8&us=0&ori=1&bf=4&ot=h&ps=3lckmu&uid=7IBO1c&ab=,8012-g2,8143-g0,3568-g1,3601-g34,8013-g0,7598-g0&Expires=1681571882&ssig=TUqAML2yxm&KID=unistore,video'},
		],
		videoListSH:[
			{id:1, url:'cloud://caroseraph-7gt45mmc733d3ff5.6361-caroseraph-7gt45mmc733d3ff5-1308800083/video/林渝植工作室11-19reload上海.mp4'}
		],
	},

	/**
	 * 组件的方法列表
	 */
	methods: {
		//轮播图变化
		swiperchange(e){
			// console.log(e.detail);
			this.setData({
				current:e.detail.current
			})
		},
		//城市切换
		switchCity(e){
			// console.log(e)
			this.setData({
				curCity: e.currentTarget.dataset.id
			}, success=>{
				this.showCityVideo()
			})
		},
		//显示不同城市的视频
		showCityVideo(){
			console.log(this.data.curCity)
		},
		//视频播放控制
		handlePlay(event) {
			// console.log(event)
		   	let vid = event.currentTarget.id;
		   	//关闭上一个播放的视频
		   	this.vid !== vid && this.videoContext && this.videoContext.stop();
		   	this.vid = vid;
		   	//创建控制视频标签的实例对象
		   	this.videoContext = wx.createVideoContext(vid);
		 },
	},

	pageLifetimes: {
		
		show() {
		  if (typeof this.getTabBar === 'function' &&
			this.getTabBar()) {
			this.getTabBar().setData({
			  selected: 0
			})
		  }
		//   wx.cloud.init();

		}
	}
	
})
