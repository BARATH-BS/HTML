function show(content_disp,n)
{
  var close= document.getElementsByClassName('close')[n]
  content_disp.style.display= "block";
  close.onclick = function()
  {
    content_disp.style.display = "none";
  }
  window.onclick = function(event)
  {
    if (event.target == content_disp)
    {
      content_disp.style.display = "none";
    }
  }
}
