var prodMinFtesDataModel;


function getProdMinHoursFTEsViews() {

    $.ajax({
        url: "/Forecast/GetProdMinHoursFTEsView",
        success: function (result) {
            if (result.Successful) {
                $("#minftes-dialog").html(result.Data);
            }
            else {
                HandlerError
            }
        },
        error: HandlerError
    });
}

function getProdMinHoursFTEsData() {
    $.ajax({
        url: "/Parallon/GetProdMinHoursFTEsData",
        //data: { "planId": GlobalValues.PlanId, "wftDeptId": GlobalValues.WftDepartmentId },
        success: function (result) {
            if (result) {
                //prodMinFtesDataModel = result.Data;
                DoBinding(result);
            }
            else {
                HandlerError
            }
        },
        error: HandlerError
    });
}

function refreshMinHoursFTEsDialog() {

    //var views = getProdMinHoursFTEsViews();

    var model = getProdMinHoursFTEsData();

}
function DoBinding(data) {
  

    var viewModel;

       
    viewModel = ko.mapping.fromJS(data);
    //viewModel.FullName = ko.computed(function() {
    //    return this.Name() + " " + this.LastName();
    //}, this);
    viewModel.Months = ko.observableArray([]);
    var MonthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
    ];
   
    function Month(name,minHs, productMinFTEs) {
        this.name= name;
        this.minHs = minHs;
        this.productMinFTEs = productMinFTEs;
    }
        for (i = 0; i < viewModel.FtesItems().length; ++i) {
            viewModel.Months.push(new Month(MonthNames[i], viewModel.FtesItems()[1].MinHoursSun()))
        }
            ko.applyBindings(viewModel);
      

    


}

function HandlerError()
{
    alert("Error");
}


//VIEW mode
function onReadOnlyMinFTEsButtonClick() {

    //Refresh data by ajax call
    refreshMinHoursFTEsDialog();


    currentStepsDialog = $("#minftes-dialog").dialog({
        autoOpen: true,
        resizable: false,
        height: "auto",
        width: "auto",
        modal: true,
        buttons: {
            "Cancel": function () { $(this).dialog('close'); }
        }
    });
    $("minftes-dialog").parent().find("button").each(function () {
        if ($(this).text() == 'Save') {
            $(this).attr('disabled', false);
        }
    });
}


//EDIT mode
function onMinFTEsButtonClick() {

    //Refresh data by ajax call
    refreshMinHoursFTEsDialog();

    var currentStepsDialog = $("#minftes-dialog").dialog({
        autoOpen: false,
        resizable: false,
        height: "auto",
        width: "auto",
        modal: true,
        buttons: {
            "Save": function () {
                if (saveStepTargets()) {
                    $(this).dialog('close');
                }
            },
            "Reset to PLUS Data": function () {
                if (resetStepTargets()) {
                    $(this).dialog('close');
                }
            },

            "Cancel": function () {
                var closeMain = false;
                //if (boolHasChanges) {
                //    $("#action-confirm").dialog({
                //        resizable: false,
                //        height: 150,
                //        width: 350,
                //        modal: true,
                //        buttons: {
                //            "Yes": function () {
                //                // boolHasChanges = false;
                //                $(this).dialog('close');
                //            //                                refreshMinHoursFTEsDialog();
                //            //                                window.parent.$("#steps-dialog" + GlobalValues.DepartmentNumber).dialog('close');
                //            },
                //            "No": function () {
                //                $(this).dialog('close');
                //            }
                //        }
                //    });
                //}
                //else {
                //    $(this).dialog('close');
                //    //                    refreshMinHoursFTEsDialog();
                //}
                $(this).dialog('close');
            }
        }
    });

    $("minftes-dialog").parent().find("button").each(function () {
        if ($(this).text() == 'Save') {
            $(this).attr('disabled', false);
        }
    });
    currentStepsDialog.dialog("open");

}


$(document).ready(function () {

  

});
// end of $(document).ready()

