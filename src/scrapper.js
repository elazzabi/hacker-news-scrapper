import xray from 'x-ray'

const x = xray({
    filters: {
        removeDot: function (value) {
            return value.slice(0, value.length - 1)
        }
    }
})

export default x