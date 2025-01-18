export enum Lesson {
    LEKCJA_1 = 'LEKCJA_1',
    STANAG_1 = 'STANAG_1',
    MARKED = 'MARKED',
}

export const allLessons = Object.values(Lesson);
export const regularLessons = Object.values(Lesson).filter((l) => l !== Lesson.MARKED);

export const ALL_LESSONS = 'all';