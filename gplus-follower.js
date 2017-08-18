      (function() {
        // this guy right here
        document.getElementsByClassName('g-plus')[0].setAttribute('data-width', document.getElementById('gp-wrap').clientWidth);
        var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
        po.src = 'https://apis.google.com/js/platform.js';
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
      })();
