require(['./js/config.js'], function() {
    require(['bscroll', 'ajax'], function(bscroll, ajax) {
        ajax({
            url: '../../mock/list.json',
            success: function(data) {
                console.log(data)
            }
        })
    })
})