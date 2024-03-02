import {useCallback} from 'react'
import PasswordGenerator from './PasswordGenerator.tsx'
import NavBar from './ui/NavBar.tsx'
import Footer from './ui/Footer.tsx'
import {CopyToClipboard} from 'react-copy-to-clipboard';

function PasswordInterfaz(){
    const [password, setPassword] = useState('');
    const [length, setLength] = useState(12);
    const [includeSymbols, setIncludeSymbols] = useState(true);
    const [includeNumbers, setIncludeNumbers] = useState(true);
    const [includeLowercase, setIncludeLowercase] = useState(true);
    const [includeUppercase, setIncludeUppercase] = useState(true);
    const [dummy, setDummy] = useState(0);
    const [copied, setCopied] = useState(false);
    const onCopy = useCallback(() => {
        setCopied(true);
        }, [])
    
    return (
        <>
        <NavBar />
        <main className="flex-shrink-0">
            <div className="container">
                
                
                <h1 className="mt-5">Generador de contraseñas</h1>
                <p className="lead">Simple generador de contraseñas</p>

                <p className="lead">Longitud {length}: <input type="range" min="4" max="50" value={length} onChange={(ev) => setLength(ev.target.valueAsNumber)} /> </p>
                <p className="lead">Incluir símbolos: <input type="checkbox" checked={includeSymbols} onChange={(ev) => setIncludeSymbols(ev.target.checked)} /> </p>
                <p className="lead">Incluir números: <input type="checkbox" checked={includeNumbers} onChange={(ev) => setIncludeNumbers(ev.target.checked)} /></p>
                <p className="lead">Incluir minúsculas: <input type="checkbox" checked={includeLowercase} onChange={(ev) => setIncludeLowercase(ev.target.checked)} /></p>
                <p className="lead">Incluir mayúsculas: <input type="checkbox" checked={includeUppercase} onChange={(ev) => setIncludeUppercase(ev.target.checked)} /></p>
                <p className="lead"><button className="btn btn-primary" onClick={() => setDummy((k) => k + 1)}>Generar Contraseña</button></p>
                <PasswordGenerator
                    dummy={dummy}
                    length={length}
                    includeSymbols={includeSymbols}
                    includeNumbers={includeNumbers}
                    includeLowercase={includeLowercase}
                    includeUppercase={includeUppercase}
                    returnPass={(p:string) => setPassword(p)}
                />
                <div className="alert alert-primary" role="alert">
                    {password}
                </div>
                <CopyToClipboard onCopy={onCopy} text={password}>
                    <button>Copiar</button>
                </CopyToClipboard>
            </div>
        </main>
        
        
        
        
        <Footer />
        </>
    )
}

export default PasswordInterfaz;