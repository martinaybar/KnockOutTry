


//function getProdMinHoursFTEsViews() {

//    $.ajax({
//        url: "/Forecast/GetProdMinHoursFTEsView",
//        success: function (result) {
//            if (result.Successful) {
//                $("#minftes-dialog").html(result.Data);
//            }
//            else {
//                HandlerError
//            }
//        },
//        error: HandlerError
//    });
//}

//MinFtes model for fill dialog views
var prodMinFtesDataModel;

//Month selected for user in UI dialog
var monthSelected = 0

function getProdMinHoursFTEsData() {
    $.ajax({
        url: "/Parallon/GetProdMinHoursFTEsData",
        //data: { "planId": GlobalValues.PlanId, "wftDeptId": GlobalValues.WftDepartmentId },
        
        success: function (result) {
            prodMinFtesDataModel = result;
            //if (result.Successful) {
            //    prodMinFtesDataModel = result.Data;
            //}
            //else {
            //    HandlerError
            //}
        },
        error: HandlerError
    });
}

function refreshMinHoursFTEsDialog() {
    getProdMinHoursFTEsData();
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


/* ******************** Fill Dialog View ************************ */
function refreshDialog(){
    refreshByDayOfWeekView();
}

//Refresh By Day View
function refreshByDayView() {

}

//Refresh By Day of Week View
function refreshByDayOfWeekView(monthSelected) {
    $("#minHoursByDayOfWeek").find(".min-hrs-dow-rec").first()
      .find(".min-hrs-sun  ").autoNumericSet(prodMinFtesDataModel.FtesItems[monthSelected].MinHoursSun).end()
      .find(".min-hrs-mon").autoNumericSet(prodMinFtesDataModel.FtesItems[monthSelected].MinHoursMon).end()
      .find(".min-hrs-tue").autoNumericSet(prodMinFtesDataModel.FtesItems[monthSelected].MinHoursTue).end()
      .find(".min-hrs-wed").autoNumericSet(prodMinFtesDataModel.FtesItems[monthSelected].MinHoursWed).end()
      .find(".min-hrs-thu").autoNumericSet(prodMinFtesDataModel.FtesItems[monthSelected].MinHoursThu).end()
      .find(".min-hrs-fri").autoNumericSet(prodMinFtesDataModel.FtesItems[monthSelected].MinHoursFri).end()
      .find(".min-hrs-sat").autoNumericSet(prodMinFtesDataModel.FtesItems[monthSelected].MinHoursSat).end()
      .find(".min-hrs-prod-ftes").autoNumericSet(prodMinFtesDataModel.FtesItems[monthSelected].ProductiveMin);
}

//Refresh By Day of Week per Month View
function refreshByDayOfWeekPerMonthView() {

}


$(document).ready(function () {

  

});
// end of $(document).ready()

