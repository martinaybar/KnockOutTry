//(function () {

//    var viewModel;

//    $.ajax({
//        url: '/Users/GetModel'
//    })
//    .done(function (data) {
//        viewModel = ko.mapping.fromJS(data);
//        //viewModel.save = save;
//        ko.applyBindings(viewModel);
//    });

//    //function save() {
//    //    $.ajax({
//    //        url: '/home/savehomedata',
//    //        type: "POST",
//    //        data: ko.mapping.toJS(viewModel)
//    //    })
//    //    .done(function () {
//    //        alert('guardo');
//    //    })
//    //    .error(function () {
//    //        alert('rompio');
//    //    });
//    //}

//})();


(function () {

    var viewModel;

    $.ajax({
        url: '/Users/GetUser'
    })
    .done(function (data) {
        viewModel = ko.mapping.fromJS(data);
        //viewModel.FullName = ko.computed(function() {
        //    return this.Name() + " " + this.LastName();
        //}, this);
        viewModel.FullName = ko.computed(function () {
            return viewModel.Name() + " " + viewModel.LastName();
        }, this);
        viewModel.Month = 3;
        viewModel.AddLines = ko.computed(function () {
            viewModel.Name("Juan");
            viewModel.LastName("KKK");
            return;
        }, this);


        ko.applyBindings(viewModel);
    });

})();


