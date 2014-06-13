var userGasRecords = [];

$(function(){
   // DOM Ready - do your stuff 
       AltLog();

    //PopulateMenu();
});

//Functions-----------------------==========------------

function AltLog1(){
     $('#MainPage').html('');
    var AlternateContent = '';

    AlternateContent += '<table>'
    AlternateContent += '<thead>'
    AlternateContent += '</thead>'
    AlternateContent += '<tbody>'
    AlternateContent += '<tr>'
    AlternateContent += '<td><button id="0test1" type="button" class="btn btn-lg btn-danger">1</button></td>'
    AlternateContent += '<td><button id="0test2" type="button" class="btn btn-lg btn-success">2</button></td>'
    AlternateContent += '<td><button id="0test3" type="button" class="btn btn-lg btn-primary">3</button></td>'
    AlternateContent += '</tr>'
    AlternateContent += '<tr>'
    AlternateContent += '<td><button id="0test4" type="button" class="btn btn-lg btn-primary">4</button></td>'
    AlternateContent += '<td><button id="0test5" type="button" class="btn btn-lg btn-warning">5</button></td>'
    AlternateContent += '<td><button id="0test6" type="button" class="btn btn-lg btn-danger">6</button></td>'
    AlternateContent += '</tr>'
    AlternateContent += '<tr>'
    AlternateContent += '<td><button id="0test7" type="button" class="btn btn-lg btn-success">7</button></td>'
    AlternateContent += '<td><button id="0test8" type="button" class="btn btn-lg btn-danger">8</button></td>'
    AlternateContent += '<td><button id="0test9" type="button" class="btn btn-lg btn-primary">9</button></td>'
    AlternateContent += '</tr>'
    AlternateContent += '</table>'

    $('#MainPage').html(AlternateContent);

    $('#0test5').on('click', AltLog2);
    $('#0test1').on('click', AltLog1);
    $('#0test2').on('click', AltLog1);
    $('#0test3').on('click', AltLog1);
    $('#0test4').on('click', AltLog1);
    $('#0test6').on('click', AltLog1);
    $('#0test7').on('click', AltLog1);
    $('#0test8').on('click', AltLog1);
    $('#0test9').on('click', AltLog1);
}

function AltLog(){
    $('#MainPage').html('');
    var AlternateContent = '';

    AlternateContent += '<table>'
    AlternateContent += '<thead>'
    AlternateContent += '</thead>'
    AlternateContent += '<tbody>'
    AlternateContent += '<tr>'
    AlternateContent += '<td><button id="1test1" type="button" class="btn btn-lg btn-primary">1</button></td>'
    AlternateContent += '<td><button id="1test2" type="button" class="btn btn-lg btn-primary">2</button></td>'
    AlternateContent += '<td><button id="1test3" type="button" class="btn btn-lg btn-primary">3</button></td>'
    AlternateContent += '</tr>'
    AlternateContent += '<tr>'
    AlternateContent += '<td><button id="1test4" type="button" class="btn btn-lg btn-primary">4</button></td>'
    AlternateContent += '<td><button id="1test5" type="button" class="btn btn-lg btn-primary">5</button></td>'
    AlternateContent += '<td><button id="1test6" type="button" class="btn btn-lg btn-primary">6</button></td>'
    AlternateContent += '</tr>'
    AlternateContent += '<tr>'
    AlternateContent += '<td><button id="1test7" type="button" class="btn btn-lg btn-primary">7</button></td>'
    AlternateContent += '<td><button id="1test8" type="button" class="btn btn-lg btn-primary">8</button></td>'
    AlternateContent += '<td><button id="1test9" type="button" class="btn btn-lg btn-primary">9</button></td>'
    AlternateContent += '</tr>'
    AlternateContent += '</table>'

    $('#MainPage').html(AlternateContent);

    $('#1test5').on('click', AltLog2);
    $('#1test1').on('click', AltLog1);
    $('#1test2').on('click', AltLog1);
    $('#1test3').on('click', AltLog1);
    $('#1test4').on('click', AltLog1);
    $('#1test6').on('click', AltLog1);
    $('#1test7').on('click', AltLog1);
    $('#1test8').on('click', AltLog1);
    $('#1test9').on('click', AltLog1);
}

