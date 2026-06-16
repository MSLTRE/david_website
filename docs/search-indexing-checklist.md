# Search indexing checklist

Luibrand Tile's canonical website URL is:

```text
https://luibrandtile.com
```

Use that exact URL everywhere. `https://www.luibrandtile.com` redirects to the
canonical domain, and the Netlify subdomain should not be used in profiles,
citations, or marketing links.

## Google Search Console

1. Add a Domain property for `luibrandtile.com`.
2. Add the TXT verification record Google provides to the domain DNS.
3. If using a meta verification tag instead, set this Netlify environment
   variable and redeploy:

```text
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=<google verification value>
```

4. Submit the sitemap:

```text
https://luibrandtile.com/sitemap.xml
```

5. Use URL Inspection and request indexing for:

```text
https://luibrandtile.com/
https://luibrandtile.com/services
https://luibrandtile.com/work
https://luibrandtile.com/contact
```

6. Recheck the Page Indexing and Sitemaps reports over the next few days to a
   few weeks.

## Bing Webmaster Tools

1. Add `https://luibrandtile.com`.
2. Verify with DNS, imported Google Search Console verification, or the Bing
   meta tag. If using the meta tag, set this Netlify environment variable and
   redeploy:

```text
NEXT_PUBLIC_BING_SITE_VERIFICATION=<bing verification value>
```

3. Submit:

```text
https://luibrandtile.com/sitemap.xml
```

## Google Business Profile and citations

Update the website field to:

```text
https://luibrandtile.com
```

Keep the business name, phone, service area, and website consistent across:

* Google Business Profile
* Apple Business Connect / Apple Maps
* Bing Places
* Yelp
* Nextdoor
* Angi
* Thumbtack
* Houzz
* Facebook or Instagram business profiles
* Any builder, remodeler, or local chamber/vendor profiles

Add recent photos to Google Business Profile and keep responding to reviews.
Those off-site local signals cannot be fixed in code, but they matter for
visibility in local search.
