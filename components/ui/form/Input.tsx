import { cn } from "@/utils";
import { TextInput } from "react-native";


type Props = {
    type?: string;
    value: string;
    onChangeText: (text: string) => void;
    placeholder?: string;
    className?: string;
}

export default function Input(props: Props) {
    const { className, type = 'text', ...others } = props;
    return (
        <TextInput className={cn("bg-[red] px-5 py-5", className)} {...others} />
    )
}