function AltLog2(){
    $('#MainPage').html('');
    var AlternateContent = '';
    AlternateContent += '<table>'
    AlternateContent += '<thead>'
    AlternateContent += '</thead>'
    AlternateContent += '<tbody>'
    AlternateContent += '<tr>'
    AlternateContent += '<td><button id="2test1" type="button" class="btn btn-lg btn-warning">1</button></td>'
    AlternateContent += '<td><button id="2test2" type="button" class="btn btn-lg btn-warning">2</button></td>'
    AlternateContent += '<td><button id="2test3" type="button" class="btn btn-lg btn-warning">3</button></td>'
    AlternateContent += '</tr>'
    AlternateContent += '<tr>'
    AlternateContent += '<td><button id="2test4" type="button" class="btn btn-lg btn-warning">4</button></td>'
    AlternateContent += '<td><button id="2test5" type="button" class="btn btn-lg btn-warning">5</button></td>'
    AlternateContent += '<td><button id="2test6" type="button" class="btn btn-lg btn-warning">6</button></td>'
    AlternateContent += '</tr>'
    AlternateContent += '<tr>'
    AlternateContent += '<td><button id="2test7" type="button" class="btn btn-lg btn-warning">7</button></td>'
    AlternateContent += '<td><button id="2test8" type="button" class="btn btn-lg btn-warning">8</button></td>'
    AlternateContent += '<td><button id="2test9" type="button" class="btn btn-lg btn-warning">9</button></td>'
    AlternateContent += '</tr>'
    AlternateContent += '</table>'

    $('#MainPage').html(AlternateContent);

    $('#2test4').on('click', AltLog3 );
    $('#2test1').on('click', AltLog1 );
    $('#2test2').on('click', AltLog1 );
    $('#2test3').on('click', AltLog1 );
    $('#2test5').on('click', AltLog1 );
    $('#2test6').on('click', AltLog1 );
    $('#2test7').on('click', AltLog1 );
    $('#2test8').on('click', AltLog1 );
    $('#2test9').on('click', AltLog1 );
}

function AltLog3(){
    $('#MainPage').html('');
    var AlternateContent = '';
    AlternateContent += '<table>'
    AlternateContent += '<thead>'
    AlternateContent += '</thead>'
    AlternateContent += '<tbody>'
    AlternateContent += '<tr>'
    AlternateContent += '<td><button id="3test1" type="button" class="btn btn-lg btn-success">1</button></td>'
    AlternateContent += '<td><button id="3test2" type="button" class="btn btn-lg btn-success">2</button></td>'
    AlternateContent += '<td><button id="3test3" type="button" class="btn btn-lg btn-success">3</button></td>'
    AlternateContent += '</tr>'
    AlternateContent += '<tr>'
    AlternateContent += '<td><button id="3test4" type="button" class="btn btn-lg btn-success">4</button></td>'
    AlternateContent += '<td><button id="3test5" type="button" class="btn btn-lg btn-success">5</button></td>'
    AlternateContent += '<td><button id="3test6" type="button" class="btn btn-lg btn-success">6</button></td>'
    AlternateContent += '</tr>'
    AlternateContent += '<tr>'
    AlternateContent += '<td><button id="3test7" type="button" class="btn btn-lg btn-success">7</button></td>'
    AlternateContent += '<td><button id="3test8" type="button" class="btn btn-lg btn-success">8</button></td>'
    AlternateContent += '<td><button id="3test9" type="button" class="btn btn-lg btn-success">9</button></td>'
    AlternateContent += '</tr>'
    AlternateContent += '</table>'

    $('#MainPage').html(AlternateContent);

    $('#3test5').on('click', AltLog4 );
    $('#3test1').on('click', AltLog1 );
    $('#3test2').on('click', AltLog1 );
    $('#3test3').on('click', AltLog1 );
    $('#3test4').on('click', AltLog1 );
    $('#3test6').on('click', AltLog1 );
    $('#3test7').on('click', AltLog1 );
    $('#3test8').on('click', AltLog1 );
    $('#3test9').on('click', AltLog1 );
}

