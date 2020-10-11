const getNewValue = (item) => {
    if (item.length > 0) {
        return parseInt(item[item.length - 1].id) + 1
    } else {
        return 1
    }
  }
  
  
  module.exports = {
    getNewValue
  }