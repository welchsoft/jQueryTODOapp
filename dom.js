let pendingTasks = $("#pending").sortable()

let completedTasks = $("#completed").sortable()



$(document).ready(function(){

  let taskAddBtn = $('#task-add-btn')

  taskAddBtn.click(function(){
    let taskElement = $("<li>")
    let taskInput = $("<h3>")

    let elementbtn = $("<button>")
    elementbtn.html("remove")
    elementbtn.click(function(){
      $(this).parent().remove()
    })

    let elementCheckBox = $("<input>").attr("type","checkbox")

    elementCheckBox.change(function(){
        if(this.checked) {
          completedTasks.append($(this).parent())
        }
        else{
          pendingTasks.append($(this).parent())
        }
    })

    taskElement.append(elementCheckBox)
    taskInput.append($("#task-input").val())
    taskElement.append(taskInput)
    taskElement.append(elementbtn)
    $("#task-input").val('')

    pendingTasks.append(taskElement)
  })

  let taskRemoveBtn = $('#task-remove-btn')

})
