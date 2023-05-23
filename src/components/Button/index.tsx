import { Button as ButtonAnt } from 'antd';


type ButtonProps = {
    text: string,
    handle: Function
}
export function Button({ handle, text }: ButtonProps) {
    return (
        <ButtonAnt type="primary" className="bg-sky-950 w-32 h-10 font-bold">{text}</ButtonAnt>
    )
}