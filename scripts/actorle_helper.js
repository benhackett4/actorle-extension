"use strict";

function replaceAlphaNumCharsWithX(title) {
    return title.replaceAll(/[a-zA-Z0-9]/g, "X");
}

const body = document.querySelector('body');

let actorle_helper = document.createElement("div");
actorle_helper.id = "actorle-helper";
actorle_helper.classList.add("ui-widget-content");

let title_input = document.createElement("input");
title_input.setAttribute("type", "text");
title_input.setAttribute("style", "width: 100%");

let title_output = document.createElement("div");
title_output.id = "title-output";

title_input.addEventListener("input", e => {
    title_output.textContent = replaceAlphaNumCharsWithX(e.target.value);
});

let clipboard_button = document.createElement("button");
clipboard_button.innerText = '📋';
clipboard_button.addEventListener("click", e => {
    let success_msg = "Copied";
    let fail_msg = "Failed to copy to clipboard";
    navigator.clipboard.writeText(replaceAlphaNumCharsWithX(title_input.value)).then(
        () => {
            title_output.textContent = success_msg;
        },
        () => {
            title_output.textContent = fail_msg;
        }
    );

});

let clipboard_div = document.createElement("div");
clipboard_div.append(clipboard_button);

actorle_helper.append(title_input);
actorle_helper.append(title_output);
actorle_helper.append(clipboard_div);

body.append(actorle_helper);

actorle_helper = $('#actorle-helper');
actorle_helper.draggable();
// For now, the complexities that arise from making the div resizable are not worth it.
//actorle_helper.resizable();





