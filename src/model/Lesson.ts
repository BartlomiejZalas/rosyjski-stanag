export enum Lesson {
    LEKCJA_1 = 'LEKCJA_1',
    STANAG_1 = 'STANAG_1',
    LEKCJA_2 = 'LEKCJA_2',
    LEKCJA_3 = 'LEKCJA_3',
    LEKCJA_4 = 'LEKCJA_4',
    LICZEBINIKI = 'LICZEBINIKI',
    LEKCJA_5 = 'LEKCJA_5',
    STANAG_2 = 'STANAG_2',
    TOP_100_CZASOWNIKI = 'TOP_100_CZASOWNIKI',
    LEKCJA_6 = 'LEKCJA_6',
    LEKCJA_7 = 'LEKCJA_7',
    MARKED = 'MARKED',
}

export const allLessons = Object.values(Lesson);
export const regularLessons = Object.values(Lesson).filter((l) => l !== Lesson.MARKED);

export const ALL_LESSONS = 'all';