/**
 *  Get event from Vue Binding and return view model for each HTML dom
 * */
class ItemViewModel {
    constructor() {
        this.listItems = []
        this.loading = false
    }
}

class ItemPresenter {
    constructor(service) {
        this.service = service
        this.view = new ItemViewModel()
        this.unsubscribe = new Subject()
    }

    getInitialState() {

        console.log('hello')
        this.service.getRenderMarkdownResult().subscribe(
            it => {
                console.log(it)
            }
        )

    }

    getMoreListItems(event) {
        this.view.loading = true
        this.service.getMoreListItems()
    }

    clearItem(event) {
        this.view.listItems = []
    }

    disposal(event) {
        this.unsubscribe.next()
        this.unsubscribe.complete()
    }

}