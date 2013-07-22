var DeleteCollectionModal = Backbone.View.extend({
    initialize: function() {
        var model = this.model;

        $('#modal-delete-collection-yes').on("click", function () {
            var id = $(this).attr('data-id');
            model.deleteCollection(id, true);
        });

        $("#modal-delete-collection").on("shown", function () {
            pm.app.onModalOpen("#modal-delete-collection");
        });

        $("#modal-delete-collection").on("hidden", function () {
            pm.app.onModalClose();
        });
    },

    render: function() {

    }
});
