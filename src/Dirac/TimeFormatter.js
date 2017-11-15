class TimeFormatter{
  getTime(){
    var date = new Date()
    var h = date.getHours();
    var m = date.getMinutes();
    return (h<10? "0":"") + h + ":" + (m<10? "0":"") + m;
  }

  getDate(){
    var date = new Date()
    return date.getDate() + "-" + (date.getMonth()+1) + "-" + date.getFullYear()
  }
}

export default new TimeFormatter()