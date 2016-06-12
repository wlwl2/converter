//
//pixel to em converter
//

var defaultSize = document.querySelector(".default-size");
var em = document.querySelector(".em");
var pixels = document.querySelector(".pixels");
var preview = document.querySelector(".preview");

if (defaultSize.value === "") {
  em.disabled = true;
  pixels.disabled = true;
}

defaultSize.addEventListener("input", function(event) {

  if (defaultSize.value === "" || Number(defaultSize.value) <= 0 || isNaN(defaultSize.value)) {
    em.disabled = true;
    em.value = "";
    pixels.disabled = true;
    pixels.value = "";
  } else {
    em.disabled = false;
    pixels.disabled = false;

  // Not sure if fontSize or setAttribute is better. https://developer.mozilla.org/en-US/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information
  // sets maximum value allowed for default font size
  if (Number(defaultSize.value) <= 1000) {
    preview.style.fontSize = defaultSize.value + "px";
  } else {
    alert("the preview won't work above font size 1000px");
    preview.style.fontSize = 0;
  }

  pixels.value = String(Number(em.value)*Number(defaultSize.value));
  em.value = String(Number(pixels.value)/Number(defaultSize.value));

}}, false);

em.addEventListener("input", function() {
    pixels.value = String(Number(em.value)*Number(defaultSize.value));
}, false);

pixels.addEventListener("input", function() {
    em.value = String(Number(pixels.value)/Number(defaultSize.value));
}, false);

//
// Converter Buttons
//

/*Click Events*/
var pixelButton = document.querySelector(".pixel-button img");
var lengthButton = document.querySelector(".length-button img");
var cookingButton = document.querySelector(".cooking-button img");

var pixelButtonTab = document.querySelector(".pixel-button-tab img");
var lengthButtonTab = document.querySelector(".length-button-tab img");
var cookingButtonTab = document.querySelector(".cooking-button-tab img");

var pixelContainer = document.querySelector(".pixel-converter");
var lengthContainer = document.querySelector(".length-converter");
var cookingContainer = document.querySelector(".cooking-converter");

pixelButton.addEventListener("click", function() {
  pixelContainer.className = "pixel-converter";
  lengthContainer.className = "length-converter hidden-section";
  cookingContainer.className = "cooking-converter hidden-section";

  pixelButtonTab.parentElement.className = "pixel-button-tab show-tab";
  lengthButtonTab.parentElement.className = "length-button-tab hide-tab";
  cookingButtonTab.parentElement.className = "cooking-button-tab hide-tab";


  // to open pixel converter even after page refresh
  localStorage.setItem("open-converter","pixel");
});

lengthButton.addEventListener("click", function() {
  lengthContainer.className = "length-converter";
  pixelContainer.className = "pixel-converter hidden-section";
  cookingContainer.className = "cooking-converter hidden-section";

  pixelButtonTab.parentElement.className = "pixel-button-tab hide-tab";
  lengthButtonTab.parentElement.className = "length-button-tab show-tab";
  cookingButtonTab.parentElement.className = "cooking-button-tab hide-tab";

  // to open length converter even after page refresh
  localStorage.setItem("open-converter","length");

});

cookingButton.addEventListener("click", function() {
  cookingContainer.className = "cooking-converter";
  pixelContainer.className = "pixel-converter hidden-section";
  lengthContainer.className = "length-converter hidden-section";

  pixelButtonTab.parentElement.className = "pixel-button-tab hide-tab";
  lengthButtonTab.parentElement.className = "length-button-tab hide-tab";
  cookingButtonTab.parentElement.className = "cooking-button-tab show-tab";

  // to open cooking converter even after page refresh
  localStorage.setItem("open-converter","cooking");

});

// Tab on click

pixelButtonTab.addEventListener("click", function() {
  pixelContainer.className = "pixel-converter";
  lengthContainer.className = "length-converter hidden-section";
  cookingContainer.className = "cooking-converter hidden-section";

  // to open pixel converter even after page refresh
  localStorage.setItem("open-converter","pixel");
});

lengthButtonTab.addEventListener("click", function() {
  lengthContainer.className = "length-converter";
  pixelContainer.className = "pixel-converter hidden-section";
  cookingContainer.className = "cooking-converter hidden-section";

  // to open length converter even after page refresh
  localStorage.setItem("open-converter","length");

});

