<script>
import { UserIcon, LockIcon } from 'vue-feather-icons';

export default {
	name: 'Login',
	props: [],
	components: {
		UserIcon,
		LockIcon,
	},
	data: function(){
		return {
			user: {
				email: '',
				password: ''
			}
		};
	},
	methods: {
		login(){
			this.$store.dispatch('signIn', this.user);
			if(this.$route.query.cart){
				this.$toast.success('Login feito com sucesso!');
				this.$router.push('checkout');
			}else {
				this.$toast.success('Login feito com sucesso!');
				this.$router.push('/');
			}
			
		}
	}
};
</script>

<template>
	<div class="login">
		<form v-on:submit.prevent="login" class="card primary-color login-form">
			<img class="login-logo" src="../assets/logo.png" alt="">

			<div class="inputField">
				<div class="form-group">
					<div class="input-group">
						<div class="input-group-prepend">
							<div class="input-group-text">
								<user-icon></user-icon>
							</div>
						</div>
						<input type="text" v-model="user.email" placeholder="E-mail" class="form-control">
					</div>
				</div>
				<div class="form-group">
					<div class="input-group">
						<div class="input-group-prepend">
							<div class="input-group-text">
								<lock-icon></lock-icon>
							</div>
						</div>
						<input type="password" v-model="user.password" placeholder="Senha" class="form-control">
					</div>
				</div>
			</div>

			<button class="pmzButton full">Entrar</button>
		</form>
	</div>	
</template>

<style>
	.login {
		display: flex;
		justify-content: center;
		width: 100%;
	}

	.full {
		width: 100%;
	}

	.login-form {
		padding: 40px 20px;
		color: #fff;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		margin-top: 35px;
		min-height: 300px;
		box-shadow: 2px 1px 5px #ccc;
	}

	.login-logo {
		width: 220px;
	}

</style>