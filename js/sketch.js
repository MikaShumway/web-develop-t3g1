/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("peopleDropdown").classList.toggle("show");
}

function filterFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("peopleDropdown");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}

function popupwindow() {
  document.getElementById("modal").style.display = "block";
  document.getElementById("aboutuspage").style.display = "block";
}

function closewindow() {
  document.getElementById("modal").style.display = "none";
  document.getElementById("aboutuspage").style.display = "none";
}

function submitwindow() {
  document.getElementById("submitmodal").style.display = "block";
  document.getElementById("bookingpage").style.display = "block";
}

function closesubmit() {
  document.getElementById("submitmodal").style.display = "none";
  document.getElementById("bookingpage").style.display = "none";
}
