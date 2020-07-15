$(function(){
    let checkBold=true;
    let checkItalic=true;
    let checkUnderline=true;
    let checkLinethrough=true;
    let checkModalWindows=true;
    let checkTableCreation=true;
    let checkUlCreation=true;
    let checkOlCreation=true;
    let checkOpenCreationWindows=true;
    let passwordCheck=false;

    let styleBorder = ['solid', 'dashed', 'dotted', 'double'];
    let colorBorder =['lime', 'yellow', 'yellowgreen', 'green', 'orange', 'orangered', 'blue', 'blueviolet', 'navy'];
    let typeMarkOl =['1', 'I', 'i', 'A', 'a']
    let typeListMarks=['disc', 'circle', 'square'];
    
    // ____________________________________Кнопка тегів (доступ до текст арія і таблиць з списками)
        $('#main_panel_sec_btn_code--button').click(function (e) {
            if(passwordCheck){ 
    $('#main').attr('class', 'disabled');
    $('#aria').attr('class', 'disabled');
    $('#main_create_table_list').attr('class', 'main');
    $('#textaria').val($('#aria').html());    
    }
    });
    // ______________________________________________________кнопка save textaria
    $('#main_create_table_list_panel_btn_save').click(function (e) { 
        $('#aria').html($('#textaria').val());
        $('#main').attr('class', 'main');
        $('#aria').attr('class', 'aria');
        $('#main_create_table_list').attr('class', 'disabled');
    
    });
    // _______________________________кнопка створити таблицю(генерує вікно з параметрами таблиці)

    $('#main_create_table_list_panel_btn_table').click(function (e) { 
        if(checkOpenCreationWindows){
        if(checkTableCreation){
        $('#main_create_table_list').append('<form class="box_table" id="table_create"></form>');
        checkOpenCreationWindows=false;
        $('#table_create').html(`<div id="head_table_create_div"><h2 style="margin-top: 1px; margin-left: 30px; font-family: Arial; font-size: 20px">Create your table:</h2><div id='close_table' class="close" style="margin: 0;"></div></div><br><span><label for="countTR" style="margin-right: 30px; font-size: 16px; font-family: Arial;">Count TR:</label><input type="number" name="countTR" id="table_TR" style="width: 80%; height: 30px;" placeholder="Count TR (just not more than 3 numbers)"></span><br><span><label for="countTD" style="margin-right: 30px; font-size: 16px; font-family: Arial;">Count TD:</label><input type="number" name="countTD" id="table_TD" style="width: 80%; height: 30px; margin-top: 5px; margin-bottom: 20px;"placeholder="Count TD"></span><br><span style="margin-top: 30px; margin-left: 30px; font-family: Arial; font-size: 20px">Add style to your table:</span><br><span><label for="widthOfTd" style="margin-right: 15px; font-size: 16px; font-family: Arial;">Width of TD:</label><input type="number" placeholder="Width of TD" name="widthOfTd" id="width_table_td" style="width: 80%; height: 30px; margin-top: 10px;"></span><br><span><label for="heightOfTd" style="margin-right: 10px; font-size: 16px; font-family: Arial;">Height of TD:</label><input type="number" placeholder="Height of TD" name="heightOfTd" id="height_table_td" style="width: 80%; height: 30px; margin-top: 5px; margin-bottom: 10px;"></span><br><span><label for="widthOfBorder" style="margin-right: 15px; font-size: 12px; font-family: Arial;">Width of border:</label><input type="number" placeholder="Width of border" name="widthOfBorder" id="width_border" style="width: 140px; height: 30px; margin-top: 10px; margin-right: 10px;"></span><span><label for="typeOfBorder" style="margin-right: 10px; font-size: 12px; font-family: Arial;">Type of border:</label><select name="typeOfBorder" id="type_of_border" style="width: 140px; height: 30px; margin-top: 5px; margin-right: 10px;"></select></span><span><label for="ColOfBord" style="margin-right: 10px; font-size: 12px; font-family: Arial;">Color of border:</label><select name="ColOfBord" id="col_of_bord" style="width: 140px; height: 30px; margin-top: 5px; margin-right: 10px;"></select></span><br><button type='button' name='button_reset' id="reset_value" value="reset" style="width: 350px; height: 35px; background-color: rgba(212, 105, 72, 0.95); color: white; margin-top: 20px">Reset</button><button type='button' name='button_table' id="button_table" value="Create table" style="width: 350px; height: 35px; background-color: rgba(71, 199, 93, 0.95); color: white; margin-top: 20px;margin-left: 25px">Create table</button><box id="for_creatin_object" class="disabled"></box>`);
        for(let i=0; i<4; i++){
            $('#type_of_border').append(`<option value=`+styleBorder[i]+` class=border_style_`+[i]+`>`+styleBorder[i]+`</option>`);
        }
        for(let i=0; i<9; i++){
            $('#col_of_bord').append(`<option value=`+colorBorder[i]+` id=border_color_`+[i]+`>`+colorBorder[i]+`</option>`);
        }
        

            checkTableCreation = false;
            
        }
        // ______________________якщо вікно створення таблиці створене то міняється клас на видимий
        else{
        $('#table_create').attr('class', 'box_table');
        checkOpenCreationWindows=false;
        }

        // ___________________________закривається вікно створення таблиці
        $('#close_table').click(function (e) { 
        $('#table_create').attr('class', 'disabled');

        checkOpenCreationWindows=true;      
        });
        $('#button_table').click(function (e) {
            // __________________________________________________________перевірка полів
            let countTR=/^[^0][0-9]{0,2}$/;
            let countTD=/^[^0][0-9]{0,2}$/;
            let widthTD=/^[^0][0-9]{0,2}$/;
            let heightTD=/^[^0][0-9]{0,2}$/;
            let widthBorder=/^[^0][0-9]{0,1}$/;


            let checkFiedlTR=checkField(countTR, $('#table_TR').val(), '#table_TR');
            let checkFieldTD=checkField(countTD, $('#table_TD').val(), '#table_TD');
            let checkFieldWidthTD=checkField(widthTD, $('#width_table_td').val(), '#width_table_td');
            let checkFieldHeightTD=checkField(heightTD, $('#height_table_td').val(), '#height_table_td');
            let checkFieldWidthBorder=checkField(widthBorder, $('#width_border').val(), '#width_border');
            if(checkFiedlTR&&checkFieldTD&&checkFieldWidthTD&&checkFieldHeightTD&&checkFieldWidthBorder){

            // _____________________________________________________________генериться сама таблиця
                createTable($('#table_TR').val(), $('#table_TD').val(), $('#width_table_td').val(), $('#height_table_td').val(), $('#width_border').val(), $('#type_of_border').val(), $('#col_of_bord').val())
        // ______________________________________________________додається текст в текстарію    
                let valTextAria = $('#textaria').val();
                let htmlBoxTable= $('#for_creatin_object').html();
                console.log(htmlBoxTable)
                $('#textaria').val(valTextAria+htmlBoxTable);
                $('#for_creatin_object').html('');
            
        // _____________________ховається вікно створення таблиці i обнулюються інпути
                $('#table_create').attr('class', 'disabled');
                $('#table_TR').val('');
                $('#table_TD').val('');
                $('#width_table_td').val('');
                $('#height_table_td').val('');
                $('#width_border').val('');
                checkOpenCreationWindows=true;
                }
        

            });
        // ___________________________кнопка ресет обнулює інпути
        $('#reset_value').click(function (e) { 
            $('#table_TR').val('');
            $('#table_TD').val('');
            $('#width_table_td').val('');
            $('#height_table_td').val('');
            $('#width_border').val('');
        
        
        });
    }    
    });
    
    // ___________________кнопка створити нумерований список(генерує вікно з параметрами списку)
    $('#main_create_table_list_panel_btn_ol').click(function (e) { 
        if(checkOpenCreationWindows){
        if(checkOlCreation){
            $('#main_create_table_list').append('<form class="box_ol" id="Ol_create"></form>');
            checkOpenCreationWindows=false;
            $("#Ol_create").html(`<div id="head_ol_create_div"><h2 style="margin-top: 1px; margin-left: 30px; font-family: Arial; font-size: 20px">Create your Ol:</h2><div id='close_ol' class="close" style="margin: 0;"></div></div><br><span><label for="countLi" style="margin-right: 75px; font-size: 16px; font-family: Arial;">Count Li:</label><input type="number" name="countLi" id="ol_li" style="width: 80%; height: 30px;" placeholder="Count Li"></span><br><span><label for="type_of_marks" style="margin-right: 30px; font-size: 16px; font-family: Arial;">Type of marks:</label><select  name="type_of_marks" id="type_marks" style="width: 80%; height: 30px; margin-top: 5px; margin-bottom: 20px;"></select></span><br><button type='button' name='button_list_reset' id="button_list_reset" value="reset" style="width: 350px; height: 35px; background-color: rgba(212, 105, 72, 0.95); color: white; margin-top: 20px;margin-left: 25px">Reset</button><button type='button' name='button_list' id="button_create_ol" value="Create list" style="width: 350px; height: 35px; background-color: rgba(71, 199, 93, 0.95); color: white; margin-top: 20px;margin-left: 25px">Create list</button><box id='for_creatin_ol_object' class='disabled'></box>`); 
            for(let i=0; i<5; i++){
                $('#type_marks').append(`<option value=`+typeMarkOl[i]+`>`+typeMarkOl[i]+`</option>`);
            } 



            checkOlCreation=false;
        }
        else{
            $("#Ol_create").attr('class', "box_ol");
            checkOpenCreationWindows=false;
        }
    };
        // ____________________кнопка створення самого списку(перевірка полів,генерування списку)
        $('#button_create_ol').click(function (e) { 
            let countOl=/^[^0][0-9]{0,2}$/;
            if(checkField(countOl,$('#ol_li').val(), '#ol_li')){
                createOl($('#ol_li').val(), $('#type_marks').val())
        // ______________________________________________________додається текст в текстарію    
            let valTextAria = $('#textaria').val();
            let htmlBoxOl= $('#for_creatin_ol_object').html();
            
            $('#textaria').val(valTextAria+htmlBoxOl);
            $('#for_creatin_ol_object').html('');   
            $('#ol_li').val('');            
        // _______________________________________________закривається вікно    
            $("#Ol_create").attr('class', 'disabled');
            checkOpenCreationWindows=true;
            }

            
        });
        // ________________________________________________кнопка ресет поля вікна списку
        $('#button_list_reset').click(function (e) { 
            $('#ol_li').val('');
        });
        // _____________________________закрити вікно створення списку
        $('#close_ol').click(function (e) { 
            $("#Ol_create").attr('class', 'disabled');
            checkOpenCreationWindows=true;
        });
    
    });
    $('#main_create_table_list_panel_btn_ul').click(function (e) { 
        if(checkOpenCreationWindows){
        if(checkUlCreation){
            $('#main_create_table_list').append('<form class="box_ul" id="ul_create"></form>');
            checkOpenCreationWindows=false
            $("#ul_create").html(`<div id="head_ul_create_div"><h2 style="margin-top: 1px; margin-left: 30px; font-family: Arial; font-size: 20px">Create your Ul:</h2><div id='close_ul' class="close" style="margin: 0;"></div></div><br><span><label for="countLi" style="margin-right: 75px; font-size: 16px; font-family: Arial;">Count Li:</label><input type="number" name="countLi" id="ul_li" style="width: 80%; height: 30px;" placeholder="Count Li"></span><br><span><label for="type_of_marks" style="margin-right: 30px; font-size: 16px; font-family: Arial;">Type of marks:</label><select  name="type_of_marks" id="type_marks_ul" style="width: 80%; height: 30px; margin-top: 5px; margin-bottom: 20px;"></select></span><br><button type='button' name='button_list_reset' id="button_list_reset_ul" value="reset" style="width: 350px; height: 35px; background-color: rgba(212, 105, 72, 0.95); color: white; margin-top: 20px;margin-left: 25px">Reset</button><button type='button' name='button_list' id="button_create_ul" value="Create list" style="width: 350px; height: 35px; background-color: rgba(71, 199, 93, 0.95); color: white; margin-top: 20px;margin-left: 25px">Create list</button><box id='for_creatin_ul_object' class='disabled'></box>`);
            for(let i=0; i<3; i++){
                $('#type_marks_ul').append(`<option value=`+typeListMarks[i]+`>`+typeListMarks[i]+`</option>`);
            } 
            checkUlCreation=false 
        }
        else{
            $("#ul_create").attr('class', "box_ul");
            checkOpenCreationWindows=false;
        }
        }
        $('#button_create_ul').click(function (e) { 
            let countUl=/^[^0][0-9]{0,2}$/;
            if(checkField(countUl,$('#ul_li').val(), '#ul_li')){
                createUl($('#ul_li').val(), $('#type_marks_ul').val())
        // ______________________________________________________додається текст в текстарію    
            let valTextAria = $('#textaria').val();
            let htmlBoxUl= $('#for_creatin_ul_object').html();
            $('#textaria').val(valTextAria+htmlBoxUl);
            $('#for_creatin_ul_object').html('');               
        // _______________________________________________закривається вікно    
            $("#ul_create").attr('class', 'disabled');
            $('#ul_li').val('')
            checkOpenCreationWindows=true;
            
            }
        

            
        });
        $('#close_ul').click(function (e) { 
            $("#ul_create").attr('class', 'disabled');
            checkOpenCreationWindows=true;
            
        });
        
    });



// _____________________________________Функціонал стилізації в порядку розташування кнопок стилів 
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
        if(checkModalWindows){ 
        $('#color_text').attr('class','color_text');
        checkModalWindows=false;
    }
        
    });
