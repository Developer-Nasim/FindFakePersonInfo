export default function OnlyTextContents({title,children}) {
    return (
        <div className="text-wrp">
            <h1 className="text-center mb-5">{title}</h1>
            {children}
        </div>
    )
}