Images = new FS.Collection("images", {
    useHTTP: true,

    store: new FS.GridFSStore("images"),
    //store: new FS.FileSystemStore("images", "~/uploads"),
    copies: {
        thumbnail: {
            store: new FS.GridFSStore("thumbs"),
            //store: new FS.FileSystemStore("thumbs", "~/uploads/thumbs"),
            beforeSave: function() {
                this.gm().resize(300,300,"^").gravity('Center').crop(300, 300).quality(100).save();
            }
        }
    },

    filter: {
        maxSize: 10485760, //in bytes
        allow: {
            contentTypes: ['image/*'],
            extensions: ['png', 'PNG', 'jpg', 'JPG', 'jpeg', 'JPEG', 'gif', 'GIF']
        }
    }
});




Images.allow({
    insert: function(userId, file) {
        return true;
    },
    update: function(userId, file, fields, modifier) {
        return true;
    },
    remove: function(userId, file) {
        return true;
    },
    download: function() {
        return true;
    }
});