function AltLog4(){
    $('#MainPage').html('');
    var AlternateContent = '';
    AlternateContent += '<table>'
    AlternateContent += '<thead>'
    AlternateContent += '</thead>'
    AlternateContent += '<tbody>'
    AlternateContent += '<tr>'
    AlternateContent += '<td><button id="4test1" type="button" class="btn btn-lg btn-danger">1</button></td>'
    AlternateContent += '<td><button id="4test2" type="button" class="btn btn-lg btn-danger">2</button></td>'
    AlternateContent += '<td><button id="4test3" type="button" class="btn btn-lg btn-danger">3</button></td>'
    AlternateContent += '</tr>'
    AlternateContent += '<tr>'
    AlternateContent += '<td><button id="4test4" type="button" class="btn btn-lg btn-danger">4</button></td>'
    AlternateContent += '<td><button id="4test5" type="button" class="btn btn-lg btn-danger">5</button></td>'
    AlternateContent += '<td><button id="4test6" type="button" class="btn btn-lg btn-danger">6</button></td>'
    AlternateContent += '</tr>'
    AlternateContent += '<tr>'
    AlternateContent += '<td><button id="4test7" type="button" class="btn btn-lg btn-danger">7</button></td>'
    AlternateContent += '<td><button id="4test8" type="button" class="btn btn-lg btn-danger">8</button></td>'
    AlternateContent += '<td><button id="4test9" type="button" class="btn btn-lg btn-danger">9</button></td>'
    AlternateContent += '</tr>'
    AlternateContent += '</table>'

    $('#MainPage').html(AlternateContent);

    $('#4test6').on('click', AltLog5);
    $('#4test1').on('click', AltLog1);
    $('#4test2').on('click', AltLog1);
    $('#4test3').on('click', AltLog1);
    $('#4test4').on('click', AltLog1);
    $('#4test5').on('click', AltLog1);
    $('#4test7').on('click', AltLog1);
    $('#4test8').on('click', AltLog1);
    $('#4test9').on('click', AltLog1);
}
function AltLog5(){
    $('#MainPage').html('');
    var AlternateContent = '';
    AlternateContent += '<table>'
    AlternateContent += '<thead>'
    AlternateContent += '</thead>'
    AlternateContent += '<tbody>'
    AlternateContent += '<tr>'
    AlternateContent += '<td><button id="5test1" type="button" class="btn btn-lg btn-info">1</button></td>'
    AlternateContent += '<td><button id="5test2" type="button" class="btn btn-lg btn-info">2</button></td>'
    AlternateContent += '<td><button id="5test3" type="button" class="btn btn-lg btn-info">3</button></td>'
    AlternateContent += '</tr>'
    AlternateContent += '<tr>'
    AlternateContent += '<td><button id="5test4" type="button" class="btn btn-lg btn-info">4</button></td>'
    AlternateContent += '<td><button id="5test5" type="button" class="btn btn-lg btn-info">5</button></td>'
    AlternateContent += '<td><button id="5test6" type="button" class="btn btn-lg btn-info">6</button></td>'
    AlternateContent += '</tr>'
    AlternateContent += '<tr>'
    AlternateContent += '<td><button id="5test7" type="button" class="btn btn-lg btn-info">7</button></td>'
    AlternateContent += '<td><button id="5test8" type="button" class="btn btn-lg btn-info">8</button></td>'
    AlternateContent += '<td><button id="5test9" type="button" class="btn btn-lg btn-info">9</button></td>'
    AlternateContent += '</tr>'
    AlternateContent += '</table>'

    $('#MainPage').html(AlternateContent);

    $('#5test8').on('click', AltLog6);
    $('#5test1').on('click', AltLog1);
    $('#5test2').on('click', AltLog1);
    $('#5test3').on('click', AltLog1);
    $('#5test4').on('click', AltLog1);
    $('#5test5').on('click', AltLog1);
    $('#5test6').on('click', AltLog1);
    $('#5test7').on('click', AltLog1);
    $('#5test9').on('click', AltLog1);
}

function AltLog6(){
    $('#MainPage').html('');
    var AlternateContent = '';
    AlternateContent += '<table>'
    AlternateContent += '<thead>'
    AlternateContent += '</thead>'
    AlternateContent += '<tbody>'
    AlternateContent += '<tr>'
    AlternateContent += '<td><button id="6test1" type="button" class="btn btn-lg btn-default">1</button></td>'
    AlternateContent += '<td><button id="6test2" type="button" class="btn btn-lg btn-default">2</button></td>'
    AlternateContent += '<td><button id="6test3" type="button" class="btn btn-lg btn-default">3</button></td>'
    AlternateContent += '</tr>'
    AlternateContent += '<tr>'
    AlternateContent += '<td><button id="6test4" type="button" class="btn btn-lg btn-default">4</button></td>'
    AlternateContent += '<td><button id="6test5" type="button" class="btn btn-lg btn-default">5</button></td>'
    AlternateContent += '<td><button id="6test6" type="button" class="btn btn-lg btn-default">6</button></td>'
    AlternateContent += '</tr>'
    AlternateContent += '<tr>'
    AlternateContent += '<td><button id="6test7" type="button" class="btn btn-lg btn-default">7</button></td>'
    AlternateContent += '<td><button id="6test8" type="button" class="btn btn-lg btn-default">8</button></td>'
    AlternateContent += '<td><button id="6test9" type="button" class="btn btn-lg btn-default">9</button></td>'
    AlternateContent += '</tr>'
    AlternateContent += '</table>'

    $('#MainPage').html(AlternateContent);

    $('#6test8').on('click', PopulateMenu);
    $('#6test1').on('click', AltLog1);
    $('#6test2').on('click', AltLog1);
    $('#6test3').on('click', AltLog1);
    $('#6test4').on('click', AltLog1);
    $('#6test5').on('click', AltLog1);
    $('#6test6').on('click', AltLog1);
    $('#6test7').on('click', AltLog1);
    $('#6test9').on('click', AltLog1);
}


