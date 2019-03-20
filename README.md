# blog
This is the blog that powers `oops.now.sh`, built on [next.js](https://zeit.co/blog/next) and deployed to the cloud via [now](https://zeit.co/now).

It depends on the [blog-views](https://github.com/jecassis/blog-views) microservice for the realtime views display.

It is forked from the blog of [Guillermo Rauch](https://github.com/rauchg/blog).

## How to Run
### Development
To run this blog:
```
$ npm install
$ npm run dev
```
Then head to `http://localhost:3000` on the browser.

### Deployment
To deploy this blog to the cloud install [now-cli](https://zeit.co/download):
```
$ npm install -g now
```

Then run:
```
$ now
```

This returns a new instance of the blog at a new, immutable URL. After verification, set up an alias targetting the production URL `oops.now.sh`:
```
$ now alias oops
```

## Architecture
### Pure Components
Every stateless pure component is found under `./components`.

Every component that has to do with styling the post's markup is found under `./components/post`

These components make up the _style guide_ of the application.

### Blog posts
Every blog post is a static page hosted under `./pages/<year>`.

This allows every post to load arbitrary modules, have custom layouts and take advantage of automatic code splitting and lazy loading.

This means that the bloat of a single post doesn't "rub off on" the rest of the site.

An index of all posts is maintained in JSON format as `./posts.json` for practical reasons.