//_____________________________________колір для тексту і згортання вікна боксу кольорів тексту    
    $('.color_box').click(function (e) { 
        
        changeStyle('color',$(this).css('background-color'));
        $('#color_text').attr('class','disabled');
        checkModalWindows=true;
        
    });
    //________________________________________ Згортання вікна боксу кольорів текту
    $('.close').click(function (e) { 
        $('#color_text').attr('class','disabled');
        $("#tabs").attr('class','disabled');
        $('#form-signin').attr('class', 'disabled');
        checkModalWindows=true;
    });

// ________________________________________________вікно backgroud
$('#main_panel_sec_btn_textstyle-backgroundcolor').click(function (e) { 
    if(checkModalWindows){
    $( "#tabs" ).tabs();
    $( "#tabs" ).attr('class', 'main_panel_sec_windows_textstyle-backgroundcolor');
    checkModalWindows=false
    }
});
    // _______________________________________________________колір бекгроунд
    $('.color_box_backgound').click(function (e) { 
        changeStyle('backgroundImage', 'none')
        changeStyle('backgroundColor',$(this).css('background-color'));
        $("#tabs").attr('class','disabled');

        checkModalWindows=true;
        
    });
    $('.color_box_backgound_image').click(function (e) { 
        changeStyle('backgroundImage',$(this).css('backgroundImage'));
        $("#tabs").attr('class','disabled');
        checkModalWindows=true;
        
    });
 
    $('#image_file').change(function (e) { 
        showFile(this)
        $("#tabs").attr('class','disabled');
        checkModalWindows=true;
        // changeStyle('background-image','url("' + showFile(this) + '")')
        //   console.log(showFile(this))
    });
    // ______________________________________________________Логінування
    $('#main_panel_sec_btn_password-btnpasword').click(function (e) { 
        if(checkModalWindows){
        $('#form-signin').attr('class', 'form-signin');
        checkModalWindows=false
    }
    });
    $('.main_panel_sec_btn_password-btnpasword--sing_in').click(function (e) { 
        let login = /^Admin$/;
        let value = $('#inputText').val();
        if(login.test(value)){
            $('#inputText').addClass('accets');
        }
        else{
            $('#inputText').addClass('reject');
            $('#check_your_login_or_password').attr('class', 'check_your_login_or_password');
        }
        let password = /^Admin$/;
        let valuePassword = $('#inputPassword').val();
        if(password.test(valuePassword)){
            $('#inputPassword').addClass('accets');
        }
        else{
            $('#inputPassword').addClass('reject');
            $('#check_your_login_or_password').attr('class', 'check_your_login_or_password');
        }
        if(login.test(value)&&password.test(valuePassword)){
            $('#form-signin').attr('class', 'disabled');
            $('#inputText').val('');
            $('#inputPassword').val('');
            $('#inputText').attr('class', 'form-control');
            $('#inputPassword').attr('class', 'form-control');
            $('#check_your_login_or_password').attr('class', 'disabled');
            checkModalWindows=true;
            passwordCheck=true;

        }
    });
