function monthToString(month) {
    if(month == 0) {
        return {es: "Enero", en: "January"}
    } else if (month == 1) {
        return {es: "Febrero", en: "February"}
    } else if (month == 2) {
        return {es: "Marzo", en: "March"}
    } else if (month == 3) {
        return {es: "Abril", en: "April"}
    } else if (month == 4) {
        return {es: "Mayo", en: "May"}
    } else if (month == 5) {
        return {es: "Junio", en: "June"}
    } else if (month == 6) {
        return {es: "Julio", en: "July"}
    } else if (month == 7) {
        return {es: "Agosto", en: "August"}
    } else if (month == 8) {
        return {es: "Septiembre", en: "September"}
    } else if (month == 9) {
        return {es: "Octubre", en: "October"}
    } else if (month == 10) {
        return {es: "Noviembre", en: "November"}
    } else if (month == 11) {
        return {es: "Diciembre", en: "December"}
    }
}

function dayToString(day) {
    if(day == 0) {
        return {es: "Domingo", en: "Sunday"}
    } else if (day == 1) {
        return {es: "Lunes", en: "Monday"}
    } else if (day == 2) {
        return {es: "Martes", en: "Tuesday"}
    } else if (day == 3) {
        return {es: "Miércoles", en: "Wednesday"}
    } else if (day == 4) {
        return {es: "Jueves", en: "Thursday"}
    } else if (day == 5) {
        return {es: "Viernes", en: "Friday"}
    } else if (day == 6) {
        return {es: "Sabado", en: "Saturday"}
    }
}

function formatDate(date) {
    let rawDate = new Date(date);
    return date = {
        day: dayToString(rawDate.getDay()),
        intDay: rawDate.getDate(),
        month: monthToString(rawDate.getMonth()),
        year: rawDate.getFullYear()
    }
}

module.exports.formatDate = formatDate;
module.exports.dayToString = dayToString;
module.exports.monthToString = monthToString;