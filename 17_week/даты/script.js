function formatDate(data) {
    if (new Date() - data < 1*1000) {
        return "прямо сейчас";
    } else if (new Date() - data < 1*60*1000) {
        return ((new Date() - data)/1000 + " сек. назад");
    } else if (new Date() - data < 1*60*60*1000) {
        return ((new Date() - data)/1000/60 + " мин. назад");
    } else {
        const date = new Date();
        return (`0${date.getDate()}.0${date.getMonth() + 1}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`);
}}
alert(formatDate(new Date(new Date - 900)));
alert(formatDate(new Date(new Date - 59* 1000)));
alert(formatDate(new Date(new Date - 0.6*60*60* 1000)));
alert(formatDate(new Date(new Date - 30*60*60* 1000)));