function PopulateMenu(){
    $('#MainPage').html('');
    var popMenu = '';

/*    popMenu += '<nav class="navbar navbar-default" role="navigation">'
    popMenu += '   <div>'
    popMenu += '      <ul class="nav navbar-nav">'
    popMenu += '         <li><a href="#" class="linkaddrecord">Add Record</a></li>'
    popMenu += '         <li><a href="#" class="linkviewrecords">Records</a></li>'
    popMenu += '         <li><a href="#" class="linkaddcar">Add Car</a></li>'
    popMenu += '         <li><a href="#" class="linkviewcars">Cars</a></li>'
    popMenu += '      </ul>'
    popMenu += '   </div>'
    popMenu += '</nav>'*/


    popMenu += '<table class="center">'
    popMenu += '<thead>'
    popMenu += '</thead>'
    popMenu += '<tbody>'
    popMenu += '<tr>'
    popMenu += '<td><a href="#" class="linkaddrecord btn btn-primary btn-sm btn-block"  rel="Add Record" title="Add Record">Add Record</a></td>'
    popMenu += '<td><a href="#" class="linkviewrecords btn btn-primary btn-sm btn-block"  rel="Records" + title="Records">Records</a></td>'
    popMenu += '<td><a href="#" class="linkaddcar btn btn-primary btn-sm btn-block" rel="Add Car" + title="Add Car">Add Car</a></td>'
    popMenu += '<td><a href="#" class="linkviewcars btn btn-primary btn-sm btn-block" rel="Cars" + title="Cars">Cars</a></td>'
    popMenu += '</tr>'
    popMenu += '</tbody>'
    popMenu += '</table>'
    
    $('#Menu').html(popMenu);

    $('#Menu table tbody').on('click','td a.linkaddrecord', NewRecord);

    //View Records Link Click
    $('#Menu table tbody').on('click','td a.linkviewrecords', ViewRecords);

    //Add Car Link Click
    $('#Menu table tbody').on('click','td a.linkaddcar', NewCar)

    //View Cars Link Click
    $('#Menu table tbody').on('click','td a.linkviewcars',ViewCars)
    NewRecord();

}
function StartListeners(){

    console.log('buttons ready')
    //On add user button click
    $('#btnAddRecord').on('click', AddRecord);

    //On add car button Click
    $('#btnAddCar').on('click', AddCar);

    //On delete button click
    $('#MainPage table').on('click','td a.linkdeleterecords', DeleteRecords);

    //On delete car button click
    $('#MainPage table').on('click','td a.linkdeletecar', DeleteCar)

    //On click of stats
    $('#MainPage table').on('click','td a.linkcarstats',CarStats);
    //On click of filter button
    //$('#btnFilterDates').on('click', FilterDates)
    
}

function SelectCar(){
    var selCar = '';

    $.getJSON('/server/cars', function( data ){
        selCar += '<select>'
        selCar += '<option value = "Honda Odyssey">Honda Odyssey</option>'
        selCar += '<option value = "Mercedes Benz">Mercedes Benz</option>'
        $.each(data, function(){
        selCar += '<option value = "'+this.make+ ' ' + this.model+'">'+this.year+ ' '+this.make+ ' ' + this.model+'</option>'
        })
        selCar += '</select>'
        $('#MainPage').html(selCar);
        StartListeners();
    })
}

function CarStats(event){

    var statString = '';
    var totalMileage = 0;
    var totalGallons = 0;
    var totalDollars = 0;
    var index = 0;
    var carReference;

    event.preventDefault();
    carReference = $(this).attr('rel');
    $.getJSON('/server/records', function( data ) {
        //carData = data;
        $.each(data, function(){
            if( carReference === this.plate) {
                totalMileage += parseFloat(this.tripmileage);
                totalGallons += parseFloat(this.gallons);
                totalDollars += parseFloat(this.cost);
                index ++;
            }
        })
        statString += 'Total Records : ' + index +'\n';
        statString += 'Total Mileage : ' + totalMileage +'\n';
        statString += 'Total Gallons : ' + totalGallons +'\n';
        statString += 'Total Dollars : ' + totalDollars +'\n';
        statString += 'Estimated MPG : ' + (totalMileage/totalGallons).toFixed(2) +'\n';
        statString += 'Average Trip : ' + (totalMileage/index).toFixed(2) +'\n';
        statString += 'Average Fillup : ' + (totalDollars/index).toFixed(2) +'\n';

    alert(statString);
    });


}


