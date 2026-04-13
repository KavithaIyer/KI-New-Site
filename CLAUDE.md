# Kavitha Iyer — Personal Site (v4)

## Stack
- Single static HTML file (`index.html`)
- Inline CSS, no JavaScript framework
- Google Fonts: Cormorant Garamond + Jost

## Deployment
- Hosted on **Vercel** under the client's account (`kavitha-iyers-projects`)
- Deploy via CLI using the client's token stored in `.env`
- Deploy command:
  ```
  source .env && vercel --prod --token "$VERCEL_TOKEN" --yes --scope kavitha-iyers-projects
  ```
- Production URL: https://kavithaiyer-v4.vercel.app

## Repo
- Private GitHub repo: helloTerris/kavithaiyer-v4
- `.env` contains the Vercel token — never commit it
