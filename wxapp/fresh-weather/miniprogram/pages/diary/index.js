const app = getApp()
import { addEmotion, geocoder, getWeather } from '../../lib/api'

Page({
  data: {
    backgroundImage: '../../images/cloud.jpg',
    backgroundColor: '#62aadc',
    address: '定位中',
    lat: 40.056974,
    lon: 116.307689,
    paddingTop: 0,
    scale: 1
  },
  onLoad() {
    let self = this
    addEmotion('213423', 'sdsd')
    wx.getSystemInfo({
      success: (result) => {
        // console.log(result)
        let width = result.windowWidth
        let scale = width / 375
        self.setData({
          width,
          scale,
          paddingTop: result.statusBarHeight + 12
        })
      },
      fail: () => { },
      complete: () => { }
    });
    this.getLocation()
  },
  getLocation() {
    wx.getLocation({
      type: 'gcj02',
      success: this.updateLocation,
      fail: (e) => {
        this.openLocation()
      }
    })
  },
  updateLocation(res) {
    let { latitude: lat, longitude: lon, name } = res

    let data = {
      lat,
      lon
    }

    if (name) {
      data.address = name
    }
    console.log(res)
    this.setData(data)
    this.getAddress(lat, lon, name)
  },
  openLocation() {
    wx.showToast({
      title: '检测到您未授权使用位置权限，请先开启',
      icon: 'none',
      duration: 3000
    })
  },
  getAddress(lat, lon, name) {
    wx.showLoading({
      title: '定位中',
      mask: true
    })
    let fail = (e) => {
      this.setData({
        address: name || '南昌市'
      })
      wx.hideLoading()
    }

    geocoder(lat, lon, (res) => {
      wx.hideLoading()
      let result = (res.data || {}).result
      console.log(res)
      if (res.statusCode === 200 && result && result.address) {
        let { address, formatted_addresses, address_component } = result
        if (formatted_addresses && (formatted_addresses.recommend || formatted_addresses.rouch)) {
          address = formatted_addresses.recommend || formatted_addresses.rouch
        }
        let { province, city, district: county } = address_component
        this.setData({
          province,
          city,
          address: name || address
        })
      }
    }, fail)
  },
  goDiary() {
    wx.navigateTo({
      url: '../index/index',
      success: (result) => {

      },
      fail: () => { },
      complete: () => { }
    });

  },

})
