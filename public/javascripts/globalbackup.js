var userGasRecords = [];

$(function(){
   // DOM Ready - do your stuff 
       console.log('ready');
//On Start show Add Record
    NewRecord();
//    SelectCar();
});

//Functions-----------------------==========------------


function StartListeners(){
        //Add Record link click
    $('#Menu table tbody').on('click','td a.linkaddrecord', NewRecord);

    //On add user button click
    $('#btnAddRecord').on('click', AddRecord);

    //On add car button Click
    $('#btnAddCar').on('click', AddCar);

    //On delete button click
    $('#MainPage table').on('click','td a.linkdeleterecords', DeleteRecords);

    //On delete car button click
    $('#MainPage table').on('click','td a.linkdeletecar', DeleteCar)

    //View Records Link Click
    $('#Menu table tbody').on('click','td a.linkviewrecords', ViewRecords);

    //Add Car Link Click
    $('#Menu table tbody').on('click','td a.linkaddcar', NewCar)

    //View Cars Link Click
    $('#Menu table tbody').on('click','td a.linkviewcars',ViewCars)

    
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


function ViewCars(){
    //View Records var
    var viewContent = '';

    //JQuery Ajax Call for JSON
    $.getJSON('/server/cars', function( data ) {
        userCars = data;
        viewContent += '<!--RecordsTable-->'
        viewContent += '<table class="center2">'
        viewContent += '<thead>'
        viewContent += '<th>Make</th>'
        viewContent += '<th>Model</th>'
        viewContent += '<th>Year</th>'
        viewContent += '<th>Type of Gas</th>'
        viewContent += '<th>License Plate #</th>'
        viewContent += '<th>Delete?</th>'
        $.each(data, function(){
        viewContent += '<tr>'
        viewContent += '<td class ="center">'+this.make+'</td>';
        viewContent += '<td class ="center">'+this.model+'</td>';
        viewContent += '<td class ="center">'+this.year+'</td>';
        viewContent += '<td class ="center">'+this.plate+'</td>';
        viewContent += '<td class ="center">'+this.gastype+'</td>';
        viewContent += '<td class ="center"><a href=# class="linkdeletecar" rel="' + this._id +'">delete</a></td>';
        viewContent += '</tr>'
        });
        $('#MainPage').html(viewContent);
        StartListeners();
    })
}

function NewCar(){

    var addCarContent = '';

    addCarContent += '<table>'
    addCarContent += '<thead> <b>Add Car'
    addCarContent += '<tr>'
    addCarContent += '<td>Make</td>'
    addCarContent += '<td>'    
    addCarContent += '<input class= "general" id= "inputCarMake" type= "text" placeholder= "Make"></input>'
    addCarContent += '</td>'
    addCarContent += '</tr>'
    addCarContent += '<td>Model</td>'
    addCarContent += '<td>'    
    addCarContent += '<input class= "general" id= "inputCarModel" type= "text" placeholder= "Model"></input>'
    addCarContent += '</td>'
    addCarContent += '</tr>'
    addCarContent += '<tr>'
    addCarContent += '<td>Year</td>'
    addCarContent += '<td>'
    addCarContent += '<input class= "general" id= "inputCarYear" type= "text" placeholder= "Year"></input>'
    addCarContent += '</td>'
    addCarContent += '</tr>'
    addCarContent += '<tr>'
    addCarContent += '<td>License Plate #</td>'
    addCarContent += '<td>'
    addCarContent += '<input class= "general" id= "inputCarLicense" type= "text" placeholder= "License Plate"></input>'
    addCarContent += '</td>'
    addCarContent += '</tr>'
    addCarContent += '<tr>'
    addCarContent += '<td>Type of Gas</td>'
    addCarContent += '<td>'
    addCarContent += '<select id="inputCarGasType">'
    addCarContent += '<option value = "Unleaded">Unleaded</option>'
    addCarContent += '<option value = "Plus">Plus</option>'
    addCarContent += '<option value = "Premium">Premium</option>'
    addCarContent += '</select>'
    addCarContent += '</td>'
    addCarContent += '</tr>'
    addCarContent += '<tr>'
    addCarContent += '<td><button type="submit" id="btnAddCar"> Submit </button></td>'
    addCarContent += '</tr>'


    $('#MainPage').html(addCarContent);
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
    var addContent = '';
    $.getJSON('/server/cars', function( data ){
        addContent += '<table>'
        addContent += '<thead> <b>Add Record'
        addContent += '<tr>'
        addContent += '<td>Date</td>'
        addContent += '<td>'
        addContent += '<input class="date" id="inputMonth" type="number" placeholder="mm" min="1" max="12"></input> / '
        addContent += '<input class="date" id="inputDay" type="number" placeholder="dd" min="1" max="31"></input> / '
        addContent += '<input class="date" id="inputYear" type="number" placeholder="yyyy" min="2014" max="2100"></input>'
        addContent += '</td>'
        addContent += '</tr>'
        addContent += '<tr>'
        addContent += '<td>Car</td>'
        addContent += '<td>'
        addContent += '<select id= "inputCar">'
        $.each(data, function(){
        addContent += '<option value = "'+this.make+ ' ' + this.model+'///'+this.plate+'">'+this.year+ ' '+this.make+ ' ' + this.model+'</option>'   
        })
        addContent += '</select>'
        addContent += '</td>'
        addContent += '</tr>'
        addContent += '<tr>'
        addContent += '<td>Gas Station</td>'
        addContent += '<td><input class="general" id="inputStation" type="text" placeholder="Gas Station"> </input></td>';
        addContent += '</tr>'
        addContent += '<tr>'
        addContent += '<td>Type:</td>';
        addContent += '<td>'
        addContent += '<select id="inputType">'
        addContent += '<option value = "Unleaded">Unleaded</option>'
        addContent += '<option value = "Plus">Plus</option>'
        addContent += '<option value = "Premium">Premium</option>'
        addContent += '</select>'
        addContent += '</td>'
        addContent += '</tr>'
        addContent += '<tr>'
        addContent += '<td>Price</td>'
        addContent += '<td><input class="general" id="inputPrice" type = "text" placeholder="Price"> </input></td>'
        addContent += '</tr>'
        addContent += '<tr>'
        addContent += '<td>Trip Mileage</td>'
        addContent += '<td><input class="general" id="inputTripMileage" type="text" placeholder="Trip Mileage"> </input></td>';
        addContent += '</tr>'
        addContent += '<tr>'
        addContent += '<td>Total Mileage</td>'
        addContent += '<td><input class="general" id="inputTotalMileage" type="text" placeholder="Total Mileage"> </input></td>';
        addContent += '</tr>'
        addContent += '<tr>'
        addContent += '<td># of Gallons</td>'
        addContent += '<td><input class="general" id="inputGallons" type="text" placeholder="# of Gallons"> </input></td>';
        addContent += '</tr>'
        addContent += '<tr>'
        addContent += '<td>Total Cost</td>'
        addContent += '<td><input class="general" id="inputCost" type="text" placeholder="Total Cost"> </input></td>';
        addContent += '</tr>'
        addContent += '<tr>'
        addContent += '<td><button type="submit" id="btnAddRecord"> Submit </button></td>'
        addContent += '</tr>'

        $('#MainPage').html(addContent);
        StartListeners();
    })
}

function GetRecordData(){
    var viewContent = '';

    $.getJSON('/server/records', function( data ) {
        userGasRecords = data;
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
        });
        viewContent += '</tbody>'
        viewContent += '</table>'
        $('#MainPage').html(viewContent);
        $("#recordsTable").tablesorter( {sortList: [[0,1]]} ); 
        StartListeners();
    })
}

function ViewRecords(){
    var selectCarContent = '';

    //JQuery Ajax Call for JSON
    $.getJSON('/server/cars', function( data ) {
        theCars = data;
        selectCarContent += '<select id="selectACar">'
        $.each(data, function(){
        selectCarContent += '<option value = "'+this.plate+'">'+this.year+ ' '+this.make+ ' ' + this.model+'</option>'   
        });
        selectCarContent += '</select>'
        selectCarContent += '<button type="submit" id="btnSelectCar"> Select </button>'
        $('#MainHeader').html(selectCarContent);
    })
    //JQuery Ajax Call for JSON

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