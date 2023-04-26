// pages/lyrics/lyrics.js
Component({
	options:{
		multipleSlots: true//在组建定义时的选项中启用多slot支持
	},
	/**
	 * 组件的属性列表
	 */
	properties: {
		index:{
			type: Number,
			value: 1
		},
		// title:{
		// 	type: String,
		// 	value: '标题'
		// },
		// //弹窗内容
		// content:{
		// 	type: String,
		// 	value: '内容'
		// },
		//弹窗按钮文字
		btn_last:{
			type: String,
			value: '上一首'
		},
		btn_next:{
			type: String,
			value: '下一首'
		}
	},

	/**
	 * 组件的初始数据
	 */
	data: {
		flag: true,
		jsonData:[],
		title:"",
		content:""
	},

	/**
	 * 组件的方法列表
	 */
	methods: {
		//隐藏弹框
		hidePopup: function(){
			this.setData({
				flag: !this.data.flag
			})
		},
		//显示弹框
		showPopup: function(){
			this.setData({
				flag: !this.data.flag
			})
		},
		//设置显示内容
		setContent: function(){
			console.log(this.properties.index);
			let currentData = this.data.jsonData[this.properties.index - 1];
			var tmp = currentData.content;
			tmp = tmp.replace(/\\n/g, '\n')
			this.setData({
				title: currentData.name,
				content: tmp
			})
		},

		//内部私有方法
		_gotolast(){
			this.triggerEvent("error")
		},
		_success(){
			this.triggerEvent("success")
		},
		_close(){
			this.triggerEvent("close")
		}
	},

	lifetimes:{
		attached: function(){
			const loadData = require('../../src/json/lyricsData')
			// console.log(loadData.default.lyricsData);
			this.setData({
				jsonData: loadData.default.lyricsData
			})
			// wx.cloud.init();
			// wx.cloud.downloadFile({
			// 	fileID: 'cloud://caroseraph-7gt45mmc733d3ff5.6361-caroseraph-7gt45mmc733d3ff5-1308800083/text/lyrics_cold.txt', // 文件 ID
			// 	success: res => {
			// 	  // 返回临时文件路径
			// 	  console.log(res)
			// 	},
			// 	fail: console.error
			//   })
		}
	},
	pageLifetimes: {
		show: function(){
			// let currentData = this.data.jsonData[0];
			// var tmp = currentData.content;
			// tmp = tmp.replace(/\\n/g, '\n')
			// this.setData({
			// 	title: currentData.name,
			// 	content: tmp
			// })
		},
	}
})
