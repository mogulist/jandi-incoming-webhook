# jandi-incoming-webhook
A Node module send message to Jandi messenger's specific channel. It does not provide any kind of text formatting.

잔디 메신저로 메시지를 보내는 간단한 노드 모듈. 텍스트를 꾸미는 기능은 일체 없음.

---

## Install - 설치하기

`npm install --save https://github.com/HerbertLim/jandi-incoming-webhook.git`

## Usage - 사용방법

```
const Jandi = require('jandi-incoming-webhook')
const jandi = new Jandi('<jandi-incoming-webhook-url>')

const mesg = 'hello Jandi';
jandi.send(mesg, (err, res) => {
    ...
})
```

`jandi-incoming-webhook-url` is an url as shown below:

  `https://wh.jandi.com/connect-api/webhook/12345678/1234567890abcdef1234567890abcdef`

You can get if from Jandi messensger's Incoming Webhook setting for a topic.


## LICENSE
Licensed under the MIT license.