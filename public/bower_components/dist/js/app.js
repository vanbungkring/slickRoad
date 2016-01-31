$( document ).ready(function() {
  //  var url = window.location.href+'?data=json';
  $('#pbbDataTables').DataTable( {
    iDisplayLength: 50
      // ajax:url,
      // processing: true,
      // serverSide: true,
      // method: 'GET', // Ajax HTTP method
  });
});
