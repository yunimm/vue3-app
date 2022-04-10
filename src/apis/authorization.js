import { apiHelper } from "@/utils/helpers";

export default {
  signIn ({ email, password }) {
    return apiHelper.post('/users/sign_in', 
    {user: {
      email,
      password
    }})
  },
  signUp ({ email, nickname, password }) {
    return apiHelper.post('/users', 
    {user: {
      email,
      nickname,
      password
    }})
  }
}