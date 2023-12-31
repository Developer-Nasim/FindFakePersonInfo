import { forwardRef } from "react"

function Input(props,ref) {
    const {type,...rest} = props
    return (
        <input type={type? type :'text'} {...rest} ref={ref}/>
    )
}

export default forwardRef(Input)