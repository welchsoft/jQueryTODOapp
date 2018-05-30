let pendingTasks = $("#pending").sortable()

let completedTasks = $("#completed").sortable()



$(document).ready(function(){


//needed for click handler
  let taskAddBtn = $('#task-add-btn')

//upon submission generates an <li>
//the checkbox, textfield content, and remove button are children of the <li>
//appends the populated <li> to the <ul>
  taskAddBtn.click(function(){
    let taskElement = $("<li>")
    let taskInput = $("<h3>")
    let removeBtn = $("<button>").html("Remove")
    removeBtn.click(function(){
      $(this).parent().remove()
    })
//sets up the checkbox which moves items between to do and done lists
    let taskCheckBox = $("<input>").attr("type","checkbox")
    taskCheckBox.change(function(){
        if(this.checked) {
          completedTasks.append($(this).parent())
        }
        else{
          pendingTasks.append($(this).parent())
        }
    })
//append the child elements to <li> appends <li>
    taskElement.append(taskCheckBox)
    taskInput.append($("#task-input").val())
    taskElement.append(taskInput)
    taskElement.append(removeBtn)
    $("#task-input").val('')
//append our completed task <li> to the <ul>
    pendingTasks.append(taskElement)
  })

})
