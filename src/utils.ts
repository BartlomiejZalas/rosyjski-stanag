import { Lesson } from "./model/Lesson";

export const equal = (w1: string, w2: string) => {
    const toPlain = (v: string) =>
        v
            .toLowerCase()
            .trim()
            .replaceAll('!', '')
            .replaceAll('?', '')
            .replaceAll('.', '')
            .replaceAll(',', '');

    return toPlain(w1) === toPlain(w2);
}

export const humanize = (category: Lesson) => {
    return Lesson[category].toString().replaceAll('_', ' ');
}

export const shuffle = <T,>(array: T[]): T[] => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}