function ViewCars(){
    //View Records var
    var viewContent = '';
    $('#MainPage').html('');

    //JQuery Ajax Call for JSON
    $.getJSON('/server/cars', function( data ) {
        //userCars = data;
        viewContent += '<table id="carsTable" class="tablesorter">'
        viewContent += '<thead>'
        viewContent += '<th>Make</th>'
        viewContent += '<th>Model</th>'
        viewContent += '<th>Year</th>'
        viewContent += '<th>License Plate #</th>'
        viewContent += '<th>Type of Gas</th>'
        viewContent += '<th>Stats</th>'
        viewContent += '<th>Delete?</th>'
        viewContent += '</thead>'
        viewContent += '<tbody>'
        $.each(data, function(){
        viewContent += '<tr>'
        viewContent += '<td class ="center">'+this.make+'</td>';
        viewContent += '<td class ="center">'+this.model+'</td>';
        viewContent += '<td class ="center">'+this.year+'</td>';
        viewContent += '<td class ="center">'+this.plate+'</td>';
        viewContent += '<td class ="center">'+this.gastype+'</td>';
        viewContent += '<td class ="center"><a href=# class="linkcarstats" rel="' + this.plate+'">view</a></td>';
        viewContent += '<td class ="center"><a href=# class="linkdeletecar" rel="' + this._id +'">delete</a></td>';
        viewContent += '</tr>'
        });
        viewContent += '</tbody>'
        viewContent += '</table>'
        $('#MainPage').html(viewContent);
        $('#MainHeader').html('');
        $("#carsTable").tablesorter( {sortList: [[0,0]]} ); 
        StartListeners();
    });
}

function NewCar(){

    var addCarContent = '';


    $('#MainPage').html('');

    addCarContent += '<h3>Add Car</h3>'
    addCarContent += '<form class="form-horizontal" role="form">'
    addCarContent += '<table>'
    addCarContent += '<thead>'
    addCarContent += '</thead>'
    addCarContent += '<tbody>'
    addCarContent += '<tr>'
    addCarContent += '<td><label class="control-label">Make</label></td>'
    addCarContent += '<td>'    
    addCarContent += '<input class= "form-control" id= "inputCarMake" type= "text" placeholder= "Make"></input>'
    addCarContent += '</td>'
    addCarContent += '</tr>'
    addCarContent += '<td><label class="control-label">Model</label></td>'
    addCarContent += '<td>'    
    addCarContent += '<input class= "form-control" id= "inputCarModel" type= "text" placeholder= "Model"></input>'
    addCarContent += '</td>'
    addCarContent += '</tr>'
    addCarContent += '<tr>'
    addCarContent += '<td><label class="control-label">Year</label></td>'
    addCarContent += '<td>'
    addCarContent += '<input class= "form-control" id= "inputCarYear" type= "number" placeholder= "Year"></input>'
    addCarContent += '</td>'
    addCarContent += '</tr>'
    addCarContent += '<tr>'
    addCarContent += '<td><label class="control-label">License Plate &nbsp;</label></td>'
    addCarContent += '<td>'
    addCarContent += '<input class= "form-control" id= "inputCarLicense" type= "text" placeholder= "License Plate"></input>'
    addCarContent += '</td>'
    addCarContent += '</tr>'
    addCarContent += '<tr>'
    addCarContent += '<td><label class="control-label">Type of Gas</label></td>'
    addCarContent += '<td>'
    addCarContent += '<select class="form-control" id="inputCarGasType">'
    addCarContent += '<option value = "Unleaded">Unleaded</option>'
    addCarContent += '<option value = "Plus">Plus</option>'
    addCarContent += '<option value = "Premium">Premium</option>'
    addCarContent += '</select>'
    addCarContent += '</td>'
    addCarContent += '</tr>'
    addCarContent += '<tr>'
    addCarContent += '<td><button class="btn btn-primary btn-sm" type="submit" id="btnAddCar"> Submit </button></td>'
    addCarContent += '</tr>'

    addCarContent += '</tbody>'
    addCarContent += '</table>'
    addCarContent += '</form>'


    $('#MainPage').html(addCarContent);
    $('#MainHeader').html('');

    StartListeners();

}

function DeleteCar(event){
    console.log('Delete Attempted')
    event.preventDefault();

    var confirmation = confirm('Are you sure you want to delete this car?');

    if (confirmation === true) {
        $.ajax({
            type: 'DELETE',
            url: '/server/deletecar/' + $(this).attr('rel')
        }).done(function( response ) {
            if (response.msg === '') {

            }
            else{
                alert('Error: ' + response.msg);
            }

            ViewCars();
        });
    }
    else{
        return false;
    }
};

