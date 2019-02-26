const main = require('../main/main');

describe('taxi fee', function () {
    // 距离不合法的情况
    it("returns the fee when the distance invalid", function () {
        let distance = 0;
        let time = 0;
        let result = main(distance,time);
        expect(result).toEqual("")
    });

    //距离小于2km的情况
    it("returns the fee when the distance less than 2km", function () {
        let distance = 1;
        let time = 0;
        let result = main(distance,time);
        expect(result).toEqual("6");
    });

    //距离大于2km并且小于8km的情况
    it("returns the fee when the distance more than 2km and less than 8km", function () {
        let distance = 7;
        let time = 0;
        let result = main(distance,time);
        expect(result).toEqual("10");
    });

    //距离大于8km的情况
    it("returns the fee when the distance more than 8km", function () {
        let distance = 9;
        let time = 0;
        let result = main(distance,time);
        expect(result).toEqual("12");
    });

    //距离大于8km并且等待时间大于0的情况
    it("returns the fee when the distance more than 8km and time more than 0 ", function () {
        let distance = 9;
        let time = 4;
        let result = main(distance,time);
        expect(result).toEqual("13");
    });

    //距离大于8km，等待时间大于0，并且对总费用进行四舍五入格式化的情况
    it("returns the fee when the distance more than 8km and time more than 0 and format fee", function () {
        let distance = 9;
        let time = 1;
        let result = main(distance,time);
        expect(result).toEqual("12");
    });
});
