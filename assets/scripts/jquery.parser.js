(function ($) {
    const re = /([^&=]+)=?([^&]*)/g;
    const decodeRE = /\+/g;
    const decode = (str) => decodeURIComponent(str.replace(decodeRE, " "));

    $.parser = (query) => {
        let params = {}, e;

        while (e = re.exec(query)) {
            params[decode(e[1])] = decode(e[2]);
        }
        return params;
    };

})(jQuery);
