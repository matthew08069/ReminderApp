const content = document.getElementById("content")
const date = document.getElementById("date")
const time = document.getElementById("time")
const addedBtn = document.getElementById("addedBtn")
const deletedBtn = document.getElementById("deletedBtn")

const listContent = []

function render(){
  let htmlStr = ''

  listContent.forEach(function(item){
    htmlStr = htmlStr +
      `
     <div class="item">
        <div>
          <p>Reminder: ${item.content}</p>
          <p>Date & Time: ${item.date} ${item.time}</p>
        </div>
      </div>
      `
  })
  list.innerHTML = htmlStr
}

addedBtn.addEventListener("click", function(){
  listContent.unshift({
    content: content.value,
    date: date.value,
    time: time.value
  })
  render()
})

deletedBtn.addEventListener('click', function(){
  listContent.pop()
  render()
})
