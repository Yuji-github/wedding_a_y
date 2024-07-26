const scriptURL = 'https://script.google.com/macros/s/AKfycbzh9QMB8HAr7Gt96l7psWI9GgXkQKwVKoVOk0sA49hfvtb4L8xhL0F73qP0MaJ4NtdWqQ/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("ご返信ありがとうございました. " +
    "結婚式で逢えるのを楽しみにしてます😃" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('不具合が発生したようです。' +
    '彩実か祐士に連絡下さい。', error.message))
})
