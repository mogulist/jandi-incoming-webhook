# jandi-incoming-webhook
Send message to Jandi messenger's specific channel. It does not provide any kind of text formatting.

잔디 메신저로 메시지를 보내는 간단한 노드 모듈. 텍스트를 꾸미는 기능은 일체 없음.

---

## Install - 설치하기

`npm install --save https://github.com/HerbertLim/jandi-incoming-webhook.git`

## Usage - 사용방법

```
const Jandi = require('jandi-incoming-webhook')
const jandi = new Jandi(<jandi-incoming-webhook-url>)

const mesg = 'hello Jandi';
jandi.send(mesg, (err, res) => {
    ...
})
```

You can get `jandi-incoming-webhook-url` from Jandi messensger's Incoming Webhook setting for a topic.

&nbsp;

## LICENSE
Licensed under the MIT license.