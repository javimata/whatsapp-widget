# Ultra light Whatsapp widget
## without images, using svg


```html
<script src="https://cdn.jsdelivr.net/gh/javimata/whatsapp-widget@1.0.2/js/whatsapp.js"></script>
<script>
var whatsAppBtn = new WhatsAppBtn({ phone: "12345678910", text: "Hi, i wanna contact us", iconColor: '#fff', backgroundColor: "#4DC247", callTo: "👋🏼 Contac us", positionText: "tl", position: "rb", width: "60", ga:['phone','click','whatsapp'], fb:['Contact','Whatsapp']});
whatsAppBtn.renderButton()
</script>
```

### <strong>Parameters</strong>
Name|Value type| Default | Required | Description
-|:-:|:-:|:-:|-
phone| string | Null | yes | Number of whatsapp including country code
text| string | Null | no | Text to include with prefill in the chat
iconColor| string | #fff | no | Color in RGB for the icon
backgroundColor| string | #4DC247 | no | Color for the icon background
callTo | string | Null | no | Text to show with the icon
positionText | string | tl | no | Position of text, check values list
position| string | rb | no | Position of the icon, check value list
width | string | 60 | no | Width of the icon
ga| array | Null | no | Create a Google Analytics event with a array with Label, Category and type, see example
fb| array | Null | no | Create a FB Pixel event with a array with Type and label, see example

  
### <strong>positionText</strong> values
Text|Result
:-:|-
tt| Text in top of icon
tl| Text in left of icon
tr| Text in right of icon
tb| Text in bottom of icon

### <strong>position</strong> values
Text|Result
:-:|-
lt| Left Top
lc| Left Center
lb| Left Bottom
rt| Right Top
rc| Right Center
rb| Right Bottom
