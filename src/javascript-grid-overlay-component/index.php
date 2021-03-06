<?php
$key = "Overlay Component";
$pageTitle = "JavaScript Overlay Component";
$pageDescription = "Describes how to implement custom overlay components for ag-Grid";
$pageKeyboards = "JavaScript Grid Overlay Component";
$pageGroup = "components";
include '../documentation-main/documentation_header.php';
?>

<h1 class="first-h1" id="overlay-component">Overlay Component</h1>

<p>
    Overlay components allow you to add your own overlays to ag-Grid. Use these when the provided overlay's do not meet
    your requirements.
</p>

<h2 id="loading-overlay-interface">Loading Rows Overlay Interface</h2>

<p>
    Implement this interface to provide a custom overlay when loading rows.
</p>

<snippet>
interface ILoadingOverlayComp {

    // mandatory methods

    // The init(params) method is called on the overlay once. See below for details on the parameters.
    init(params: ILoadingOverlayParams): void;

    // Returns the GUI for this overlay. The GUI can be a) a string of html or b) a DOM element or node.
    getGui(): any;
}
</snippet>

<snippet>
interface IFilterParams {

    // an optional template for the loading rows overlay
    loadingRowsTemplate?: string

    // The grid API
    api: any;
}
</snippet>

<h2 id="no-rows-overlay-interface">No Rows Overlay Interface</h2>

<p>
    Implement this interface to provide a custom overlay when no rows loaded.
</p>

<snippet>
interface INoRowsOverlayComp {

    // mandatory methods

    // The init(params) method is called on the overlay once. See below for details on the parameters.
    init(params: INoRowsOverlayParams): void;

    // Returns the GUI for this overlay. The GUI can be a) a string of html or b) a DOM element or node.
    getGui(): any;
}
</snippet>

<snippet>
interface INoRowsOverlayParams {

    // an optional template for the no rows overlay
    noRowsTemplate?: string

    // The grid API
    api: any;
}
</snippet>


<h1 id="overlay-component-registering">Registering Overlay Components</h1>

<p>
    See the section <a href="../javascript-grid-components/#registering-custom-components">registering custom components</a>
    for details on registering and using custom overlays.
</p>

<h2>Example - Custom Overlay Components</h2>

<p>
    The example below demonstrates how to provide custom overlay components to the grid. Notice the following:
<ul>
    <li><b>Custom Loading Overlay Renderer</b> is supplied by name via <code>gridOptions.loadingOverlayComponent</code>.</li>
    <li><b>Custom No Rows Overlay Renderer</b> is supplied by name via <code>gridOptions.noRowsOverlayComponent</code>.</li>
</ul>

<?= example('Custom Overlay Components', 'custom-overlay-components', 'generated', array('enterprise' => false, 'extras' => array('fontawesome')) ) ?>
</p>

<?php include '../documentation-main/documentation_footer.php';?>