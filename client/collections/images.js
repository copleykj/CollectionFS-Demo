Images = new FS.Collection("images", {
    useHTTP: true,
    
    filter: {
        maxSize: 10485760, //in bytes
        allow: {
            contentTypes: ['image/*'],
            extensions: ['png', 'PNG', 'jpg', 'JPG', 'jpeg', 'JPEG', 'gif', 'GIF']
        },
        onInvalid: function (message) {
            alert(message);
        }
    }
});

Meteor.subscribe('images');