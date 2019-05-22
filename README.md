## Static

Generate a fully functioning HTML page from cloud storage or from inputting raw HTML into your work. Also, send static JSON.

[`index.js`](https://github.com/cloudflare/worker-template-static/blob/master/index.js) is the content of the Workers script.

Live Demos are hosted on `workers-tooling.cf/demos/static`:
[Demo HTML](http://workers-tooling.cf/demos/static/html) | [Demo json](http://workers-tooling.cf/demos/static/json)

#### Wrangler

To generate using [wrangler](https://github.com/cloudflare/wrangler)

```
wrangler generate myApp https://github.com/cloudflare/worker-template-static
```

#### Serverless

To deploy using serverless add a [`serverless.yml`](https://serverless.com/framework/docs/providers/cloudflare/) file.