cookingButtonTab.addEventListener("click", function() {
  cookingContainer.className = "cooking-converter";
  pixelContainer.className = "pixel-converter hidden-section";
  lengthContainer.className = "length-converter hidden-section";

  // to open cooking converter even after page refresh
  localStorage.setItem("open-converter","cooking");

});

/* Open the converter that was selected before page refresh */

var openedConverter = localStorage.getItem("open-converter");
switch (openedConverter) {
  case "pixel":
    pixelContainer.className = "pixel-converter";
    pixelButtonTab.parentElement.className = "pixel-button-tab show-tab";
    break;
  case "length":
    lengthContainer.className = "length-converter";
    lengthButtonTab.parentElement.className = "length-button-tab show-tab";
    break;
  case "cooking":
    cookingContainer.className = "cooking-converter";
    cookingButtonTab.parentElement.className = "cooking-button-tab show-tab";
    break;
  default:
}

/*hover events*/

function noneOpen () { if ((pixelContainer.className !== "pixel-converter")
    && (lengthContainer.className !== "length-converter")
    && (cookingContainer.className !== "cooking-converter")) {
      return true
  }
}

/*pixelButton.addEventListener("mouseover", function(event) {
    pixelButtonTab.parentElement.className = "pixel-button-tab show-tab";
    lengthButtonTab.parentElement.className = "length-button-tab hide-tab";
    cookingButtonTab.parentElement.className = "cooking-button-tab hide-tab";
});
lengthButton.addEventListener("mouseover", function(event) {
    pixelButtonTab.parentElement.className = "pixel-button-tab hide-tab";
    lengthButtonTab.parentElement.className = "length-button-tab show-tab";
    cookingButtonTab.parentElement.className = "cooking-button-tab hide-tab";
});
cookingButton.addEventListener("mouseover", function(event) {
    pixelButtonTab.parentElement.className = "pixel-button-tab hide-tab";
    lengthButtonTab.parentElement.className = "length-button-tab hide-tab";
    cookingButtonTab.parentElement.className = "cooking-button-tab show-tab";
});
pixelButtonTab.addEventListener("mouseover", function(event) {
    pixelButtonTab.parentElement.className = "pixel-button-tab show-tab";
    lengthButtonTab.parentElement.className = "length-button-tab hide-tab";
    cookingButtonTab.parentElement.className = "cooking-button-tab hide-tab";
});
lengthButtonTab.addEventListener("mouseover", function(event) {
    pixelButtonTab.parentElement.className = "pixel-button-tab hide-tab";
    lengthButtonTab.parentElement.className = "length-button-tab show-tab";
    cookingButtonTab.parentElement.className = "cooking-button-tab hide-tab";
});
cookingButtonTab.addEventListener("mouseover", function(event) {
    pixelButtonTab.parentElement.className = "pixel-button-tab hide-tab";
    lengthButtonTab.parentElement.className = "length-button-tab hide-tab";
    cookingButtonTab.parentElement.className = "cooking-button-tab show-tab";
});*/

document.addEventListener("mouseover", function() {
  if(pixelContainer.className === "pixel-converter") {
    lengthButtonTab.parentElement.className = "length-button-tab hide-tab";
    cookingButtonTab.parentElement.className = "cooking-button-tab hide-tab";
  }
  if(lengthContainer.className === "length-converter") {
    pixelButtonTab.parentElement.className = "pixel-button-tab hide-tab";
    cookingButtonTab.parentElement.className = "cooking-button-tab hide-tab";
  }
  if(cookingContainer.className === "cooking-converter") {
    pixelButtonTab.parentElement.className = "pixel-button-tab hide-tab";
    lengthButtonTab.parentElement.className = "length-button-tab hide-tab";
  }
});