// _______________________________________________________Стилізація селекту font Family
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
    // ___________________________________________________Стилізація селекту font size
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
// ___________________________________________________________________функції

    function changeStyle(style, value){
        $("#aria").css(style, value);
    }
    function changeObjectStyle(object,style,value){
        $(object).css(style, value);
    }
    function addClass(object, className){
        $(object).attr('class', className);
    }
    function checkField(varible, objectVal, object){
        if(varible.test(objectVal)){ addClass(object,'accets'); return true}
        else {addClass(object,'reject'); return false}
    }
    function showFile(input) {
        let file = input.files[0];
        let reader = new FileReader()
        reader.readAsDataURL(file);
      
        reader.onload = function() {
            changeStyle('background-image', 'url("' + reader.result + '")')
            // return reader.result
        };
      
        reader.onerror = function() {
          console.log(reader.error);
        };
        // console.log(reader.onload)        
        // return reader.onload
      }
    function createTable(countTR, countTD, widthTD, heightTD, widthBord, styleBord, colorBord){
        // $('#main_create_table_list').append(`<box id='for_creatin_object'></box>`);
        $('#for_creatin_object').append(`<table class='temporary' style="border-collapse: collapse; border: `+widthBord+`px `+styleBord+` `+colorBord+`"></table>`)
        
        for(let i=1; i<=countTR; i++){
            $('.row').html('');
            $('.temporary').append(`<tr class='row'></tr>`);

            for(let i=1; i<=countTD; i++){
                $('.row').append(`<td id='td' style="width: `+widthTD+`px; height: `+heightTD+`px; border: `+widthBord+`px `+styleBord+` `+colorBord+`">TD</td>`);

            }
        }   
       let tab= $('#temporary').html();     
        console.log(tab)
      }
    function createOl(countOl, markOl){
        $('#for_creatin_ol_object').append(`<ol class='ol_temporary' type=`+markOl+`></ol>`)
        for(let i=1; i<=countOl; i++){
            
            $('.ol_temporary').append(`<li class='li_row'>Item`+[i]+`</li>`);
        }
    }
    function createUl(countUl, markUl){
        $('#for_creatin_ul_object').append(`<ul class='ul_temporary' type=`+markUl+`></ul>`)
        for(let i=1; i<=countUl; i++){
            
            $('.ul_temporary').append(`<li class='li_row_ul'>Item`+[i]+`</li>`);
        }
    }
});
