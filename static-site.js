const someHTML = `
<!DOCTYPE html>
<html>
<body>

<h1>Hello World</h1>
<p>This is all generated using a Worker</p>
<iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
    frameborder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
></iframe>

</body>
</html>
`

/**
 * rawHtmlResponse delievers a response with HTML inputted directly
 * into the worker script
 * @param {string} html
 */
async function rawHtmlResponse(html) {
 const init = {
  headers: {
   'content-type': 'text/html;charset=UTF-8',
  },
 }

 return new Response(html, init)
}

//TODO add simple make subrequest

/**
 * TODO changeto use KV https://www.npmjs.com/package/mime-types
 * cloudStorageResponse takes in a request from the url cloudBaseURL/someresource
 * and then fetches someresource or defaultFilePath from that cloud storage
 */

/**
 *
 * @param {string} cloudBaseURL
 * @param {string} defaultFilePath
 */
async function cloudStorageResponse(cloudBaseURL, defaultFilePath) {
 const parsedUrl = new URL(request.url)
 const path = parsedUrl.pathname.replace('/cloud-storage', '')
 const lastSegment = path.substring(path.lastIndexOf('/'))

 if (lastSegment.indexOf('.') === -1) {
  path += defaultFilePath
 }

 return fetch(cloudBaseURL + path)
}

addEventListener('fetch', event => {
 const { url } = event.request

 // Replace with the routes you wish to serve static resources from
 if (url.includes('/cloud-storage')) {
  return event.respondWith(
   cloudStorageResponse(
    'https://cloudflare-example-space.nyc3.digitaloceanspaces.com',
    'index.html',
   ),
  )
 }

 if (url.endsWith('/raw')) {
  return event.respondWith(rawHtmlResponse(someHTML))
 }
})