pixelButton.addEventListener("mouseenter", function(event) {
  if (noneOpen() !== true) {
    pixelButtonTab.parentElement.className = "pixel-button-tab show-tab";
    event.stopPropagation();
  }
});
lengthButton.addEventListener("mouseenter", function(event) {
    if (noneOpen() !== true) {
      lengthButtonTab.parentElement.className = "length-button-tab show-tab";
      event.stopPropagation();
    }
});
cookingButton.addEventListener("mouseenter", function(event) {
    if (noneOpen() !== true) {
      cookingButtonTab.parentElement.className = "cooking-button-tab show-tab";
      event.stopPropagation();
    }
});
pixelButtonTab.addEventListener("mouseenter", function(event) {
    if (noneOpen() !== true) {
      pixelButtonTab.parentElement.className = "pixel-button-tab show-tab";
      event.stopPropagation();
    }
});
lengthButtonTab.addEventListener("mouseenter", function(event) {
  if (noneOpen() !== true) {
    lengthButtonTab.parentElement.className = "length-button-tab show-tab";
    event.stopPropagation();
  }
});
cookingButtonTab.addEventListener("mouseenter", function(event) {
  if (noneOpen() !== true) {
    cookingButtonTab.parentElement.className = "cooking-button-tab show-tab";
    event.stopPropagation();
  }
});

//
// Length converter
//

// Inches to cm
var inches = document.querySelector(".inch");
var cm = document.querySelector(".cm");
inches.addEventListener("input", function() {
  if(isNaN(inches.value)) {
    cm.value = "";
  } else{
    cm.value = String(Number(inches.value)*2.54);
}}, false);
cm.addEventListener("input", function() {
  if(isNaN(cm.value)) {
    inches.value = "";
  } else{
    inches.value = String(Number(cm.value)/2.54);
}}, false);

// Miles to km
var miles = document.querySelector(".miles");
var kilometers = document.querySelector(".kilometers");
miles.addEventListener("input", function() {
  if(isNaN(miles.value)) {
    kilometers.value = "";
  } else{
    kilometers.value = String(Number(miles.value)*1.609344);
}}, false);
kilometers.addEventListener("input", function() {
  if(isNaN(kilometers.value)) {
    miles.value = "";
  } else{
    miles.value = String(Number(kilometers.value)/1.609344);
}}, false);

//
// cooking converter
//

// UK pint to ml
var ukpint = document.querySelector(".ukpint");
var millilitres = document.querySelector(".millilitres");
ukpint.addEventListener("input", function() {
  if(isNaN(ukpint.value)) {
    millilitres.value = "";
  } else{
    millilitres.value = String(Number(ukpint.value)*568.261);
}}, false);
millilitres.addEventListener("input", function() {
  if(isNaN(millilitres.value)) {
    ukpint.value = "";
  } else{
    ukpint.value = String(Number(millilitres.value)/568.261);
}}, false);

// Degrees Celcius(°C) to Degrees Fahrenheit (°F)
var cel = document.querySelector(".cel");
var fahrenheit = document.querySelector(".fahrenheit");
cel.addEventListener("input", function() {
  if(isNaN(cel.value)) {
    fahrenheit.value = "";
  } else{
    fahrenheit.value = String((Number(cel.value)*1.8)+32);
}}, false);
fahrenheit.addEventListener("input", function() {
  if(isNaN(fahrenheit.value)) {
    cel.value = "";
  } else{
    cel.value = String((Number(fahrenheit.value)-32)/1.8);
}}, false);

//
// Hide measurement conversions on select menu
//

//length select
var lengthSelect = document.querySelector(".length-select");
lengthSelect.addEventListener("change", function(){
  if(lengthSelect.options[lengthSelect.selectedIndex].value === "inchCm") {
    document.querySelector(".miles-to-kilometers-container").className = "miles-to-kilometers-container hidden";
    document.querySelector(".inches-to-cm-container.hidden").className = "inches-to-cm-container";
  }
  if(lengthSelect.options[lengthSelect.selectedIndex].value === "mileKm") {
    document.querySelector(".inches-to-cm-container").className = "inches-to-cm-container hidden";
    document.querySelector(".miles-to-kilometers-container.hidden").className = "miles-to-kilometers-container";
  }
});


//cooking select
var cookingSelect = document.querySelector(".cooking-select");
cookingSelect.addEventListener("change", function(){
  if(cookingSelect.options[cookingSelect.selectedIndex].value === "ukpintMl") {
    document.querySelector(".celcius-to-fahrenheit-container").className = "celcius-to-fahrenheit-container hidden";
    document.querySelector(".ukpints-to-ml-container.hidden").className = "ukpints-to-ml-container";
  }
  if(cookingSelect.options[cookingSelect.selectedIndex].value === "celFah") {
    document.querySelector(".ukpints-to-ml-container").className = "ukpints-to-ml-container hidden";
    document.querySelector(".celcius-to-fahrenheit-container.hidden").className = "celcius-to-fahrenheit-container";
  }
});
