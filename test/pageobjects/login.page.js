class LoginPage {
    // Seletores
    get menuLogin() { return $('~Login') }
    get abaLogin() { return $('~button-login-container') }
    get abaCadastro() { return $('~button-sign-up-container') }
    get campoEmail() { return $('~input-email') }
    get campoSenha() { return $('~input-password') }
    get campoConfirmarSenha() { return $('~input-repeat-password') }
    get botaoLogin() { return $('~button-LOGIN') }
    get botaoCadastrar() { return $('~button-SIGN UP') }
    get mensagemAlerta() { return $('id=android:id/message') }
    get botaoOk() { return $('id=android:id/button1') }

    // Métodos / Ações
    async abrirMenu() {
        await this.menuLogin.click()
    }

    async cadastrar(email, senha) {
        await this.abaCadastro.click()
        await this.campoEmail.setValue(email)
        await this.campoSenha.setValue(senha)
        await this.campoConfirmarSenha.setValue(senha)
        await this.esconderTeclado()
        await this.botaoCadastrar.click()
    }

    async login(email, senha) {
        await this.abaLogin.click()
        await this.campoEmail.clearValue()
        await this.campoEmail.setValue(email)
        await this.campoSenha.clearValue()
        await this.campoSenha.setValue(senha)
        await this.esconderTeclado()
        await this.botaoLogin.click()
    }

    async lerMensagemAlerta() {
        await this.mensagemAlerta.waitForDisplayed()
        return await this.mensagemAlerta.getText()
    }

    async tituloAlertaExibido(titulo) {
        // Busca o título pelo texto, porque o id do título muda entre versões do Android
        const elemento = $(`-android uiautomator:new UiSelector().text("${titulo}")`)
        return await elemento.isDisplayed()
    }

    async fecharAlerta() {
        await this.botaoOk.click()
    }

    async esconderTeclado() {
        if (await driver.isKeyboardShown()) {
            await driver.hideKeyboard()
        }
    }
}

export default new LoginPage()
