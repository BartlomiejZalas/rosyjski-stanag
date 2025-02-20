export enum Lesson {
    LEKCJA_1 = 'LEKCJA_1',
    STANAG_1 = 'STANAG_1',
    POWTORKA_1 = 'POWTORKA_1',
    POWTORKA_2 = 'POWTORKA_2',
    LEKCJA_2 = 'LEKCJA_2',
    LICZEBINIKI = 'LICZEBINIKI',
    LEKCJA_3 = 'LEKCJA_3',
    STANAG_2 = 'STANAG_2',
    TOP_100_CZASOWNIKI = 'TOP_100_CZASOWNIKI',
    MARKED = 'MARKED',
}

export const allLessons = Object.values(Lesson);
export const regularLessons = Object.values(Lesson).filter((l) => l !== Lesson.MARKED);

export const ALL_LESSONS = 'all';