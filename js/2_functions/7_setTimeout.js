// setTimeout(func|code, delay(ms), arg1, arg2, ...)

function createMsg() {
    let msg = "Hello";
    console.log(msg);
}
setTimeout(createMsg, 1000);


function createMsg2(msg) {
    console.log(msg);
}
setTimeout(createMsg2, 1000, 'Hello2');
// Note that both setTimeout will start at the same time, they are asynchronous and does not block interpreter




// setTimeout can be interrupted. In this case, it will not execute its function, after time is over:
abc = setTimeout(console.log, 1000, 'some msg');
clearTimeout(abc);	// 'some msg' will not be printed



// setTimeout can receive strings-code
setTimeout('alert("Hello-alert")', 1000);

// Can receive this shit as well:
setTimeout(() => alert('Hello'), 1000);

// If no time set => will be executed immediately:
setTimeout(console.log('immediately'))