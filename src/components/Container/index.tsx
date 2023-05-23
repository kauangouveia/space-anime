type ContainerProps = {
    children: JSX.Element | JSX.Element[];
}

export function Container({ children }: ContainerProps) {
    return (
        <main className="w-screen h-auto flex justify-center items-center flex-col gap-3">
            {children}
        </main>
    )
}