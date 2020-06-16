$(function(){
    let checkBold=true;
    let checkItalic=true;
    let checkUnderline=true;
    let checkLinethrough=true;
// ________________________________________________В функціонал порядку розташування кнопок стилів 
    $("#main_panel_sec_btn_fontstyle-bold").click(function (e) { 
       if(checkBold){
            changeStyle('fontWeight', '900');
        checkBold=false;
        }
        else{
            changeStyle('fontWeight', '400');
        checkBold=true;
        }
    });
    $('#main_panel_sec_btn_fontstyle-italic').click(function (e) {    
        if(checkItalic){
        changeStyle('fontStyle', 'italic');
        checkItalic=false;
        }
        else{
        changeStyle('fontStyle', 'normal');
        checkItalic=true;
        }
    });
    $('#main_panel_sec_btn_fontstyle-underline').click(function (e) { 
        if(checkUnderline){
        changeStyle('textDecoration', 'underline');
        checkUnderline=false;
        }
        else{
        changeStyle('textDecoration', 'none');
        checkUnderline=true;
        }
    });
    $('#main_panel_sec_btn_fontstyle-linethrough').click(function (e) { 
        if(checkLinethrough){
        changeStyle('textDecoration', 'line-through');
        checkLinethrough=false;
        }
        else{
        changeStyle('textDecoration', 'none');
        checkLinethrough=true;
        }
    });
    $('#main_panel_sec_btn_textalign-left').click(function (e) { 
            changeStyle('alignItems', 'flex-start');
    });
    $('#main_panel_sec_btn_textalign-right').click(function (e) { 
        changeStyle('alignItems', 'flex-end');
    });
    $('#main_panel_sec_btn_textalign-center').click(function (e) { 
        changeStyle('alignItems', 'center');
    });
    $('#main_panel_sec_btn_textstyle-fontfamily').change(function () { 
        let fontFam=$('#main_panel_sec_btn_textstyle-fontfamily').val()
        changeStyle('fontFamily', fontFam);  
    });
    $('#main_panel_sec_btn_textstyle-fontfamily').change(function () { 
        let fontFam=$('#main_panel_sec_btn_textstyle-fontfamily').val()
        changeStyle('fontFamily', fontFam);  
    });
    $('#main_panel_sec_btn_textstyle-fontsize').change(function () { 
        let fontFam=$('#main_panel_sec_btn_textstyle-fontsize').val()
        changeStyle('fontSize', fontFam);  
    });
    $('#main_panel_sec_btn_textstyle-textcolor').click(function (e) { 
        $('#color_text').attr('class','color_text');
        
    });
//________________________________________колір для тексту і згортання вікна боксу кольорів текту    
    $('.color_box').click(function (e) { 
        
        changeStyle('color',$(this).css('background-color'));
        $('#color_text').attr('class','disabled');
        
    });
    //________________________________________ Згортання вікна боксу кольорів текту
    $('.close').click(function (e) { 
        $('#color_text').attr('class','disabled');
    });
    // __________________________________________Table
    	
    $( "#tabs" ).tabs( "disable" );
    $('#main_panel_sec_btn_textstyle-backgroundcolor').click(function (e) { 
        $( "#tabs" ).tabs( "enable" );
        
    });


// ________________________________________________вікно backgroud
$('#main_panel_sec_btn_textstyle-backgroundcolor').click(function (e) { 
    $( "#tabs" ).tabs();
    $( "#tabs" ).attr('class', 'main_panel_sec_btn_textstyle-backgroundcolor_choisebox');
});

// _______________________________________________________Стилізація селекту
    let optionsArial=$('#arial').val()
    changeObjectStyle('#arial', 'fontFamily', optionsArial)
    let optionsGeorgia=$('#georgia').val()
    changeObjectStyle('#georgia', 'fontFamily', optionsGeorgia)
    let optionsImpact=$('#impact').val()
    changeObjectStyle('#impact', 'fontFamily', optionsImpact)
    let optionsTahoma=$('#tahoma').val()
    changeObjectStyle('#tahoma', 'fontFamily', optionsTahoma)
    let optionsTimes=$('#times').val()
    changeObjectStyle('#times', 'fontFamily', optionsTimes)
    let optionsVerdana=$('#verdana').val()
    changeObjectStyle('#verdana', 'fontFamily', optionsVerdana)
    // ____________________________________
    let optionsTwelve=$('#twelve').val()
    changeObjectStyle('#twelve', 'fontSize', optionsTwelve)
    let optionsFourteen=$('#fourteen').val()
    changeObjectStyle('#fourteen', 'fontSize', optionsFourteen)
    let optionsSixteen=$('#sixteen').val()
    changeObjectStyle('#sixteen', 'fontSize', optionsSixteen)
    let optionsEighteen=$('#eighteen').val()
    changeObjectStyle('#eighteen', 'fontSize', optionsEighteen)
    let optionsTwenty=$('#twenty').val()
    changeObjectStyle('#twenty', 'fontSize', optionsTwenty)
    let optionsTwentytwo=$('#twentytwo').val()
    changeObjectStyle('#twentytwo', 'fontSize', optionsTwentytwo)
    let optionsTwentyfive=$('#twentyfive').val()
    changeObjectStyle('#twentyfive', 'fontSize', optionsTwentyfive)
    let optionsThirty=$('#thirty').val()
    changeObjectStyle('#thirty', 'fontSize', optionsThirty)  
// ___________________________________________________________________funciji

    function changeStyle(style, value){
        $("#aria").css(style, value);
    }
    function changeObjectStyle(object,style,value){
        $(object).css(style, value);
    }




});
