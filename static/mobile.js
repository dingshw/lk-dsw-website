(function(){
  var isPhone = /(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)
  var isPhonePage = location.href.indexOf('/m/') > -1
  if(isPhone !== isPhonePage){
    var url = ''
    if(isPhone){
      url = location.href.replace(location.origin, location.origin + '/m')
    }else{
      url = location.href.replace('/m', '')
    }
    location.href = url
  }

  // if(isPhone){
  //   try{
  //     var connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection || { type: 'unknown' };
  //     window.isSlowNet = typeof (connection.downlink) == "number" && connection.downlink < 5
  //   }catch(e){}
  // }
})()