function computeDistance(distance) {
    let fee = 6;
    if(distance > 2 && distance <= 8 ){
        fee = fee + 0.8 * (distance - 2);
    }
    if(distance > 8 ){
        fee = fee + (distance - 8) * 1.5 * 0.8 + 6 * 0.8;
    }
    return fee;
}

function computeTime(time) {
    return time * 0.25;
}

function addFee(distance_result, time_result) {
    return distance_result + time_result;
}

function format(all_result) {
    return Math.round(all_result) + "";
}

module.exports = function main(distance,time) {
    if(distance > 0){
        //计算距离产生的费用
        let distanceResult = computeDistance(distance);
        //计算等待时间产生的费用
        let timeResult = computeTime(time);
        //计算总费用
        let allResult = addFee(distanceResult, timeResult);
        //返回四舍五入后的费用
        return format(allResult);
    }
    return ""
};