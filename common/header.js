const TheHeader = {
    template: '#the-header-template',
    computed: {
        ...Vuex.mapGetters([
            'statusComment'
        ]),
    }
}