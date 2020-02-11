/**
 *  Implement Business Logic Here
 * */
class GetItemDataModelAdapter {
    constructor(model) {
        this.item = model
    }
}

class ItemService {

    constructor(httpRepository, itemRepository) {
        this.httpRepository = httpRepository
        this.$markdownItem = new Subject()
    }

    getRenderMarkdownResult() {
        return this.$markdownItem.pipe(
            switchMap( () => {
                return this.httpRepository.getMarkdownContentBySlug().pipe(
                    map( it => console.log(it) )
                )
            })
        )
    }

}