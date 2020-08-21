# blog

This is the blog that powers `oops.now.sh`, built on [next.js](https://zeit.co/blog/next) and deployed to the cloud via [now](https://zeit.co/now).

It depends on the [blog-views](https://github.com/jecassis/blog-views) microservice for the realtime views display.

It is forked from the blog of [Guillermo Rauch](https://github.com/rauchg/blog).

## How to Run

### Development

To run this blog:

```console
$ yarn install
```

To launch the development server:

```console
$ yarn dev
```

Also:

```console
$ vercel dev
```

Then head to `http://localhost:3000` on the browser.

### Deployment

To deploy this blog to the cloud install [Vercel CLI](https://vercel.com/download):

```console
$ yarn global add vercel
```

To register the application run:

```console
$ vercel login <email>
We sent an email to <email>. Please follow the steps provided inside it and make sure the security code matches <code_words>.
√ Email confirmed
Congratulations! You are now logged in.
$ vercel
> No existing credentials found. Please log in: <email>
√ Email confirmed
Congratulations! You are now logged in. In order to deploy something, run `now`.
$ now
? Set up and deploy “/path/to/blog”? [Y/n] y
? Which scope do you want to deploy to? <scope>
? Found project <scope>/<other>”. Link to it? [Y/n] n
? Link to different existing project? [Y/n] n
? What’s your project’s name? oops
? In which directory is your code located? ./
? Linked to <scope>/oops (created .vercel and added it to .gitignore)
? Inspect: https://vercel.com/<scope>/oops/<unique_id>
? Production: https://oops.vercel.app [copied to clipboard]
? Deployed to production. Run `vercel --prod` to overwrite later.
? To change the domain or build command, go to https://vercel.com/<scope>/oops/settings
```

To deploy additional changes to production:

```console
$ vercel --prod
```
