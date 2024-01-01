export default function Header(props) {
    return (
        <div className="bg-gradient-to-r from-sky-500 to-indigo-500 h-12 flex justify-between items-center">
            <div className="w-20 ml-20 flex items-center">
                <img src={props.imgLogo} alt="Logo" className="max-w-full h-auto"/>
            </div>
            <ul className="text-white flex justify-end p-3 mr-10 font-bold">
                <a href={props.home}><li className="mr-5 hover:border-b-2">Inicio</li></a>
                <a href={props.contact}><li className="mr-5 hover:border-b-2">Contato</li></a>
                <a href={props.agend}><li className="mr-5 hover:border-b-2">Agendamento</li></a>
                <a href={props.about}><li className="mr-5 hover:border-b-2">Sobre nós</li></a>
            </ul>
        </div>
    )
}