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
    let elementbtn = $("<button>").html("Remove")
    elementbtn.click(function(){
      $(this).parent().remove()
    })
//sets up the checkbox which moves items between to do and done lists
    let elementCheckBox = $("<input>").attr("type","checkbox")
    elementCheckBox.change(function(){
        if(this.checked) {
          completedTasks.append($(this).parent())
        }
        else{
          pendingTasks.append($(this).parent())
        }
    })
//append the child elements to <li> appends <li>
    taskElement.append(elementCheckBox)
    taskInput.append($("#task-input").val())
    taskElement.append(taskInput)
    taskElement.append(elementbtn)
    $("#task-input").val('')
//append our completed task <li> to the <ul>
    pendingTasks.append(taskElement)
  })

})
