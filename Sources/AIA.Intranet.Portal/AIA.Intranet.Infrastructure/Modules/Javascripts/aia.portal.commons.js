﻿JSRequest.EnsureSetup();

var isIE7orBelow = false;
try { JSON } catch (err) { isIE7orBelow = true; };

var inDesignMode;
var wikiInEditMode;

$(document).ready(function () {
    //disable slimScroll in Edit mode
    try {
        inDesignMode = document.forms[MSOWebPartPageFormName].MSOLayout_InDesignMode.value;
    } catch (err) { }

    try {
        wikiInEditMode = document.forms[MSOWebPartPageFormName]._wikiPageMode.value;
    } catch (err) { }

    if (inDesignMode != "1" && wikiInEditMode != "Edit") {
        $('.scroll_a').slimScroll({
            start: 'top',
            disableFadeOut: true
        });

        $('.scroll_b').slimScroll({
            start: 'top',
            disableFadeOut: true,
            height: '150px'
        });
    }

    //fix the breadcrumb to load page title
    if ($(".ms-ltviewselectormenuheader").length == 0
        && $(".row_pathnavigator span>span.die").length == 0
        && $(".row_pathnavigator").text().toLowerCase().indexOf("search results") == -1) {
        $(".links_navigator").append($(".s4-breadcrumb span.s4-breadcrumbCurrentNode").clone().removeClass("s4-breadcrumbCurrentNode"));
    }

    //Fix the scrollbar in Chrome browser
    var isChrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
    if (isChrome) {
        //SharePoint function
        FixRibbonAndWorkspaceDimensions();

        //make sure ExecuteOrDelayUntilScriptLoaded works
        if (typeof (_spBodyOnLoadWrapper) != 'undefined') {
            _spBodyOnLoadWrapper();
        }
    }

    //fix picker's width for some browsers (ie: chrome)
    $("table[id$='_OuterTable']").each(function () {
        var $tbl = $(this);

        $tbl.width("100%");
        $tbl.find(">tbody>tr>td:first").css("width", "100%");
        $tbl.find("td:has(>a[id$='checkNames'])").attr("align", "right");
    });

    //remove !important for ms-vh2 class
    $(".ms-viewheadertr > .ms-vh2").css("border", "0");

    //format rating table in survey
    $("td.ms-formbodysurvey table[summary]>tbody>tr:odd").addClass("survey-oddrow");

    //fix width in dialog form
    if (JSRequest.QueryString["IsDlg"]) {
        $("#s4-bodyContainer").removeClass("width960");
        $(".ms-cui-ribbonTopBars").width("auto");
    }

    //force hide _invisibleIfEmpty
    $("td[name='_invisibleIfEmpty']:not(:has(img)):not(:has(.ad-gallery))").each(function () {
        if ($.trim($(this).text()) == "") {
            $(this).hide();
        }
    });

    //remove left menu last li border
    $(".left_menu_1 li:last").addClass("noBorder");

    //check if IE7 or below
    if (isIE7orBelow) {
        $("#s4-topheader2, #s4-mainarea, .footer-area").hide();
        $(".header_menu").html("<b>To access this portal, please use a supported browser, such as IE8 and above/Firefox.</b>");
        $("#aspnetForm").css("visibility", "visible");
    }

    //refresh document links when expand a group in Document Library (if any)
    $("a[onclick*='ExpCollGroup']").bind('click', function () {
        setTimeout("refreshDocumentLinks()", 2000);
    });
    //do the first change after page load
    refreshDocumentLinks();
});

function refreshDocumentLinks() {
    //detect link in Document Library and change the behavior
    $("div[field='LinkFilename'] a[href*='.pdf']").removeAttr('onclick').attr("target", "_blank");
}