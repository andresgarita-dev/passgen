import {useState, useCallback} from 'react'
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
        setTimeout(() => {
            setCopied(false);
            }, 2000);
        }, [])
    const shouldRenderPasswordGenerator = includeSymbols || includeNumbers || includeLowercase || includeUppercase;
    
    return (
        <>
        <NavBar />
        <main className="flex-shrink-0">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mx-auto pt-5">
                        <div className="card bg-light border-0 shadow">
                            <div className="card-body">
                                <h2 className="card-title">Generador de contraseñas</h2>

                                <p className="lead"><input type="number" className="w-25" min="4" max="50" value={length} onChange={(ev) => setLength(ev.target.valueAsNumber)} /> Longitud</p>
                                <p className="lead"><input type="checkbox" checked={includeSymbols} onChange={(ev) => setIncludeSymbols(ev.target.checked)} /> Símbolos</p>
                                <p className="lead"><input type="checkbox" checked={includeNumbers} onChange={(ev) => setIncludeNumbers(ev.target.checked)} /> Números</p>
                                <p className="lead"><input type="checkbox" checked={includeLowercase} onChange={(ev) => setIncludeLowercase(ev.target.checked)} /> Minúsculas</p>
                                <p className="lead"><input type="checkbox" checked={includeUppercase} onChange={(ev) => setIncludeUppercase(ev.target.checked)} /> Mayúsculas</p>
                                {shouldRenderPasswordGenerator && (<p className="lead"><button className="btn btn-primary" onClick={() => setDummy((k) => k + 1)}>Generar Contraseña</button></p>)}
                                <PasswordGenerator
                                    dummy={dummy}
                                    length={length}
                                    includeSymbols={includeSymbols}
                                    includeNumbers={includeNumbers}
                                    includeLowercase={includeLowercase}
                                    includeUppercase={includeUppercase}
                                    returnPass={(p:string) => setPassword(p)}
                                />
                                <div className="card">
                                    <div className="card-body">
                                        <pre>
                                            <code className="text-danger fw-bold fs-5">{password}</code>
                                        </pre>
                                        <CopyToClipboard text={password} onCopy={onCopy}>
                                            <button className="btn btn-primary">{copied ? 'Copiado!' : 'Copiar'}</button>
                                        </CopyToClipboard>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        
        
        
        
        <Footer />
        </>
    )
}

export default PasswordInterfaz;