function AddCar(event){
    event.preventDefault();

    var errorCount = 0;

        //check if all fields are blank
    $('#MainPage table input').each(function(index, val) {
        if($(this).val() === '') { errorCount++; }
    });

    if(errorCount === 0){
        //if it is compile into one object
        var newCars = {
            'make': $('#MainPage table input#inputCarMake').val(),
            'model': $('#MainPage table input#inputCarModel').val(),
            'year': $('#MainPage table input#inputCarYear').val(),
            'plate': $('#MainPage table input#inputCarLicense').val(),
            'gastype': $('#MainPage table select#inputCarGasType').val(),
        };
        //use ajax to post
        $.ajax({
            type: 'POST',
            data: newCars,
            url: '/server/addcar',
            dataType: 'JSON'
        }).done(function( response ){
            //Check for successful blank response
            if (response.msg === '') {

                $('#MainPage table input').val('')
                //Clear form inputs
                ViewCars();

            }
            else {
                alert('ERROR: ' + response.msg);
            }
        });
    }
    else{
        alert('Please fill in all fields');
        return false;
    }
};

function AddRecord(event){
    console.log('AAAAAAAAAAAA');
    event.preventDefault();

    var errorCount = 0;
    var errorMessage = '';
    var emptyErr = 0;
    var priceErr = 0;
    var tripMerr = 0;
    var totalMerr = 0;
    var gallonsErr = 0;
    var costErr = 0;
    var monthErr = 0;
    var dayErr = 0;
    var yearErr = 0;
    var bigPriceErr = 0;
    var bigTripErr = 0;

    //check if all fields are blank
    $('#MainPage table input').each(function(index, val) {
        if($(this).val() === '') { errorCount++; emptyErr++;}
    });
    //check if price is a number
    if($.isNumeric($('#MainPage table input#inputPrice').val()) === false) { errorCount++; priceErr++}
    //check if Trip Mileage is a number
    if($.isNumeric($('#MainPage table input#inputTripMileage').val()) === false) { errorCount++; tripMerr++}
    //check if Total Mileage is a number
    if($.isNumeric($('#MainPage table input#inputTotalMileage').val()) === false) { errorCount++; totalMerr++}
    //check if Gallons is a number
    if($.isNumeric($('#MainPage table input#inputGallons').val()) === false) { errorCount++; gallonsErr++}
    //check if Cost is a number
    if($.isNumeric($('#MainPage table input#inputCost').val()) === false) { errorCount++; costErr++}
    //check if month is a number
    if($.isNumeric($('#MainPage table input#inputMonth').val()) === false) { errorCount++; monthErr++}
    //check if day is a number
    if($.isNumeric($('#MainPage table input#inputDay').val()) === false) { errorCount++; dayErr++}
    //check if year is a number
    if($.isNumeric($('#MainPage table input#inputYear').val()) === false) { errorCount++; yearErr++}
    //check if price is huge
    if($('#MainPage table input#inputPrice').val() > 100) { errorCount++; bigPriceErr++}    
    //check if trip Mileage is huge
    if($('#MainPage table input#inputTripMileage').val() > 1000) { errorCount++; bigTripErr++}    
    //Check and make sure error Count's still at zero
    if(errorCount === 0) {

        var carArray = $('#MainPage table select#inputCar').val().split('///');
        var carName = carArray[0];
        var carPlate = carArray[1];

        //if it is compile into one object
        var newRec = {
            'date': $('#MainPage table input#inputMonth').val() + '/'+ $('#MainPage table input#inputDay').val() +'/' +$('#MainPage table input#inputYear').val() ,
            'car': carName,
            'station': $('#MainPage table input#inputStation').val(),
            'gastype': $('#MainPage table select#inputType').val(),
            'price': $('#MainPage table input#inputPrice').val(),
            'tripmileage': $('#MainPage table input#inputTripMileage').val(),
            'totalmileage': $('#MainPage table input#inputTotalMileage').val(),
            'gallons': $('#MainPage table input#inputGallons').val(),
            'cost': $('#MainPage table input#inputCost').val(),
            'plate': carPlate
        };

        //use ajax to post
        $.ajax({
            type: 'POST',
            data: newRec,
            url: '/server/addrecord',
            dataType: 'JSON'
        }).done(function( response ){
            //Check for successful blank response
            if (response.msg === '') {

                $('#MainPage table input').val('')
                //Clear form inputs
                ViewRecords();
                StartListeners();

            }
            else {
                alert('ERROR: ' + response.msg);
            }
        });
    }
    else{
        //if error count >1
        if (emptyErr != 0) {errorMessage = errorMessage + 'Please fill in all fields.\n'}
        if (priceErr != 0) {errorMessage = errorMessage + 'Price should be a number.\n' }
        if (tripMerr != 0) {errorMessage = errorMessage + 'Trip Mileage should be a number.\n' }
        if (totalMerr != 0) {errorMessage = errorMessage + 'Total Mileage should be a number.\n' }
        if (gallonsErr != 0) {errorMessage = errorMessage + 'Gallons should be a number.\n' }
        if (costErr != 0) {errorMessage = errorMessage + 'Cost should be a number.\n' }
        if (monthErr != 0) {errorMessage = errorMessage + 'Month should be a number.\n' }
        if (dayErr != 0) {errorMessage = errorMessage + 'Day should be a number.\n' }
        if (yearErr != 0) {errorMessage = errorMessage + 'Year should be a number.\n' }
        if (bigPriceErr != 0) {errorMessage = errorMessage + 'Price seems too big.\n' }
        if (bigTripErr != 0) {errorMessage = errorMessage + "I don't think your car is that fuel efficient"}
 //       errorMessage = 'Please fill in all fields'
        alert(errorMessage);
        return false;
    }
};

