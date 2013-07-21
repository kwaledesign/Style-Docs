(function() {

  // handsontable script for performance page
  var data = [
    ["Logo", 112, 1, "branding"],
    ["Lato web font", 488, 2, "headings"],
    ["Droid Sans web font", 58, 2, "body text"],
    ["Bio Pics", 28, "2", "About Us Page Images"],
    ["Header Image", 186, 2, "Header Image for front page"],
    ["Header Image", 122, 3, "Header Image for internal pages"],
    ["jQuery", 33, 2, "Dependency of moment js, used for PE interactions"],
    ["MomentJS", 6.5, 2, "Enables accurate date handling for scheduling functionality"]
  ];
  $("#performanceBudget").handsontable({
    data: data,
    startRows: 6,
    startCols: 8,
    rowHeaders: true,
    colHeaders: ["Asset", "Size (kb)", "Priority", "Application"],
    columnSorting: true,
    columns: [
      {
        type: 'numeric'
      },
      {},
      {},
      {}
    ],
    minSpareRows: 1,
    contextMenu: true

  });

})();
