type ContainerProps = {
    children: JSX.Element | JSX.Element[];
}

export function Container({ children }: ContainerProps) {
    return (
        <main className="w-screen h-screen flex justify-center items-center">
            {children}
        </main>
    )
}