$(document).ready(function(){
    $("#cancel-addList").click(function(e) {
        e.preventDefault();
        var $newListInput = $('#newList');
        $("#addList").hide();
        $newListInput.val('');
    });

    $(function () {
      $("#datepicker").datepicker({ 
            autoclose: true, 
            todayHighlight: true
      });
    });

    $('#closemodal').click(function() {
        $('#savemodal').attr('disabled', 'disabled');
    });

    $('#savemodal').click(function() {
        $('#modalAddList').modal('hide');
        $('#savemodal').attr('disabled', 'disabled');
    });

    $(function() {
        $('#list-name').keyup(function() {
            var empty = false;
            if ($('#list-name').val() == '') {
                empty = true;
            }
            if (empty) {
                $('#savemodal').attr('disabled', 'disabled'); 
            } else {
                $('#savemodal').removeAttr('disabled'); 
            }
        });
    });
    $('.nav-pills a').click(function (e) {
        e.preventDefault()
        $(this).tab('show')
    })
});