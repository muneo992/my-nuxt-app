<template>
  <form
    name="contact"
    method="POST"
    data-netlify="true"
    netlify-honeypot="bot-field"
  >
    <p>
      <label>お名前: <input type="text" name="name" /></label>
    </p>
    <p>
      <label>メールアドレス: <input type="email" name="email" /></label>
    </p>
    <p>
      <label>メッセージ: <textarea name="message"></textarea></label>
    </p>
    <p>
      <button type="submit">送信</button>
    </p>
  </form>
</template>
