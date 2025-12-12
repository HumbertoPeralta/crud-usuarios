type ListContainerProps = {
    children?: React.ReactNode
}

function ListContainer({
    children,
}:ListContainerProps){
    return(
        <li>
            {children}
        </li>
    );
}

export default ListContainer;