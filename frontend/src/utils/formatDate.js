const moment = require("moment")


const formatDate = (date) => {
    return moment(date).utc().format("DD/MM/YYYY")
}

export default formatDate