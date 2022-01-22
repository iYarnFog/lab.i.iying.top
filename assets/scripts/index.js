$(document).ready(() => {
    const params = $.parser(location.href.split('?')[1] || '');
    const page = params['page'] || 'index';

    $.ajax({
        url: `./assets/markdowns/${page}.md`,
        async: true,
        success: (data, textStatus) => {
            const mainContent = Mdjs.md2html(data);

            const pattern = /a title="" href=/g;
            const sanitizedMarkDownText = mainContent.replace(pattern,"a target='_blank' href=");

            $('main').html(sanitizedMarkDownText);
        }
    });

});
