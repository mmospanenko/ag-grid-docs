var columnDefs = [
    {
        headerName: 'Athlete Details',
        children: [
            {headerName: 'Athlete', field: 'athlete', width: 150, filter: 'text'},
            {headerName: 'Age', field: 'age', width: 90, filter: 'number'},
            {headerName: 'Country', field: 'country', width: 120}
        ]
    },
    {
        headerName: 'Sports Results',
        children: [
            {headerName: 'Sport', field: 'sport', width: 110},
            {headerName: 'Total', columnGroupShow: 'closed', field: 'total', width: 100, filter: 'number'},
            {headerName: 'Gold', columnGroupShow: 'open', field: 'gold', width: 100, filter: 'number'},
            {headerName: 'Silver', columnGroupShow: 'open', field: 'silver', width: 100, filter: 'number'},
            {headerName: 'Bronze', columnGroupShow: 'open', field: 'bronze', width: 100, filter: 'number'}
        ]
    }
];

var gridOptions = {
    debug: true,
    columnDefs: columnDefs,
    rowData: null,
    enableSorting: true,
    enableFilter: true,
    enableColResize: true
};

// setup the grid after the page has finished loading
document.addEventListener('DOMContentLoaded', function() {
    var gridDiv = document.querySelector('#myGrid');
    new agGrid.Grid(gridDiv, gridOptions);

    agGrid.simpleHttpRequest({url: 'https://raw.githubusercontent.com/ag-grid/ag-grid-docs/master/src/olympicWinnersSmall.json'}).then(function(data) {
        gridOptions.api.setRowData(data);
    });
});