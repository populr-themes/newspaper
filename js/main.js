$(document).on('pop-initialized', function(){
  $('.columnizer-row:not(.columnizer-cols1) .asset:not(.asset-type-text)').live('initialize', function(e, asset){
    fixBaseline(e.currentTarget);
  });

  $('.columnizer-row:not(.columnizer-cols1) .asset:not(.asset-type-text)').live('destroy', function(e, asset){
    fixBaseline(e.currentTarget);
  });
  
});

function fixBaseline(el) {
  var $el = $(el).find('.content');
  $el.imagesLoaded(function(images, proper, broken){
    var height = $el.height();
    var baseline = 20;
    var offset = (baseline - height % baseline) % baseline;
    $el.css('padding-bottom', offset + 'px');
  });
  $(document).imagesLoaded(function(){
    Populr.ThemeEngine.repack();
  });
  

}
