//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    viewHeight: 0,
    index: '0',
    subject: '0',
    phoneNumber: '',
    username: '',
    classes: [{
        id: 0,
        value: '-请选择年级-'
      }, {
        id: 1,
        value: '一年级'
      }, {
        id: 2,
        value: '二年级'
      }, {
        id: 3,
        value: '三年级'
      }, {
        id: 4,
        value: '四年级'
      }, {
        id: 5,
        value: '五年级'
      }, {
        id: 6,
        value: '六年级'
      }, {
        id: 7,
        value: '初一'
      }, {
        id: 8,
        value: '初二'
      }, {
        id: 9,
        value: '初三'
      }, {
        id: 10,
        value: '高一'
      }, {
        id: 11,
        value: '高二'
      }, {
        id: 83,
        value: '高三'
      }, {
        id: 159,
        value: '其他'
    }],
    classId: 0,
    subjects: [{
        id: 0,
        value: '-请选择科目-'
      }, {
        id: 66,
        value: '语文'
      }, {
        id: 67,
        value: '数学'
      }, {
        id: 68,
        value: '英语'
      }, {
        id: 69,
        value: '物理'
      }, {
        id: 70,
        value: '化学'
      }, {
        id: 71,
        value: '生物'
      }, {
        id: 72,
        value: '政治'
      }, {
        id: 73,
        value: '历史'
      }, {
        id: 74,
        value: '地理'
      }, {
        id: 76,
        value: '奥数'
      }, {
        id: 158,
        value: '技术'
      }, {
        id: 160,
        value: '信息技术'
      }, {
        id: 161,
        value: '科学'
      }, {
        id: 163,
        value: 'IB'
      }, {
        id: 164,
        value: 'alevel'
      }, {
        id: 165,
        value: '雅思'
      }, {
        id: 166,
        value: '托福'
      }, {
        id: 167,
        value: '竞赛'
      }, {
        id: 168,
        value: '高数'
    }],
    subjectId: 0,
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    imgUrls: [
      'http://www.xuebacoming.com/application/images/sourceRegister/example01.png',
      'http://www.xuebacoming.com/application/images/sourceRegister/example02.png',
      'http://www.xuebacoming.com/application/images/sourceRegister/example03.png',
      'http://www.xuebacoming.com/application/images/sourceRegister/example04.png',
      'http://www.xuebacoming.com/application/images/sourceRegister/example05.png',
      'http://www.xuebacoming.com/application/images/sourceRegister/example06.png',
      'http://www.xuebacoming.com/application/images/sourceRegister/example07.png'
    ],
    lists: [
      {
        username: '*仕宇',
        subject: '初三 数学单科提高',
        score: '93分',
        count: 160
      },{
        username: '*培言',
        subject: '高一 数学单科提高',
        score: '28分',
        count: 120
      },{
        username: '*益瑄',
        subject: '高二 物理单科提高',
        score: '15分',
        count: 160
      },{
        username: '*镜名',
        subject: '初三 数学物理总提分',
        score: '76分',
        count: 240
      },{
        username: '*俊琪',
        subject: '初三 化学单科提高',
        score: '27分',
        count: 120
      },{
        username: '*佳悦',
        subject: '高二 数理化平均提分',
        score: '26分',
        count: 120
      },{
        username: '*邱涵',
        subject: '六年级 英语单科提高',
        score: '21分',
        count: 120
      },{
        username: '*笑笑',
        subject: '高二 数学单科提高',
        score: '37分',
        count: 320
      },{
        username: '*颜',
        subject: '初三 英语提高',
        score: '23分',
        count: 120
      },{
        username: '*鸿',
        subject: '六年级 总分提高',
        score: '53分',
        count: 160
      },{
        username: '*涵',
        subject: '高二 数学单科提高',
        score: '42分',
        count: 240
      },{
        username: '*可欣',
        subject: '高三 数学竞赛排名第1',
        score: '',
        count: 120
      },{
        username: '*欣宇',
        subject: '中考全科提分',
        score: '53分',
        count: 120
      },{
        username: '*念',
        subject: '五年级 语文提高',
        score: '18分',
        count: 100
      },{
        username: '*若姿',
        subject: '初三 数学提高',
        score: '27分',
        count: 80
      },{
        username: '*佳',
        subject: '高一 数学单科提高',
        score: '35分',
        count: 160
      },{
        username: '*涛',
        subject: '高考全科提分',
        score: '109分',
        count: 160
      },{
        username: '*杰盈',
        subject: '初二 物理成绩满分',
        score: '',
        count: 240
      },{
        username: '*梓怡',
        subject: '高考全科提分',
        score: '109分',
        count: 160
      },{
        username: '*雨诺',
        subject: '高考全科提分',
        score: '94分',
        count: 120
      },{
        username: '*圆',
        subject: '初三 物理竞赛二等奖',
        score: '',
        count: 80
      },{
        username: '*梦晨',
        subject: '高三 数学提高',
        score: '37分',
        count: 160
      }
    ],
    top: 0,
    timer: null
  },
  onLoad() {
    let ulHeight = 1056 * 2;
    let top = 0;
    let self = this
    this.data.timer = setInterval(scroll, 20);
    function scroll () {
      if(top >= -(ulHeight)){
        top -= 1;
        self.setData({
          top: top
        })
      } else {
        top = 0
        self.setData({
          top: 0
        })
      }
    }
  },
  onShow() {
    this.setData({
      timer: null
    })
    wx.getSystemInfo({
      success: (res) => {
        this.setData({
          viewHeight: res.windowHeight
        })
      }
    });
    

  },
  getPhoneNumber(e){
    this.setData({
      phoneNumber: e.detail.value
    })
  },
  getUserName(e){
    this.setData({
      username: e.detail.value
    })
  },
  bindPickerChange(e) {
    this.setData({
      index: e.detail.value,
      classId: this.data.classes[e.detail.value].id
    })
  },
  bindPickerSubjectChange(e) {
    this.setData({
      subject: e.detail.value,
      subjectId: this.data.subjects[e.detail.value].id
    })
  },
  toTop(e) {
    wx.pageScrollTo({  
      scrollTop: 0
    })
  },
  register(){
    if(!this.data.username){
      wx.showToast({
        title: '用户名不能为空',
        icon: 'none'
      })
      return
    }
    if(this.data.username.length < 2){
      wx.showToast({
        title: '用户名长度不能低于两位',
        icon: 'none'
      })
      return
    }
    if(!this.data.phoneNumber) {
      wx.showToast({
        title: '手机号码不能为空',
        icon: 'none'
      })
      return
    }
    if(!this.data.classId) {
      wx.showToast({
        title: '请选择年级',
        icon: 'none'
      })
      return
    }
    if(!this.data.subjectId) {
      wx.showToast({
        title: '请选择科目',
        icon: 'none'
      })
      return
    }
    wx.request({
      url: 'https://www.xuebacoming.com/reg/reg_register',
      method: 'POST',
      header:{
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: {
        mobile: this.data.phoneNumber,
        name: this.data.username,
        type: 972,
        grade: this.data.classId,
        subject: this.data.subjectId
      },
      success: (data) => {
        let res = data.data;
        if(res.code === 0) {
          wx.showToast({
            title: '注册成功',
            icon: 'success'
          })
        } else if(res.code === -1){
          wx.showToast({
            title: '注册失败',
            icon: 'none'
          })
        } else if(res.code === 1001){
          wx.showToast({
            title: '手机号码重复',
            icon: 'none'
          })
        } else if(res.code === 1002){
          wx.showToast({
            title: '手机号码不正确',
            icon: 'none'
          })
        } else if(res.code === 1003){
          wx.showToast({
            title: '用户名长度不能低于两位',
            icon: 'none'
          })
        }
      }
    })
  }
})
