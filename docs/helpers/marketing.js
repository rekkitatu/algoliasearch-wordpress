var Handlebars = require('handlebars');

module.exports = function (){
    if(process.env.NODE_ENV !== 'production') {
        return '';
    }

    return new Handlebars.SafeString(`
    <!-- GA -->
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-32446386-12', 'auto');
  ga('send', 'pageview');
</script>
<!-- Google Tag Manager -->
<noscript><iframe src="//www.googletagmanager.com/ns.html?id=GTM-N8JP8G" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-N8JP8G');</script>
<!-- Twitter -->
<script src="//platform.twitter.com/oct.js" type="text/javascript"></script>
<script type="text/javascript">
if("twttr" in window) {
    twttr.conversion.trackPid('ntr1j', { tw_sale_amount: 0, tw_order_quantity: 0 });
}
</script>
<noscript>
  <img height="1" width="1" style="display:none;" alt="" src="https://analytics.twitter.com/i/adsct?txn_id=ntr1j&amp;p_id=Twitter&amp;tw_sale_amount=0&amp;tw_order_quantity=0">
  <img height="1" width="1" style="display:none;" alt="" src="//t.co/i/adsct?txn_id=ntr1j&amp;p_id=Twitter&amp;tw_sale_amount=0&amp;tw_order_quantity=0">
</noscript>
<!-- Facebook -->
<script>
  !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
  n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
  document,'script','//connect.facebook.net/en_US/fbevents.js');
  fbq('init', '1654938174769952');
  fbq('track', "PageView");</script>
<noscript>
  <img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=1654938174769952&amp;ev=PageView&amp;noscript=1">
</noscript>
<!-- Addroll -->
<script type="text/javascript">
  adroll_adv_id = "TGR7R4XSGVGYVPX4LQBDFQ";
  adroll_pix_id = "YQNWNHGUUBD2JMY7BVOBWM";
  // adroll_email = "username@example.com"; // OPTIONAL: provide email to improve user identification
  (function () {
    var _onload = function(){
      if (document.readyState && !/loaded|complete/.test(document.readyState)){setTimeout(_onload, 10);return}
      if (!window.__adroll_loaded){__adroll_loaded=true;setTimeout(_onload, 50);return}
      var scr = document.createElement("script");
      var host = (("https:" == document.location.protocol) ? "https://s.adroll.com" : "http://a.adroll.com");
      scr.setAttribute('async', 'true');
      scr.type = "text/javascript";
      scr.src = host + "/j/roundtrip.js";
      ((document.getElementsByTagName('head') || [null])[0] ||
        document.getElementsByTagName('script')[0].parentNode).appendChild(scr);
    };
    if (window.addEventListener) {window.addEventListener('load', _onload, false);}
    else {window.attachEvent('onload', _onload)}
  }());
</script>
<script type="text/javascript">
  var _kmq = _kmq || [];
  var _kmk = _kmk || 'cb5a3adb92e8915a37a36ba1a50f2ce4fae4a1b9';
  function _kms(u){
    setTimeout(function(){
      var d = document, f = d.getElementsByTagName('script')[0],
      s = d.createElement('script');
      s.type = 'text/javascript'; s.async = true; s.src = u;
      f.parentNode.insertBefore(s, f);
    }, 1);
  }
  _kms('//i.kissmetrics.com/i.js');
  _kms('//scripts.kissmetrics.com/' + _kmk + '.2.js');
</script>
    `);
}
