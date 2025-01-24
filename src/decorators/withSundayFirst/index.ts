import { Day } from '#/constants/days';
import { withStartDay } from '#/decorators/withStartDay';

export const withSundayFirst = () => withStartDay(Day.Sunday);
