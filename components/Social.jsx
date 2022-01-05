export function Social(props) {
    return (
        <a href={props.href}>
            <div className="social_icons">
                {props.icon}
            </div>
       </a>
    )
}