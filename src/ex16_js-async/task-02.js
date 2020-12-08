function debounce (fn, ms) {
  let timeout;
  
  return function () {
    const fnCall = () => { 
      fn.apply(this, arguments)
    }
    
    clearTimeout(timeout);
    timeout = setTimeout(fnCall, ms);
  };
}
function onChange(e) {
  let list = document.getElementById("listOutput");
  let paragraph = document.createElement('p');
  paragraph.innerText = e.target.value;
  list.after(paragraph);
}

onChange = debounce(onChange, 1000);
document.getElementById('search').addEventListener('keydown', onChange);
