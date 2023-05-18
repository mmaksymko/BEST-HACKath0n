class Validator {
    constructor() {
        this.validated = true
    }

    isNumber = (value) => {
        this.validated = this.validated && (typeof value === "number" || /^-?\d+$/.test(value))
        return this
    }
    isID = (value) => {
        this.validated = this.validated && this.isNumber(value) && value > 0
        return this
    }
    isString = (value) => {
        this.validated = this.validated && typeof (value) === "string"
        return this
    }
    isBoolean = (value) => {
        this.validated = this.validated && (typeof value === "boolean" || value === "true" || value === "false")
        return this
    }
    isType = (value) => {
        this.validated = this.validated && this.isString(value) && (value === "credit" || value === "deposit")
        return this
    }

    isEmail = (value) => {
        this.validated = this.validated
            && value.toLowerCase()
                .match(
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                )
        return this
    }

    isDate = (date) => {
        let regEx = /^\d{4}-\d{2}-\d{2}$/;
        if (!date.match(regEx)) {
            this.validated = false;
        } else {
            let d = new Date(date);
            let dNum = d.getTime();
            if (!dNum && dNum !== 0) {
                this.validated = false;
            }
            else {
                this.validated = this.validated && d.toISOString().slice(0, 10) === date;
            }
        }
        return this
    }
    datesAreInOrder = (startDate, endDate) => {
        this.validated = this.isDate(startDate) && this.isDate(endDate) && startDate <= endDate
        return this
    }
}

module.exports = Validator