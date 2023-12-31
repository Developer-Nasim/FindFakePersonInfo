export default function OnlyTextContents({title,children}) {
    return (
        <div className="text-wrp">
            <h1>{title}</h1>
            {children}
        </div>
    )
}