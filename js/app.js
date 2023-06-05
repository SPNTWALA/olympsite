const authForm = document.getElementById('auth')
if (authForm) {
  authForm.addEventListener('submit', sendAuth, true)
}

const regForm = document.getElementById('reg')
if (regForm) {
  regForm.addEventListener('submit', sendReg, true)
}

const taskForm = document.getElementById('task')
if (taskForm) {
  taskForm.addEventListener('submit', sendTask, true)
}

async function sendAuth(e) {
  e.preventDefault()

  const data = new FormData()
  let response = await fetch('index.html', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: data,
  })

  if (response.ok) { 
    let result = await response.json();
    const formAuth = document.querySelector('.formAuth');
    formAuth.addEventListener('click', () => {
      formAuth.classList.remove('formAuth_open');
    });
  }
  else {
    const modalNotice = document.querySelector('.noticeModal-err');
    const btnSend = document.querySelector('.olymp_block-btn');
    btnSend.addEventListener('click', ()=>{
      modalNotice.classList.add('noticeModal_err-open');
    });
  }

  return true
}

async function sendReg(e) {
  e.preventDefault()

  const data = new FormData()
  let response = await fetch('index.html', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: data,
  })

  if (response.ok) { 
    let result = await response.json();
    const btnReg = document.querySelector('.btnReg');
    const modalReg = document.querySelector('.noticeModal');
    const formReg = document.querySelector('.formReg');
    btnReg.addEventListener('click', ()=>{
      modalReg.classList.add('noticeModal_open');
      formReg.classList.remove('formReg_open');
    });
    
  }
  else {
    const modalNotice = document.querySelector('.noticeModal-err');
    const btnSend = document.querySelector('.olymp_block-btn');
    btnSend.addEventListener('click', ()=>{
      modalNotice.classList.add('noticeModal_err-open');
    });
  }

  return true
}

async function sendTask(e) {
  e.preventDefault()

  const data = new FormData()
  let response = await fetch('olymptask.html', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: data,
  })

  if (response.ok) { 
    let result = await response.json();
    const file = document.querySelector('.file');
    const answer = document.querySelector('.answer');
    
    if(answer.value || file.value) {
      const modalSend = document.querySelector('.sendModal');
      modalSend.classList.add('sendModal_open');

      const btnAgree = document.querySelector('.btn_agree');
      const modalNotice = document.querySelector('.noticeModal');
      btnAgree.addEventListener('click', ()=>{
        modalNotice.classList.add('noticeModal_open');
        modalSend.classList.remove('sendModal_open');
      });
    }
    else alert('Добавьте файл с заданием или введите ответ')
  }
  else {
    const modalNotice = document.querySelector('.noticeModal-err');
    const btnSend = document.querySelector('.olymp_send');
    btnSend.addEventListener('click', ()=>{
      modalNotice.classList.add('noticeModal_err-open');
    });
  }

  return true
}