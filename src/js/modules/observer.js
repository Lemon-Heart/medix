// $(document).ready(function(){
    var observer = new IntersectionObserver(function(entries){
        entries.forEach(function(entry){
        if(entry.isIntersecting) {
            $(entry.target).addClass('visible');
        } else {
            // $(entry.target).removeClass('visible');
        }
        });
    }, {threshold: 0.1});
    $('.effect2').each(function(){
        observer.observe(this);
    });
// });