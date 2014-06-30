function timer() {
    return this;
}

/**
 * start the timer
 * @param startTime  optional
 * @returns this
 */
timer.prototype.start = function (startTime) {
    this.startTime = startTime || new Date();
    return this;
};

/**
 * end the timer and exec callback
 * @param callback
 * @returns {timer}
 */
timer.prototype.end = function (callback) {
    this.endTime = new Date();
    this.timeLength = this.endTime - this.startTime;
    callback(this.timeLength);
    return this;
};

module.exports = timer;