//fill page with data
function NewRecord(){
    //Empty content string
    console.log('new record');
    var addContent = '';
    var today = new Date();
    $('#MainPage').html('');

    $.getJSON('/server/cars', function( data ){
        addContent += '<h3>Add Record</h3>'
        addContent += '<form>'
        addContent += '<table>'
        addContent += '<thead>'
        addContent += '</thead>'
        addContent += '<tbody>'
        addContent += '<tr>'
        addContent += '<td><label class="control-label">Date</label></td>'
        addContent += '<td>'
        addContent += '<input class="date" id="inputMonth" type="number" placeholder="mm" min="1" max="12"></input> /'
        addContent += '<input class="date" id="inputDay" type="number" placeholder="dd" min="1" max="31"></input> /'
        addContent += '<input class="date" id="inputYear" type="number" placeholder="yyyy" min="2014" max="2100"></input>'
        addContent += '</td>'
        addContent += '</tr>'
        addContent += '<tr>'
        addContent += '<td><label class="control-label">Car</label></td>'
        addContent += '<td>'
        addContent += '<select class="form-control" id= "inputCar">'
        $.each(data, function(){
        addContent += '<option value = "'+this.make+ ' ' + this.model+'///'+this.plate+'">'+this.year+ ' '+this.make+ ' ' + this.model+'</option>'   
        })
        addContent += '</select>'
        addContent += '</td>'
        addContent += '</tr>'
        addContent += '<tr>'
        addContent += '<td><label class="control-label">Gas Station</label></td>'
        addContent += '<td><input class="form-control" id="inputStation" type="text" placeholder="Gas Station"> </input></td>';
        addContent += '</tr>'
        addContent += '<tr>'
        addContent += '<td><label class="control-label">Type of Gas</label></td>';
        addContent += '<td>'
        addContent += '<select class="form-control" id="inputType">'
        addContent += '<option value = "Unleaded">Unleaded</option>'
        addContent += '<option value = "Plus">Plus</option>'
        addContent += '<option value = "Premium">Premium</option>'
        addContent += '</select>'
        addContent += '</td>'
        addContent += '</tr>'
        addContent += '<tr>'
        addContent += '<td><label class="control-label">Price</label></td>'
        addContent += '<td><input class="form-control" id="inputPrice" type = "number" placeholder="Price"> </input></td>'
        addContent += '</tr>'
        addContent += '<tr>'
        addContent += '<td><label class="control-label">Trip Mileage</label></td>'
        addContent += '<td><input class="form-control" id="inputTripMileage" type="number" placeholder="Trip Mileage"> </input></td>';
        addContent += '</tr>'
        addContent += '<tr>'
        addContent += '<td><label class="control-label">Total Mileage &nbsp;</label></td>'
        addContent += '<td><input class="form-control" id="inputTotalMileage" type="number" placeholder="Total Mileage"> </input></td>';
        addContent += '</tr>'
        addContent += '<tr>'
        addContent += '<td><label class="control-label">Gallons</label></td>'
        addContent += '<td><input class="form-control" id="inputGallons" type="number" placeholder="# of Gallons"> </input></td>';
        addContent += '</tr>'
        addContent += '<tr>'
        addContent += '<td><label class="control-label">Total Cost</label></td>'
        addContent += '<td><input class="form-control" id="inputCost" type="number" placeholder="Total Cost"> </input></td>';
        addContent += '</tr>'
        addContent += '<tr>'
        addContent += '<td><button class="btn btn-primary btn-sm" type="submit" id="btnAddRecord"> Submit </button></td>'
        addContent += '</tr>'
        addContent += '</tbody>'
        addContent += '</table>'
        addContent += '</form>'

        $('#MainPage').html(addContent);
        $('#MainHeader').html('');
        $('#MainPage table input#inputYear').val(today.getFullYear());
        $('#MainPage table input#inputMonth').val(today.getMonth());
        $('#MainPage table input#inputDay').val(today.getDate());
        StartListeners();
    });

}


