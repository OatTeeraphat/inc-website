/**
 *  Implement Business Logic Here
 * */
// class GetItemDataModelAdapter {
//     constructor(model) {
//         this.item = model
//     }
// }

class ItemService {

    constructor( httpRepository, router ) {
        this.router = router
        this.httpRepository = httpRepository
        this.$markdownItem = new Subject()
    }

    getRenderMarkdownService() {

        let slug = this.router.currentRoute.params.name
        
        return this.httpRepository.getMarkdownContentBySlug( slug ).pipe(
            map( content => {
                return marked( content , { sanitize: true })
            })
        )

    }

}