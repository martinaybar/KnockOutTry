var prodMinFtesDataModel;


function getProdMinHoursFTEsViews() {

    $.ajax({
        url: "/Forecast/GetProdMinHoursFTEsView",
        success: function (result) {
            if (result.Successful) {
                $("#minftes-dialog" + GlobalValues.DepartmentNumber).html(result.Data);
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
            if (result.Successful) {
                prodMinFtesDataModel = result.Data;
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
        //open: NoOfDays(),
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
        //open: NoOfDays(),
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
                if (boolHasChanges) {
                    $("#action-confirm").dialog({
                        resizable: false,
                        height: 150,
                        width: 350,
                        modal: true,
                        buttons: {
                            "Yes": function () {
                                boolHasChanges = false;
                                $(this).dialog('close');
                                //                                refreshMinHoursFTEsDialog();
                                //                                window.parent.$("#steps-dialog" + GlobalValues.DepartmentNumber).dialog('close');
                            },
                            "No": function () {
                                $(this).dialog('close');
                            }
                        }
                    });
                }
                else {
                    $(this).dialog('close');
                    //                    refreshMinHoursFTEsDialog();
                }
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

