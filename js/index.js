var paused_count =0;
var resumed_count = 0;
var launched_count = 0;
var key="pen";
var value="blue";
    function onLoad() {
        document.addEventListener("deviceready", onDeviceReady, false);
		console.log("device ready");
    }
	
	
    function onDeviceReady() {
		window.localStorage.setItem( key, value );
        var key1="pen";
        var value =window.localStorage.getItem(key);
        alert(value);
    }

    // Handle the pause event
    //
    