# blog

This is the blog that powers `oops.now.sh`, built on [Next.js](https://nextjs.org/) and deployed to the cloud via [Vercel](https://vercel.com).

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

To test API functions use instead:

```console
$ vercel dev
```

Then navigate to `http://localhost:3000` on a browser.

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
? Set up and deploy “/path/to/blog”? [Y/n] y
? Which scope do you want to deploy to? <scope>
? Found project <scope>/<other>”. Link to it? [Y/n] n
? Link to different existing project? [Y/n] n
? What’s your project’s name? oops
? In which directory is your code located? ./
? Linked to <scope>/oops (created .vercel and added it to .gitignore)
Auto-detected Project Settings (Next.js):
- Build Command: `npm run build` or `next build`
- Output Directory: Next.js default
- Development Command: next dev --port $PORT
? Want to override the settings? [y/N] n
? Inspect: https://vercel.com/<scope>/oops/<unique_id>
? Production: https://oops.vercel.app [copied to clipboard]
? Deployed to production. Run `vercel --prod` to overwrite later.
? To change the domain or build command, go to https://vercel.com/<scope>/oops/settings
```

To preview the application:

```console
$ vercel
? Inspect: https://vercel.com/<scope>/oops/<unique_id>
? Preview: https://oops-<scope>.vercel.app [copied to clipboard]
? To deploy to production (oops.vercel.app), run `vercel --prod`
```

To deploy into production:

```console
$ vercel --prod
? Inspect: https://vercel.com/<scope>/oops/<unique_id>
? Production: https://oops-<scope>.vercel.app [copied to clipboard]
$ vercel alias oops-<scope>.vercel.app oops.now.sh
> Assigning alias oops.now.sh to deployment oops-<unique_id>.vercel.app
> Success! https://oops.now.sh now points to https://oops-<unique_id>-<scope>.vercel.app
```
