function todoList() {
    var item = document.getElementById("task").value
    var text = document.createTextNode(item)
    var newItem = document.createElement("li")
    newItem.appendChild(text)
    document.getElementById("task").appendChild(newItem)
  }

  alert(123);