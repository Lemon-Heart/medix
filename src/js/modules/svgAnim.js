function svgAnim() {
    document.querySelectorAll('.animation-svg path').forEach(path => {    
          const totalLength = path.getTotalLength();
  
          path.style.strokeDashoffset = totalLength;
          path.style.strokeDasharray = totalLength + ' ' + totalLength;
    })
  }
  
svgAnim();

// $(function() {
//     let el = $('.svg-anim');
//         parent = el.parent();
//     $(el).each(function() {
//         $('<span class="animation-icon"><span class="static-svg"></span><span class="animation-svg"></span></span').appendTo(parent);
//         $(this).clone().appendTo(parent.find('.static-svg'));
//         $(this).clone().appendTo(parent.find('.animation-svg'));
//     })
// });