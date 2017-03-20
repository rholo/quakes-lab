app.filters = {
    formatMoney : function (value) {
        val = value === undefined ? '' : (value === null ? '' : value.toString());
        val = val.replace(',','');
        return  '$' + val.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    },

    getFormatDate: function(timestamp) {
        var day,dd,mm,yyyy;
        day = new Date(timestamp);
        //day = new Date();
        dd = day.getDate();
        mm = day.getMonth() + 1;
        yyyy = day.getFullYear();
        if (dd < 10){
            dd = '0' + dd;
        }
        if (mm < 10){
            mm = '0' + mm;
        }
        return dd + '/' + mm + '/' + yyyy;
        //app.params.date = dd + '/' + mm + '/' + yyyy;
    },
    getFormatTime:function (timestamp) {
        var day,hours,minutes,seconds;
        day = new Date(timestamp);
        seconds = day.getSeconds();
        minutes = day.getMinutes();
        hours = day.getHours();
        return + hours +':' + minutes;
        //app.params.time = + hours +':' + minutes + ':'+ seconds ;
    }
};
