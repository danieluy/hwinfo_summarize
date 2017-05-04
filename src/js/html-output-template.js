module.exports =
'<html>' +
'<head>' +
  '<meta charset="utf-8">' +
  '<meta name="viewport" content="width=device-width, initial-scale=1">' +
  '<link href="https: //fonts.googleapis.com/css?family=Roboto:400,100,100italic,300,300italic,400italic,500,500italic,700,700italic,900,900italic" rel="stylesheet" type="text/css">' +
  '<title>{pcnameplaceholder}</title>' +
  '<style>' +
    '* { font-family: sans-serif; margin: 0; padding: 0; color: #333333; } body { padding: 20px; background-color: #eeeeee; } h1 { font-size: 2rem; margin: 20px 0; } body { display: flex; flex-direction: column; justify-content: center; align-items: center; } .card { padding: 5px; margin-top: 10px; border-radius: 1px; box-shadow: 01px2pxrgba(0, 0, 0, 0.15); } h2 { font-size: 1.5rem; margin: 10px0; font-weight: 100; } label { font-size: .65rem; text-transform: uppercase; color: #333; font-weight: 500; } p { font-size: 1.0rem; padding: 5px 0; } ul, ol { padding: 5px 20px; } .info { font-size: .8rem; padding: 30px 0; border-radius: 3px; }' +
  '</style>' +
'</head>' +
'<body>' +
  '<h1>HWiNFO Summary</h1>' +
  '<div>' +
    '{contentplaceholder}' +
  '</div>' +
  '<p class="info">' +
    'This summary report was created with <a href="https://github.com/danieluy/hwinfo_summarize" target="_bank">HWiNFO Summarize</a> from a HTM file obtained from <a href="https://www.hwinfo.com/" target="_blank">HWiNFO</a>' +
  '</p>' +
'</body>' +
'</html>';
