var masterColumnDefs = [
    // group cell renderer needed for expand / collapse icons
    {field: 'name', cellRenderer:'agGroupCellRenderer'},
    {field: 'account'},
    {field: 'calls'},
    {field: 'minutes', valueFormatter: "x.toLocaleString() + 'm'"}
];

var detailColumnDefs = [
    {field: 'callId'},
    {field: 'direction'},
    {field: 'number'},
    {field: 'duration', valueFormatter: "x.toLocaleString() + 's'"},
    {field: 'switchCode'}
];

var detailGridOptions = {
    columnDefs: detailColumnDefs,
    onGridReady: function (params) {
        params.api.sizeColumnsToFit();
    }
};

var masterGridOptions = {
    columnDefs: masterColumnDefs,
    rowData: rowData,
    masterDetail: true,
    detailCellRendererParams: {
        detailGridOptions: detailGridOptions,
        getDetailRowData: function (params) {
            params.successCallback(params.data.callRecords);
        },
        template: function (params) {
            var personName = params.data.name;
            return '<div style="height: 100%; background-color: #EDF6FF; padding: 20px; box-sizing: border-box;">'
                + '  <div style="height: 10%;">Name: ' + personName + '</div>'
                + '  <div ref="eDetailGrid" style="height: 90%;"></div>'
                + '</div>';
        }
    },
    onGridReady: function (params) {
        params.api.forEachNode(function (node) {
            node.setExpanded(node.id === "1");
        });
        params.api.sizeColumnsToFit();
    }
};

// setup the grid after the page has finished loading
document.addEventListener('DOMContentLoaded', function() {
    var gridDiv = document.querySelector('#myGrid');
    new agGrid.Grid(gridDiv, masterGridOptions);
});