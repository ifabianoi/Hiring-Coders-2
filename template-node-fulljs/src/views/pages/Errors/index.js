import backgroundOne from '../../../assets/images/background/bg1.png';
import darthError from '../../../assets/images/elements/vader.png'

let Error404 = {
    is_private: false,
    render: async () => {
        let view = `${error}`
        return view
    },

    after_render: () => {
        console.log('Try another one... :)')
    }
}
let error = `
<div class="error-default" style="background-image: url(${backgroundOne})
    <div class="container">
        <h1>erro 404!</h1>
        <a href="http://localhost:8080/">
            <img src="${darthError}" alt="Vader error">
        </a>
        <h2>Caro padawan, este conteúdo não existe.</h2>
        <h3>Clique no Vader e tente novamente.</h3>
    </div>
</div>
`

export default Error404;