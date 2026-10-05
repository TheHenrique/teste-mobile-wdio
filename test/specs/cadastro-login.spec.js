import loginPage from '../pageobjects/login.page.js'

describe('Funcionalidade: Cadastro e Login', () => {

    it('Deve cadastrar um usuário e fazer login com o mesmo usuário', async () => {
        const email = `aluno${Date.now()}@ebac.com`
        const senha = 'Teste@123'

        await loginPage.abrirMenu()

        // Cadastro
        await loginPage.cadastrar(email, senha)
        expect(await loginPage.lerMensagemAlerta()).toEqual('You successfully signed up!')
        expect(await loginPage.tituloAlertaExibido('Signed Up!')).toBe(true)
        await loginPage.fecharAlerta()

        // Login com o usuário cadastrado
        await loginPage.login(email, senha)
        expect(await loginPage.lerMensagemAlerta()).toEqual('You are logged in!')
        expect(await loginPage.tituloAlertaExibido('Success')).toBe(true)
        await loginPage.fecharAlerta()
    });
});
