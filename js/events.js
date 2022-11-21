/*********************************************************/
/*******         events and event listener         *******/
/*********************************************************/
    // trigger button eventlistener
        // output( "\ndrink:\n" );                                                     // turn on to test output
        Object.entries( gui.buttons.drink ).forEach( ( [ key, value ] ) => {
            // output( "\t" + key, value );                                            // turn on to test output
            value.addEventListener( "click", function() {
                // output( this, key, value );                                         // turn on to test output
                actOnClick( key, "drink" );                                                   
            } );
        } );
        // output( "\nFlavours:\n" );                                                  // turn on to test output
        Object.entries( gui.buttons.flavour ).forEach( ( [ key, value ] ) => {
            // output( "\t" + key, value );                                            // turn on to test output
            value.addEventListener( "click", function() {
                // output( this, key, value );                                         // turn on to test output
                actOnClick( key, "flavour" );
            } );
        } );