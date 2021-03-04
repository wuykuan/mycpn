export default{
    setOrderStatius(status){
        switch(status){
            case 1:
                return "代付款"
            case 2:
                return "大发货"
            case 3:
                return "待收货"
            case 4:
                return "待评价"
            default:
                return "未获取状态"
        }
    },
    setStatusStyle(statuString){
        switch(statuString){
            case "代付款":
                 return "not-pay"
            case "大发货":
                 return "not-send"
            case "待收货":
                 return "not-receive"
            case "待评价":
                 return "not-comment"
            default:
                 return ""
        }
    }
}