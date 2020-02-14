/**
 *  Get event from Vue Binding and return view model for each HTML dom
 * */
class ItemViewModel {
    constructor() {
        this.listItems = []
        this.loading = false
        this.renderedMarkdownContent = ""
    }
}

class ItemPresenter {
    constructor(service) {
        this.service = service
        this.view = new ItemViewModel()
        this.unsubscribe = new Subject()
    }

    getInitialState() {

        this.service.getRenderMarkdownService().subscribe(
            it => {
                this.view.renderedMarkdownContent = it
            }
        )

    }

    disposal(event) {
        this.unsubscribe.next()
        this.unsubscribe.complete()
    }

}