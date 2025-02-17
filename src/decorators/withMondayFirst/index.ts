import { Day } from '#/constants/days';
import { withStartDay } from '#/decorators/withStartDay';

export const withMondayFirst = () => withStartDay(Day.Monday);
