import React from "react";
import { useRef } from "react";
import { flushSync } from "react-dom";

interface Props {
    placeholder: string;
    value: string;
    onChange: (v: string) => void;
    error: boolean;
    success: boolean;
    ref?: React.MutableRefObject<HTMLInputElement>;
    keyboardMapping?: boolean;
}

const replacementMap: Record<string, string> = {
    'a': 'а',
    'b': 'б',
    'v': 'в',
    'g': 'г',
    'd': 'д',
    'e': 'е',
    'ę': 'ё',
    'ż': 'ж',
    'z': 'з',
    'i': 'и',
    'j': 'й',
    'k': 'к',
    'l': 'л',
    'm': 'м',
    'n': 'н',
    'o': 'о',
    'p': 'п',
    'r': 'р',
    's': 'с',
    't': 'т',
    'u': 'у',
    'f': 'ф',
    'h': 'х',
    'c': 'ц',
    'ć': 'ч',
    'w': 'ш',
    'W': 'щ',
    ']': 'ъ',
    'y': 'ы',
    '[': 'ь',
    'E': 'э',
    'U': 'ю',
    'R': 'я',
    'а': 'а',
    'б': 'б',
    'в': 'в',
    'г': 'г',
    'д': 'д',
    'е': 'е',
    'ё': 'ё',
    'ж': 'ж',
    'з': 'з',
    'и': 'и',
    'й': 'й',
    'к': 'к',
    'л': 'л',
    'м': 'м',
    'н': 'н',
    'о': 'о',
    'п': 'п',
    'р': 'р',
    'с': 'с',
    'т': 'т',
    'у': 'у',
    'ф': 'ф',
    'х': 'х',
    'ц': 'ц',
    'ч': 'ч',
    'ш': 'ш',
    'щ': 'щ',
    'ъ': 'ъ',
    'ы': 'ы',
    'ь': 'ь',
    'э': 'э',
    'ю': 'ю',
    'я': 'я'
};

export const Input = React.forwardRef<HTMLInputElement, Props>(({ value, onChange, error, success, placeholder, keyboardMapping = false }, ref) => {

    const position = useRef({ beforeStart: 0, beforeEnd: 0 });

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        if (!keyboardMapping) {
            onChange(newValue);
            return;
        }

        let translated = '';
        for (let ch of newValue) {
            if (replacementMap[ch]) {
                translated += replacementMap[ch];
            } else {
                translated += ch;
            }
        }

        const beforeStart = e.target.selectionStart || 0;
        const beforeEnd = e.target.selectionEnd || 0;

        position.current = {
            beforeStart,
            beforeEnd
        };

        flushSync(() => onChange(translated));

        if (ref && 'current' in ref && ref.current) {
            ref.current.setSelectionRange(beforeStart, beforeEnd);
        }
    };

    return (
        <input type="text" placeholder={placeholder} disabled={success}
            className={error ? 'error' : success ? 'success' : undefined}
            value={value}
            ref={ref}
            autoFocus={true}
            onChange={e => handleOnChange(e)} />
    )

});
