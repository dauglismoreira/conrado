import ButtonPrimary from "../button-primary"
import './styles.css'

export const ContactForm = () => {
    return(
        <div className="contact-form">
            <div className="message-contact">
                <div className="message-contact-grid">
                    <div className="wrapper">
                        <div className="input-line">
                            <legend>NOME</legend>
                            <input type="text"/>
                        </div>
                        <div className="input-line">
                            <legend>TELEFONE</legend>
                            <input type="email"/>
                        </div>
                    </div>
                    <div className="wrapper">
                        <div className="input-line">
                            <legend>EMAIL</legend>
                            <input type="text"/>
                        </div>
                        <div className="input-line">
                            <legend>CIDADE</legend>
                            <input type="email"/>
                        </div>
                    </div>
                </div>
                <div className="wrapper">
                    <div className="input-line">
                        <legend>MENSAGEM</legend>
                        <textarea name="" id="" rows={6}></textarea>
                    </div>
                </div>
            </div>
            <div className="message-send">
                <div className="right-container">
                    <input name='accept' type="checkbox" id="accept" />
                    <label htmlFor='accept'>
                        A Conrado respeita sua privacidade e utiliza seus dados pessoais para contatá-lo por e-mail ou telefone aqui registrados. Para saber mais, acesse nossa Política de Privacidade. Ao clicar em "Enviar", você concorda em permitir que a Conrado armazene e processe os dados pessoais fornecidos por você para a finalidade informada.
                    </label>
                </div>
                <ButtonPrimary text="ENVIAR" onClick={() => alert("")} classStyle="#5C635E" />
            </div>
        </div>
    )
}