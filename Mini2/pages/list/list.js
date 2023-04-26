// pages/list/list.js
const app = getApp()
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
		show: false,
		showDialog: false,
        buttons: [
            {
                type: 'default',
                className: '',
                text: '辅助操作',
                value: 0
            },
            {
                type: 'primary',
                className: '',
                text: '主操作',
                value: 1
            }
        ],
		curSongSH:1,
		curSongCH:1,
		curSongNJ:1,
		cdSHlist1:[
			{id:1, name:"Cøld", image:'https://i.328888.xyz/2023/04/24/iS1TlV.png'},
			{id:2, name:"Mirror", image:'https://i.328888.xyz/2023/04/24/iS11Lb.png'},
			{id:3, name:"别走", image:'https://i.328888.xyz/2023/04/24/iS1qRz.png'}
		],
		cdSHlist2:[
			{id:4, name:"落幕", image:'https://i.328888.xyz/2023/04/24/iSQVjx.png'},
			{id:5, name:"机器", image:'https://i.328888.xyz/2023/04/24/iSQfFk.png'},
			{id:6, name:"BATTLE", image:'https://i.328888.xyz/2023/04/24/iS1uow.png'},
		],
		cdSHlist3:[
			{id:7, name:"灯", image:'https://i.328888.xyz/2023/04/24/iS1uow.png'},
			{id:8, name:"Hold Ma Hand", image:'https://i.328888.xyz/2023/04/24/ioikbw.png'},
			{id:9, name:"木偶戏", image:'https://i.328888.xyz/2023/04/24/iSQfFk.png'},
		],
		cdSHlist4:[
			{id:10, name:"Redamancy", image:'https://i.328888.xyz/2023/04/24/iS1YUq.png'},
			{id:11, name:"Rap Game", image:'https://i.328888.xyz/2023/04/24/ioi0za.png'},
			{id:12, name:"Love never gone", image:'https://i.328888.xyz/2023/04/24/iS1agd.png'},
		],
		cdCSlist1:[
			{id:1, name:"Cøld", image:'https://i.328888.xyz/2023/04/24/iS1TlV.png'},
			{id:2, name:"Mirror", image:'https://i.328888.xyz/2023/04/24/iS11Lb.png'},
			{id:3, name:"落幕", image:'https://i.328888.xyz/2023/04/24/iSQVjx.png'}
		],
		cdCSlist2:[
			{id:4, name:"木偶戏", image:'https://i.328888.xyz/2023/04/24/iSQfFk.png'},
			{id:5, name:"灯", image:'https://i.328888.xyz/2023/04/24/iS1uow.png'},
			{id:6, name:"Hold Ma Hand", image:'https://i.328888.xyz/2023/04/24/ioikbw.png'},
		],
		cdNJlist1:[
			{id:1, name:"Cøld", image:'https://i.328888.xyz/2023/04/24/iS1TlV.png'},
			{id:2, name:"Mirror", image:'https://i.328888.xyz/2023/04/24/iS11Lb.png'},
			{id:3, name:"落幕", image:'https://i.328888.xyz/2023/04/24/iSQVjx.png'}
		],
	},

	/**
	 * 组件的方法列表
	 */
	methods: {
		//切换歌曲
		switchSongSH(e){
			console.log(e)
			this.setData({
				showDialog:true,
				curSongSH: e.currentTarget.dataset.id
			}, success=>{
				this.showSHSong()
			})
		},
		//显示歌词
		showSHSong(){
			this.popup.setContent();
			this.popup.showPopup();
			console.log(this.data.curSongSH)
		},
		_gotolast(){
			console.log('点击上一首');
			var cur = this.data.curSongSH;
			if(cur > 1){
				cur = cur - 1;
			}
			this.setData({
				curSongSH: cur
			})
			this.popup.setContent();
		},
		_gotonext(){
			console.log('点击下一首');
			var cur = this.data.curSongSH;
			if(cur < 12){
				cur = cur + 1;
			}
			this.setData({
				curSongSH: cur
			})
			this.popup.setContent();
		},
		_close(){
			console.log('点击关闭');
			this.setData({
				showDialog:false,
			});
			this.popup.hidePopup();
		},
		open: function () {
			this.setData({
				show: true
			})
		},
		buttontap(e) {
			console.log(e.detail)
		}
	},
	lifetimes:{
		attached: function(){
			this.popup = this.selectComponent("#popup");
		}
	},
	pageLifetimes: {
		show() {
		  if (typeof this.getTabBar === 'function' &&
			this.getTabBar()) {
			this.getTabBar().setData({
			  selected: 1
			})
		  }
		}
	  }
})
