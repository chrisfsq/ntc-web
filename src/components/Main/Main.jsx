export default function Main(props){

    const bgDiv = props.bgDiv1

    const divStyle = {
        backgroundImage: `url(${bgDiv})`,
        backgroundSize: 'cover', 
        backgroundRepeat: 'no-repeat', 
        height: '600px',
        opacity: "80%"
      };

    return(
        <div className="wrapper" style={divStyle} >
            <div>

            </div>
            <div>
            <h1>NTC Assistência</h1>
            </div>
        </div>
    )
}