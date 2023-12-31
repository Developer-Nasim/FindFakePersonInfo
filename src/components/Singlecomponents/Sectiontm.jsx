export default function Sectiontm({children,...rest}) {
    return(
        <section {...rest}>
            <div className="container">     
                {children} 
            </div>
        </section>
    )
}