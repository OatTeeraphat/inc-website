
class HttpRepository {

  // TODO: ajax markdown file

  getMarkdownContentBySlug( slug="TGIF" ) {

    switch (slug) {
        case "dog":
            return of(`# hello **${slug}**`).pipe( delay(300) )
        default:
            return of(`# hi **${slug}**`).pipe( delay(300) )

    }

  }

}