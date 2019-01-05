// 邮箱格式简单验证
export function validateEmail(email) {
  let reg = /\S+@\S+\.\S+/i
  return reg.test(String(email).toLowerCase())
}

_.each([1,2], v => console.log(v))
