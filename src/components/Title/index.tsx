type TitleProps = {
    title: string;
}
export function Title({ title }: TitleProps) {
    return (
        <div className="flex-1 p-2 flex justify-start items-center">
            <div className="w-2 h-10 bg-sky-700 rounded-full mr-1"></div>
            <h1 className="text-xl font-medium">{title}</h1>
        </div>
    )
}