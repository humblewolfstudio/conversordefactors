import './MOTD.css';

export default function MOTD() {

    const getMessage = () => {
        const motds = ["I si els verdaders factors de conversio son els porros que hem fet en el cami", "Vaig a convertir aquest factor", "Factores de comprension"];
        const keys = Object.keys(motds);
        const randIndex = Math.floor(Math.random() * keys.length);
        const randKey: any = keys[randIndex];
        return motds[randKey];
    }

    return (
        <div className="wrapper">
            <label>{getMessage()}</label>
            {/*si voleu afegir un motd passeu-lo a noelcabus01@gmail.com*/}
        </div>
    )
}