function GetRecordData(){
    var viewContent = '';
    $('#MainPage').html('');
    $.getJSON('/server/records', function( data ) {
        //userGasRecords = data;
        //viewContent += '<!--RecordsTable-->'
        viewContent += '<table id="recordsTable" class="tablesorter">'
        viewContent += '<thead>'
        viewContent += '<th>Date</th>'
        viewContent += '<th>Car</th>'
        viewContent += '<th>Gas Station</th>'
        viewContent += '<th>Price</th>'
        viewContent += '<th>Type</th>'
        viewContent += '<th>Trip Mileage</th>'
        viewContent += '<th>Total Mileage</th>'
        viewContent += '<th># of Gallons</th>'
        viewContent += '<th>Total Cost</th>'
        viewContent += '<th>Delete?</th>'
        viewContent += '</thead>'
        viewContent += '<tbody>'
        $.each(data, function(){
            if (this.plate === $('#MainHeader select#selectACar').val()) {
                viewContent += '<tr>'
                viewContent += '<td class ="center">'+this.date+'</td>';
                viewContent += '<td class ="center">'+this.car+'</td>';
                viewContent += '<td class ="center">'+this.station+'</td>';
                viewContent += '<td class ="center">'+this.price+'</td>';
                viewContent += '<td class ="center">'+this.gastype+'</td>';
                viewContent += '<td class ="center">'+this.tripmileage+'</td>';
                viewContent += '<td class ="center">'+this.totalmileage+'</td>';
                viewContent += '<td class ="center">'+this.gallons+'</td>';
                viewContent += '<td class ="center">'+this.cost+'</td>';
                viewContent += '<td class ="center"><a href=# class="linkdeleterecords" rel="' + this._id +'">delete</a></td>';
                viewContent += '</tr>'
            }
        });
        viewContent += '</tbody>'
        viewContent += '</table>'
        $('#MainPage').html(viewContent);
        $("#recordsTable").tablesorter( {sortList: [[0,1]]} ); 
        StartListeners();
    });
}

function ViewRecords(){
    var selectCarContent = '';
    $('#MainHeader').html('');
    //JQuery Ajax Call for JSON
    $.getJSON('/server/cars', function( data ) {
        //theCars = data;
        selectCarContent += '<select id="selectACar">'
        $.each(data, function(){
        selectCarContent += '<option value = "'+this.plate+'">'+this.year+ ' '+this.make+ ' ' + this.model+'</option>'   
        });
        selectCarContent += '</select>'
/*       selectCarContent += '&nbsp;&nbsp;Date Range '
        selectCarContent += '<input id="inputFromDate" type="text" placeholder="mm/dd/yyy"></input> '
        selectCarContent += ' to '
        selectCarContent += '<input id="inputToDate" type="text" placeholder="mm/dd/yyyy"></input>'
        selectCarContent += '<button type="submit" id="btnFilterDates"> Filter </button>'*/
        
        $('#MainHeader').html(selectCarContent);
            //On Change of Select a Car
    $('#MainHeader select#selectACar').on('change',GetRecordData);
    });
    //JQuery Ajax Call for JSON
  //  alert($('#MainHeader select#selectCarContent').val());

    GetRecordData();
    
}

function DeleteRecords(event){
    console.log('Delete Attempted')
    event.preventDefault();

    var confirmation = confirm('Are you sure you want to delete this record?');

    if (confirmation === true) {
        $.ajax({
            type: 'DELETE',
            url: '/server/deleterecord/' + $(this).attr('rel')
        }).done(function( response ) {
            if (response.msg === '') {

            }
            else{
                alert('Error: ' + response.msg);
            }

            ViewRecords();
        });
    }
    else{
        return false;
    }
};

/*
// Userlist data array for filling in info box
var userListData = [];

// DOM Ready =============================================================
$(document).ready(function() {

    // Populate the user table on initial page load
    populateTable();

});

// Functions =============================================================

// Fill table with data
function populateTable() {

    // Empty content string
    var tableContent = '';

    // jQuery AJAX call for JSON
    $.getJSON( '/users/userlist', function( data ) {

        // For each item in our JSON, add a table row and cells to the content string
        $.each(data, function(){
            tableContent += '<tr>';
            tableContent += '<td><a href="#" class="linkshowuser" rel="' + this.username + '" title="Show Details">' + this.username + '</a></td>';
            tableContent += '<td>' + this.email + '</td>';
            tableContent += '<td><a href="#" class="linkdeleteuser" rel="' + this._id + '">delete</a></td>';
            tableContent += '</tr>';
        });

        // Inject the whole content string into our existing HTML table
        $('#userList table tbody').html(tableContent);
    });
};
*/