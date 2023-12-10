import React from 'react'

export default function Login() {
  return (
    <div classname="span4">
  <div classname="well">
    <h5>ALREADY REGISTERED ?</h5>
    <form>
      <div classname="control-group">
        <label classname="control-label" htmlfor="inputEmail">Email</label>
        <div classname="controls">
          <input classname="span3" type="text" placeholder="Email" />
        </div>
      </div>
      <div classname="control-group">
        <label classname="control-label" htmlfor="inputPassword">Password</label>
        <div classname="controls">
          <input type="password" classname="span3" placeholder="Password" />
        </div>
      </div>
      <div classname="control-group">
        <div classname="controls">
          <button type="submit" classname="defaultBtn">Sign in</button> <a href="#st">Forget password?</a>
        </div>
      </div>
    </form>
  </div>
</div>

  )
}
