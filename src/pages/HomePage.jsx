import cabecalho from '../assets/img/img-showcase.png'
import creators from '../assets/img/project-creators.png'
import ebook from '../assets/img/ebook.png'
import clipboard from '../assets/img/clipboard.png'
import materials from '../assets/img/img-materials.png'
import memory from '../assets/img/img-material-memory.png'
import portrait from '../assets/img/img-material-portrait.png'
import book from '../assets/img/img-material-book.png'
import box from '../assets/img/img-material-box.png'
import megaphone from '../assets/img/megaphone.png'
import rael from '../assets/img/img-rael.png'
import julia from '../assets/img/img-julia.png'
import marilia from '../assets/img/img-marilia.png'
import priscila from '../assets/img/img-priscila.png'
import renato from '../assets/img/img-renato.png'

import './styles.css'


function HomePage() {
    return (
        // HOME PAGE

        <div className="homepage-global">
            <div className='showcase'>
                <img src={cabecalho} alt="Imagem cabecalho" className='img-showcase' />
                <div className="showcase-text">
                    Construção da identidade racial: o processo de aceitação da criança negra e as lacunas educacionais geradas na primeira infância
                </div>
            </div>

            {/* INTRODUÇÃO     */}

            <div className="introduction">
                <img src={creators} alt="Criadores" className='img-project-creators' />

                <div className='introduction-container'>
                    <div className='introduction-block'> O que é o clube dos Eu's? </div>
                    O Clube dos Eu’s, é muito mais que um projeto, é uma tentativa de mudança na sociedade. De maneira análoga ao pensamento de Leon Tolstói, no qual ele diz: “Se queres ser universal, começa por pintar a tua aldeia.” Acreditamos que uma mudança deva começar na nossa localidade. Então começamos, com ações antirracistas, e na base da educação, na educação   infantil. Com o auxílio da comunidade escolar, realizamos atividades interventivas nas quais propiciamos uma reflexão as crianças sobre sua própria identidade visual, e sua multiplicidade de identidades, realizamos uma pesquisa com as crianças que estão na primeira infância(0 a 6 anos) e constatamos a lacuna que foi gerada nesse processo. É notório a dificuldade de crianças, negras/pardas se identificarem como são. Por outro lado, os professores são nossos parceiros no processo, então para auxiliá-los, construímos um ebook com inúmeras formas de se trabalhar a temática na educação, além de construirmos materiais pedagógicos, que também se unem no processo de educação étnico-racial nessa faixa-etária.
                </div>
            </div>

            {/* CONTEXTO     */}

            <div className="context">
                <div className="context-img-book">
                    <img src={ebook} alt="Ebook" className='img-ebook' />
                </div>

                <div className='context-container'>
                    <div className="context-block"> Kit “Por crianças com conhecimento sobre si mesmo” </div>
                    Na nossa concepção, não adiantava encarar a realidade e não propormos uma intervenção. Pensamos em um ebook, com inúmeras formas de se trabalhar a temática racial na educação infantil. Não podemos negar o peso que esse tema tem na sociedade atual, e trabalhar uma problemática tão pesada com crianças de fato não é uma tarefa fácil. Estudamos, procuramos e elaboramos um plano para que possa servir de auxílio, pois a criatividade vai muito além, os professores são seres que conseguem pensar em atividades incríveis para serem trabalhadas, este material servirá de amigo para o professor, estará do seu lado, para qualquer busca de informação, e maneiras lúdicas de trabalhar com seus alunos. Foram dias de pesquisa, e sintetizamos o necessário para que possamos ter uma educação antirracista e mais inclusiva. Por encararmos a real face da educação pública infantil, entendemos as grandes dificuldades que rodeiam esse processo, então o professor será livre para adaptar para sua realidade, como disse anteriormente, esse material será um companheiro do professor, e juntos possibilitaremos uma maior inclusão e uma reflexão das crianças de si mesmo, ajudando-os a se aceitar, se entender, assim como aceitar e entender o outro. Essa é uma realidade que possui profusas e confusas faces, mas que com certeza, teremos uma melhora na educação do país.
                </div>
            </div>

            {/* MATERIAIS */}

            <div className="materials">
                <div className="materials-text-kit"></div>
                NO KIT VEM:
                <div className="materials-text-kit"></div>
            </div>

            <div className="materials-blocks">
                <img src={materials} alt="Materiais" className='img-materials' />

            </div>

            {/* FERRAMENTAS */}

            <div className="tools">
                <div className="tools-container">
                    <div className="tools-container-kit">MATERIAIS PEDAGÓGICOS</div>
                    <img src={clipboard} alt="Prancheta" className='tools-img-clipboard' />
                </div>

                <div className="tools-gallery">
                    <div className="tools-gallery-wrapper">
                        <div className="tools-gallery-container">
                            <img src={memory} alt="Jogo da Memória" className='item' />
                            <img src={portrait} alt="Autoretrato com velcro" className='item' />
                            <img src={book} alt="Livro de Colorir" className='item' />
                            <img src={box} alt="Caixa do Tesouro" className='item' />
                           
                        </div>
                    </div>
                 <div className="download-button-container">
                <button className="button-download"><a href='https://priscilasholanda.files.wordpress.com/2022/11/ebook.pdf' className='download-ebook'>DOWNLOAD</a></button>

            </div>
            <img src={megaphone} alt="Megafone" className='img-megaphone' />
                </div>
            </div>

            {/* DOWNLOAD */}

            

            {/* CRIADORES */}

            <div className="creators-gallery">
                <div className="creators-gallery-wrapper">
                    <div className="creators-gallery-container">
                        <img src={rael} alt="rael" className='creator' />
                        <img src={julia} alt="julia" className='creator' />
                        <img src={marilia} alt="marilia" className='creator' />
                        <img src={priscila} alt="priscila" className='creator' />
                        <img src={renato} alt="renato" className='creator-img' />
                    </div>
                </div>
            </div>

            {/* RODAPÉ */}

            <footer className="footer">@clubedoeus</footer>
        </div>
    )
}

export default HomePage;

