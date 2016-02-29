var InputText = require('common/inputText');
var InputPassword = require('common/inputPassword');

var App = React.createClass({
	componentDidMount: function(){
		
	},
	render: function(){
		return (
			<div className="ui fluid container">
				<div className="ui two column centered grid">
					<div className="column loginBox">
						<div className="ui raised segment">
							<div className="ui form">
								<div className="field error">
									<label>Tên tài khoản</label>
									<InputText type="web" ref="firstName" placeholder="Tên tài khoản"/>
								</div>
								<div className="field error">
									<label>Mật khẩu</label>
									<InputPassword type="web" ref="password" placeholder="Mật khẩu"/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
})

ReactDOM.render(<App/>, document.getElementById('app'))