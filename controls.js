export default {
    jump: new KeyboardEvent('keydown', {key: 'Space', keyCode: 32}),
    dispatch(event) {
        ddocument.dispatchEvent(this[event]);
    } 
}