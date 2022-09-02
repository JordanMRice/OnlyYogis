export function Button (props) {
    return(
        <button class="button" onClick={props.onClick}> {props.text} </button>

    )
}