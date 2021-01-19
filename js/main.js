$(function () {
    
    $.getJSON("data.json",
        function (data) {

            $.each(data.meetings, function (indexInArray, valueOfElement) { 
                
                var meetingDate = data.meetings[indexInArray].date;
                var meetingDateSplit = meetingDate.split('-');
                var meetingDateNewFormat = meetingDateSplit[1]+'.'+meetingDateSplit[2]+'.'+meetingDateSplit[0]+'.';

                var appendedHTML = '<div class="col-12 col-lg-6 mb-4 column">\
                                <div class="card w-100 h-100 text-center" style="width: 18rem;">\
                                <div class="card-header">\
                                <button type="button" class="close" aria-label="Close">\
                                <span aria-hidden="true">&times;</span>\
                                </button>\
                                <div class="client">'
                                +data.meetings[indexInArray].client+
                                '</div>\
                                <h2>'+data.meetings[indexInArray].title+'</h2>\
                                </div>\
                                <div class="card-body">\
                                <p class="card-text">'+data.meetings[indexInArray].description+'</p>\
                                </div>\
                                <div class="card-footer">'
                                +meetingDateNewFormat+' / '+data.meetings[indexInArray].time.start+ ' - '+data.meetings[indexInArray].time.end+
                                '</div>\
                                </div>';

                $('.cards-container').append(appendedHTML);
            });
        }
    );

    $(document).on('click', '.close', function (e) { 
        e.preventDefault();
        $(this).closest('.column').remove();
    });

});