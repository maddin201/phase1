
        todo_items = 0;
window.onload = function(){
   document.forms [0].elements[0].focus();	
  var todo = document.getElementById("todo");
  var task_form = todo.querySelector("#task_form");
  task_form.onsubmit = function(e){
    var task_input = e.target.querySelector("input[name='task']");
    var task_name;
    if(task_input.dataset.edit == "true"){
      var task_item_id = task_input.dataset.id;
      
      task_name = todo.querySelector(".tasks #item" + task_item_id + " .task-name");
      
      task_name.textContent = task_input.value;
      task_input.dataset.edit = false;
      task_input.dataset.id = "";
    }else{

      var todo_value = task_input.value;

      var item = document.createElement("tr");
      item.id = "item"+todo_items;
     //   alert( item.id);
      var task_check = document.createElement("td");
      task_check.setAttribute("class", "check fa fa-square");
      task_check.dataset.id = todo_items;
	  //alert( task_check.dataset.id);
      task_check.dataset.checked = false;
      task_check.onclick = function(e){
        var task_item_id = e.target.dataset.id;
        var task_name = todo.querySelector(".tasks #item" + task_item_id + " .task-name");
	
        if(e.target.dataset.checked == "true"){
          e.target.setAttribute("class", "check fa fa-square");
          task_name.style.textDecoration = "";
          e.target.dataset.checked = false;
        }else{
          e.target.setAttribute("class", "check fa fa-check-square");
          task_name.style.textDecoration = "line-through";
          e.target.dataset.checked = true;
        }
      };
      item.appendChild(task_check);

      task_name = document.createElement("td");
      task_name.setAttribute("class","task-name");
      task_name.textContent = todo_value;
      item.appendChild(task_name);

      var edit_delete_panel = document.createElement("td");

      var edit_link = document.createElement("a");
      edit_link.href = "#";
      edit_link.textContent = "edit";
      edit_link.dataset.id = todo_items;
      edit_link.onclick = function(e){
        var task_item_id = e.target.dataset.id;
        var task_name = todo.querySelector(".tasks #item" + task_item_id + " .task-name");
        var task_input = todo.querySelector("#task_form input[name='task']");
        task_input.value = task_name.textContent;
        task_input.dataset.edit = true;
        task_input.focus();
        task_input.dataset.id = task_item_id;

        return false;
      };
      edit_delete_panel.appendChild(edit_link);

      edit_delete_panel.appendChild(document.createTextNode(" | "));

      var delete_link = document.createElement("a");
      delete_link.href = "#";
      delete_link.textContent = "delete";
      delete_link.dataset.id = todo_items;
      delete_link.onclick = function(e){
        var task_item_id = e.target.dataset.id;
        var task_item = todo.querySelector(".tasks #item" + task_item_id);
        task_item.parentNode.removeChild(task_item);
        return false;
      };
      edit_delete_panel.appendChild(delete_link);

      item.appendChild(edit_delete_panel);

      var tasks = todo.querySelector(".tasks");
      tasks.appendChild(item);

      todo_items++;
    }
    return false;
    }
	}
