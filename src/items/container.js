export const itemsContainer = Vue.component('item-container', {
    template: `
    <div class="container">

        <div v-html="$itemPresenter.view.renderedMarkdownContent"></div>
        <a href="/doc">document</a>

    </div>
    `,
    data: function() { 
        return this.$itemPresenter.view
    },
    mounted: function() {
        this.$itemPresenter.getInitialState()
    },
    beforeDestroy: function() {
        this.$itemPresenter.disposal()
    }
})