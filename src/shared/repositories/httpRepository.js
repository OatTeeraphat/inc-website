
class HttpRepository {  
    
    
  getItemData() {
      return rxjs.of([1,2,3,4,5,6,7]).pipe(
          rxjs.operators.delay(300)
      )
  }

  // TODO: ajax markdown file
  getMarkdownContentBySlug() {
      return of("# hello").pipe(
          delay(300)
      )
  }

}