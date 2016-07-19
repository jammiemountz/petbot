# Petbot Website

Static website for petbot.

## Building

- Clone down directory

- Uncomment line in `_config.yml` to set base url to local, Comment out line that sets if to deployment

- run `jekyll serve`

- navigate to http://localhost:4000

## Architecture

Each page is composed with the layout found in `/_layouts/default.html`, which includes the head, header, content, scripts, and footer on each page. The partials for each of these components is in `/includes/`

The index.html includes `/_includes/splash.html`, which is the homepage (aka splash page). faq.md is the only other page besides the splash page, and is written in markdown.

Scripts are located in `/_includes/js/`, and are added at the end of the html body in the endtags.html snippet.

Styles are written in SASS in the `/_sass/` and are compiled by `/css/main.scss` - if you add a new stylesheet in the `/_sass/` directory, it must also be added in the main.scss include.

Change the ACCENT color in main.css

Images are stored in `/assets`

All files in `/_site` and `.sass-cache` are compiled by jekyll and shouldn't be edited or committed.

## Deployment

Commit and push to the `gh-pages` branch. Page will be live at https://jammiemountz.github.io/petbot/

## Contributing

Make branches off of master, push up to the origin repo and open a pull request to master or gh-pages.
Any PR merged into gh-pages will be auto-merged into master.
