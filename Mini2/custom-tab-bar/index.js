Component({
  data: {
    selected: 1,
    color: "#ccccce",
    selectedColor: "#ffcbb0",
    list: [{
      pagePath: "/pages/show/show",
      iconPath: "/image/tab_show_unselect.png",
      selectedIconPath: "/image/tab_show_select.png",
      text: "演出"
    }, {
      pagePath: "/pages/list/list",
      iconPath: "/image/tab_lyrics_unselect.png",
      selectedIconPath: "/image/tab_lyrics_select.png",
      text: "歌词"
    }, {
		pagePath: "/pages/gift/gift",
		iconPath: "/image/tab_gift_unselect.png",
		selectedIconPath: "/image/tab_gift_select.png",
		text: "抽奖"
	}]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({url})
      this.setData({
        selected: data.index
      })
    }
  }
})