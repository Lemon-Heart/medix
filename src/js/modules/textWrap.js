$(function() {
    let el = $('[class *= effect]');
    $(el).each(function() {
        let a = this.innerHTML.replace(/(.)/g, '<span>$1</span>');
        $(this).html(a);
    })
});