export default function Preloader() {
    const preloader = {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: '100vh',
        zIndex: '9999',
        background: '#ffe6e6',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: '.1s'
    }
    const spinner = {
        width: "3rem",
        height: "3rem",
    }
    return(
        <div style={preloader} className="preloader">
            <div className="spinner-border" style={spinner} role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}