# jandi-incoming-webhook
Send message to Jandi messenger's specific channel. It does not provide any kind of text formatting.

Supports Typescript.

---

## Install

`npm install --save https://github.com/HerbertLim/jandi-incoming-webhook.git`

or

`yarn add https://github.com/HerbertLim/jandi-incoming-webhook.git`

## Usage

### ES5 style
```
import Jandi from 'jandi-incoming-webhook';
const jandi = new Jandi(<jandi-incoming-webhook-url>)

(async () => {
    await jandi.send('Hello jandi')
    const res = jandi.send('I am fine')
})();
```

### CommonJS style
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