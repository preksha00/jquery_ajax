$(document).ready(function() {
    // -----------------------
    // Mouse Events
    // -----------------------
    
    // Click Event
    $('#mouseClickBtn').click(function() {
        alert("Mouse Click Event: Button was clicked!");
    });

    // Double Click Event
    $('#mouseHoverBox').dblclick(function() {
        $(this).toggle(); // Toggle visibility on double click
    });

    // Mouse Enter and Mouse Leave Events
    $('#mouseHoverBox').mouseenter(function() {
        $(this).css("background-color", "#28a745");
        $(this).text("Mouse Entered!");
    }).mouseleave(function() {
        $(this).css("background-color", "#ffc107");
        $(this).text("Hover Over Me");
    });

    // Mouse Move Event
    $('#mouseMoveArea').mousemove(function(event) {
        $(this).text(`Mouse X: ${event.pageX}, Mouse Y: ${event.pageY}`);
    }).mouseleave(function() {
        $(this).text("Move Your Mouse Here");
    });

    // -----------------------
    // Keyboard Events
    // -----------------------

    // Key Press Event
    $('#keyboardInput').keypress(function(event) {
        $('#keyPressInfo').text(`Pressed Key: ${event.key}`);
    });

    // Key Down Event
    $('#keyboardInput').keydown(function(event) {
        console.log(`Key Down: ${event.key}`);
    });

    // Key Up Event
    $('#keyboardInput').keyup(function(event) {
        console.log(`Key Up: ${event.key}`);
    });

    // -----------------------
    // Form Events
    // -----------------------

    // Submit Event
    $('#sampleForm').submit(function(event) {
        event.preventDefault(); // Prevent actual form submission
        const username = $('#username').val();
        const password = $('#password').val();
        $('#formMessage').text(`Form Submitted! Username: ${username}, Password: ${password}`);
    });

    // Change Event on Input
    $('#username').change(function() {
        console.log(`Username changed to: ${$(this).val()}`);
    });

    // Focus and Blur Events
    $('#username').focus(function() {
        $(this).css("border-color", "#007bff");
    }).blur(function() {
        $(this).css("border-color", "#ced4da");
    });

    // -----------------------
    // Document/Window Events
    // -----------------------

    // Document Ready Event
    $('#documentReady').text("Document is ready!");

    // Window Resize Event
    $(window).resize(function() {
        $('#windowResize').text(`Window width: ${$(window).width()}px`);
    }).trigger('resize'); // Trigger resize on page load

    // Window Scroll Event
    $(window).scroll(function() {
        console.log("Window is being scrolled.");
    });

    // -----------------------
    // Focus Events
    // -----------------------

    $('#focusInput').focus(function() {
        $('#focusInfo').text("Focus Status: Focused");
        $(this).css("border-color", "#28a745");
    }).blur(function() {
        $('#focusInfo').text("Focus Status: Not Focused");
        $(this).css("border-color", "#ced4da");
    });

    // -----------------------
    // Animation Events
    // -----------------------

    $('#animateBtn').click(function() {
        $('#animateBox').animate({
            width: "300px",
            height: "300px",
            opacity: 0.5
        }, 1000, function() {
            // Animation complete.
            alert("Animation Completed!");
            // Reverse the animation
            $(this).animate({
                width: "100px",
                height: "100px",
                opacity: 1
            }, 1000);
        });
    });

    // -----------------------
    // AJAX Events
    // -----------------------

    $('#ajaxBtn').click(function() {
        $('#ajaxContent').html("<p>Loading...</p>");
        $.ajax({
            url: "https://jsonplaceholder.typicode.com/posts/1",
            method: "GET",
            success: function(data) {
                $('#ajaxContent').html(`
                    <h3>${data.title}</h3>
                    <p>${data.body}</p>
                `);
            },
            error: function() {
                $('#ajaxContent').html("<p>An error occurred while loading data.</p>");
            }
        });
    });

    // -----------------------
    // Custom Events
    // -----------------------

    // Define a custom event
    $('#customEventBox').on('customEvent', function(e, data) {
        $(this).text(`Custom Event Triggered! Data: ${data}`);
        $(this).css("background-color", "#17a2b8");
    });

    // Trigger the custom event
    $('#triggerCustomEvent').click(function() {
        $('#customEventBox').trigger('customEvent', ['Hello World']);
    });

    // Reset custom box on double click
    $('#customEventBox').dblclick(function() {
        $(this).text("Waiting for Custom Event...");
        $(this).css("background-color", "#343a40");
    });
});
