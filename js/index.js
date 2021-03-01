import '../sass/styles.scss';

//input-slider amount for
var firstSlider = document.getElementById("amount-from");
var firstOutput = document.getElementById("first-amount");
firstOutput.innerHTML = firstSlider.value;

firstSlider.oninput = function() {
  firstOutput.innerHTML = this.value;
}

//input-slider amount to
var secondSlider = document.getElementById("amount-to");
var secondOutput = document.getElementById("second-amount");
secondOutput.innerHTML = secondSlider.value;

secondSlider.oninput = function() {
  secondOutput.innerHTML = this.value;
}

// add active class to the navigation
var navigationList = document.getElementById("navigation-list");
var navigationElement = navigationList.getElementsByClassName("navigation-element");
for (var i = 0; i < navigationElement.length; i++) {
  navigationElement[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active-nav");
  current[0].className = current[0].className.replace(" active-nav", "");
  this.className += " active-nav";
  });
}

// add active class to the number of elements filter under the list
var numberList = document.getElementById("number-list");
var numberElement = numberList.getElementsByClassName("number-element");
for (var i = 0; i < numberElement.length; i++) {
  numberElement[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active-num");
  current[0].className = current[0].className.replace(" active-num", "");
  this.className += " active-num";
  });
}

//definition of html objects
var advanceFilteringButton = document.querySelector("#advance-filtering-button")
var advanceFilter = document.querySelector("#advance-filter")

advanceFilteringButton.onclick = function() {
    advanceFilteringButton.classList.toggle('active');
}

function removeAnimationOpenAdvanceFilter() {advanceFilter.classList.remove('animation-open')}
function addAnimationOpenAdvanceFilter() {advanceFilter.classList.add('animation-open')}
function removeAnimationCloseAdvanceFilter() {advanceFilter.classList.remove('animation-close')}
function removeActiveAdvanceFilter() {advanceFilter.classList.remove('active')}

advanceFilteringButton.addEventListener("click", openCloseAdvanceFilter)
function openCloseAdvanceFilter() {
    if (advanceFilter.classList.contains('active')) {
        clearTimeout (setTimeout(addAnimationOpenAdvanceFilter, 200))
        advanceFilter.classList.add('animation-close')
        setTimeout(removeAnimationOpenAdvanceFilter, 700)
        setTimeout(removeAnimationCloseAdvanceFilter, 900)
        setTimeout(removeActiveAdvanceFilter, 900)
    }
    else {
        clearTimeout(setTimeout(removeAnimationOpenAdvanceFilter, 700))
        clearTimeout(setTimeout(removeActiveAdvanceFilter, 700))
        clearTimeout(setTimeout(removeAnimationCloseAdvanceFilter, 700))
        advanceFilter.classList.add('active')
        advanceFilter.classList.remove('animation-open')
        advanceFilter.classList.remove('animation-close')
        setTimeout(addAnimationOpenAdvanceFilter, 200)
    }
    
}

//definition of html objects
var addNewEntryButton = document.querySelector("#add-new-entry")
var newEntry = document.querySelector("#new-entry")
var enterEntryButton = document.querySelector("#enter-new-entry")

function removeAnimationOpenMainFilter() {newEntry.classList.remove('animation-open')}
function addAnimationOpenMainFilter() {newEntry.classList.add('animation-open')}
function removeAnimationCloseMainFilter() {newEntry.classList.remove('animation-close')}
function removeActiveMainFilter() {newEntry.classList.remove('active')}

addNewEntryButton.addEventListener("click", openCloseMainFilter)
function openCloseMainFilter() {
    if (newEntry.classList.contains('active')) {
        clearTimeout (setTimeout(addAnimationOpenMainFilter, 200))
        newEntry.classList.add('animation-close')
        setTimeout(removeAnimationOpenMainFilter, 700)
        setTimeout(removeAnimationCloseMainFilter, 900)
        setTimeout(removeActiveMainFilter, 900)
    }
    else {
        clearTimeout(setTimeout(removeAnimationOpenMainFilter, 700))
        clearTimeout(setTimeout(removeActiveMainFilter, 700))
        clearTimeout(setTimeout(removeAnimationCloseMainFilter, 700))
        newEntry.classList.add('active')
        newEntry.classList.remove('animation-open')
        newEntry.classList.remove('animation-close')
        setTimeout(addAnimationOpenMainFilter, 200)
    }
}

enterEntryButton.addEventListener("click", closeAddEntry)
function closeAddEntry() {
    clearTimeout (setTimeout(addAnimationOpenMainFilter, 200))
    newEntry.classList.add('animation-close')
    setTimeout(removeAnimationOpenMainFilter, 700)
    setTimeout(removeAnimationCloseMainFilter, 900)
    setTimeout(removeActiveMainFilter, 900)
}